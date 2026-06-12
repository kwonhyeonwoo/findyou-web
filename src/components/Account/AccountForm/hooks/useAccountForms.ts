'use client'

import { getAddInputs, getBasicInputs } from "@/constants/auth-constants";
import { useEmailCheckMutation } from "@/hooks/quires/auth/useEmailCheckMutation";
import { useSignupMutation } from "@/hooks/quires/auth/useSignupMutaion";
import { registerSchema, ReigsterType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useAccountForm = () => {
  const methods = useForm<ReigsterType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      type: "helper",
      division: 'email',
      agreeUsage: false,
      agreePrivacy: false,
      agreeMarketingMandatory: false,
      agreeMarketingOptional: false,
    },
  });
  const { watch, setValue, register, formState: { errors, isValid } } = methods;
  const { mutate, isPending } = useSignupMutation();
  const { mutate: emailCheck } = useEmailCheckMutation();
  const type = watch("type");
  const email = watch("email");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState<any>(null);
  const onSubmit = (data: ReigsterType) => {
    mutate({
      email: data.email,
      type: data.type,
      password: data.password,
      name: data.name,
      phone: data.phone,
      division: data.division,
      region: data.region,
      nickName: data.nickName,
      agreeUsage: data.agreeUsage,
      agreePrivacy: data.agreePrivacy,
      agreeMarketingMandatory: data.agreeMarketingMandatory,
      agreeMarketingOptional: data.agreeMarketingOptional,
    })
  }
  const handleChangeType = ({ type }: { type: "helper" | "client" }) => {
    setValue("type", type, { shouldValidate: true });
  }
  const handleEmailCheck = () => {
    emailCheck(email)
  };

  const handlePhoneVerifyRequest = () => {
    console.log("휴대폰 인증번호 발송 API 호출!");
  };

  const handlePhoneVerifyConfirm = () => {
    console.log("인증번호 검증 API 호출!");
  };

  const handleAddress = () => {
      setIsOpen((prev)=>!prev);
  }
  const basicInputs = getBasicInputs({
    onEmailCheck: handleEmailCheck,
    onPhoneVerifyRequest: handlePhoneVerifyRequest,
    onPhoneVerifyConfirm: handlePhoneVerifyConfirm,
  });
  const handleComplete = (data:any)=>{
    console.log('complate',data);
    setIsOpen((prev)=>!prev)
  }
  const addInputs = getAddInputs({ onAddress: handleAddress })
  const fetchData = async (lat: number, lng: number) => {
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
      console.log("카카오 원본 데이터:", data);
  
      if (data && data.documents && data.documents.length > 0) {
        const addressData = data.documents[0].address; // 지번 주소 정보
        console.log("파싱된 카카오 주소:", addressData);
  
        // 주소 상태값 업데이트
        setAddress({
          address_name: addressData.address_name,         // 전체 지번 주소
          region_1depth_name: addressData.region_1depth_name, // 시/도 (ex: 대구광역시)
          region_2depth_name: addressData.region_2depth_name, // 구/군 (ex: 동구)
          region_3depth_name: addressData.region_3depth_name, // 동/면/리 (ex: 효목동)
        });
      } else {
        console.log("해당 좌표에 매칭되는 행정구역 주소가 없습니다.");
      }
    } catch (error) {
      console.error("주소를 가져오는 중 오류가 발생했습니다:", error);
    }
  };
  
  // 2. 📍 버튼 클릭 시 실행할 GPS 호출 함수
  const handleLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLat = position.coords.latitude;
          const currentLng = position.coords.longitude;
  
          // 지도나 다른 곳에 쓰기 위해 란타임 State도 저장해두고
          setLocation({ lat: currentLat, lng: currentLng });
  
          // 🔥 State가 바뀌길 기다리지 않고, 구해온 따끈따끈한 좌표를 '즉시' 주소 변환 함수로 쏩니다!
          fetchData(currentLat, currentLng);
        },
        (err) => {
          console.error("GPS 가져오기 실패:", err);
          alert("위치 정보 권한을 허용해주세요.");
        },
        {
          enableHighAccuracy: true, 
          timeout: 60000, 
          maximumAge: 0, 
        }
      );
    } else {
      alert("브라우저가 Geolocation을 지원하지 않습니다.");
    }
  };
 
  return {
    type,
    methods,
    basicInputs,
    addInputs,
    isValid,
    errors,
    isPending,
    isOpen,
    handleLocation,
    setIsOpen,
    handleComplete,
    onSubmit,
    register,
    handleChangeType
  }
}