import { Address } from 'react-daum-postcode';
import { Path, FieldValues, UseFormSetValue, PathValue } from 'react-hook-form';
import { toast } from 'sonner';

interface Props<T extends FieldValues> {
  setValue: UseFormSetValue<T>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSearchAddress = <T extends FieldValues>({
  setValue,
  setIsOpen,
}: Props<T>) => {
  const handleComplete = (data: Address) => {
    setValue('address_dong' as Path<T>, data.bname as PathValue<T, Path<T>>);
    setValue('address' as Path<T>, data.address as PathValue<T, Path<T>>);
    setIsOpen(false);
  };

  const fetchAddress = async (lat: number, lng: number) => {
    try {
      // 카카오 API는 x가 경도(lng), y가 위도(lat)입니다. 순서 주의!
      const res = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}`,
          },
        },
      );
      const data = await res.json();
      if (data && data.documents && data.documents.length > 0) {
        const addressData = data.documents[0].address; // 지번 주소 정보
        console.log(addressData.region_3depth_name)
        setValue('address' as Path<T>, addressData.address_name);
        setValue('address_dong' as Path<T>, addressData.region_3depth_name);
      } else {
        toast.error('해당 좌표에 매칭되는 행정구역 주소가 없습니다.');
        console.log('해당 좌표에 매칭되는 행정구역 주소가 없습니다.');
      }
    } catch (error) {
      toast.error('주소를 가져오는 중 오류가 발생했습니다.');
    }
  };

  const handleLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLat = position.coords.latitude;
          const currentLng = position.coords.longitude;
          setValue('lat' as Path<T>, currentLat as PathValue<T, Path<T>>);
          setValue('lng' as Path<T>, currentLng as PathValue<T, Path<T>>);
          fetchAddress(currentLat, currentLng);
          setIsOpen(false);
        },
        (err) => {
          console.error('GPS 가져오기 실패:', err);
          // alert("위치 정보 권한을 허용해주세요.");
        },
        {
          enableHighAccuracy: true,
          timeout: 60000,
          maximumAge: 0,
        },
      );
    } else {
      toast.error('브라우저가 Geolocation을 지원하지 않습니다.');
    }
  };
  return {
    handleComplete,
    handleLocation,
  };
};
