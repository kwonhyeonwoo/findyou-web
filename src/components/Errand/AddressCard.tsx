import { useEffect } from 'react';

interface Props {
  lat: number;
  lng: number;
}
export default function AddressCard({ lat, lng }: Props) {
  useEffect(() => {
    const kakao = (window as typeof window & { kakao?: any }).kakao;
    if (!kakao?.maps) return;

    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      if (!mapContainer) return;

      const mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 3,
      };
      new kakao.maps.Map(mapContainer, mapOption);
    });
  }, []);

  return (
    <div className="w-full border">
      <div id="map" className="h-100 w-full" />
    </div>
  );
}
