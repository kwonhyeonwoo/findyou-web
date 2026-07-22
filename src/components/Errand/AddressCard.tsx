import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

interface Props {
  address: string;
}
export default function AddressCard({ address }: Props) {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY!,
    libraries: ['services'],
  });
  if (loading) return <div style={{ height: 476 }}>로딩중</div>;

  if (error) return <div style={{ height: 476 }}>에러: {String(error)}</div>;
  console.log('sss', Object.keys(window.kakao.maps));
  //   return (
  //     <Map
  //       center={{ lat: 35.8714, lng: 128.6014 }}
  //       style={{ width: '100%', height: 476 }}
  //       level={3}
  //     >
  //       <MapMarker position={{ lat: 35.8714, lng: 128.6014 }} />
  //     </Map>
  //   );
  return (
    <div className="flex w-full cursor-pointer items-center gap-3 rounded-[12px] border border-[#C7C4D7] bg-[#F5F3F3] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <Image
          src="/common/address-color.svg"
          alt="address-color"
          width={16}
          height={20}
        />
      </div>
      <div>
        <p className="text-[12px] font-medium text-[#777586]">희망장소</p>
        <p className="text-[14px] font-medium text-[#1B1C1C]">{address}</p>
      </div>
    </div>
  );
}
