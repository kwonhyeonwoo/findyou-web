import { ReigsterType } from "@/schema/auth.schema";
import { Address } from "react-daum-postcode";
import { UseFormSetValue } from "react-hook-form";
import { toast } from "sonner";

interface Props {
    setValue: UseFormSetValue<ReigsterType>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSearchAddress = ({ setValue, setIsOpen }: Props) => {
    const handleComplete = (data: Address) => {
        setValue('address', data.address);
        setIsOpen(false);
    }

    const fetchAddress = async (lat: number, lng: number) => {
        try {
            const KAKAO_REST_KEY = "ce65c42e8c262ea24a6920571629055d"; // 💡 실제로는 .env에 넣는걸 추천!

            // 카카오 API는 x가 경도(lng), y가 위도(lat)입니다. 순서 주의!
            const res = await fetch(
                `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
                {
                    headers: {
                        Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
                    },
                }
            );
            const data = await res.json();
            if (data && data.documents && data.documents.length > 0) {
                const addressData = data.documents[0].address; // 지번 주소 정보
                setValue('address', addressData.address_name);
            } else {
                console.log("해당 좌표에 매칭되는 행정구역 주소가 없습니다.");
            }
        } catch (error) {
            toast.error('주소를 가져오는 중 오류가 발생했습니다.');
            console.log('error', error)
        }
    };

    const handleLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLat = position.coords.latitude;
                    const currentLng = position.coords.longitude;
                    setValue('lat', currentLat);
                    setValue('lng', currentLng);
                    fetchAddress(currentLat, currentLng);
                    setIsOpen(false);
                },
                (err) => {
                    console.error("GPS 가져오기 실패:", err);
                    // alert("위치 정보 권한을 허용해주세요.");
                },
                {
                    enableHighAccuracy: true,
                    timeout: 60000,
                    maximumAge: 0,
                }
            );
        } else {
            toast.error('브라우저가 Geolocation을 지원하지 않습니다.');
        }
    };
    return {
        handleComplete,
        handleLocation,
    }
}