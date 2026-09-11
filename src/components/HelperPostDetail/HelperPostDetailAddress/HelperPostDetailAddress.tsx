import AddressCard from '@/components/Errand/AddressCard';
import Image from 'next/image';

interface Props {
  lat: number;
  lng: number;
  address: string;
}

export default function HelperPostDetailAddress({ lat, lng, address }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[14px]">거래 희망장소</p>
      <p className="flex items-center">
        <Image
          src={'/icon/location-pin.svg'}
          alt="gps"
          width={20}
          height={20}
        />
        <span className="text-[13px]">{address}</span>
      </p>
      <AddressCard lat={lat} lng={lng} />
    </div>
  );
}
