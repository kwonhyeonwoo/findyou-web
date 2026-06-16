export interface UserResponse{
    email: string;
    password: string;
    name: string;
    type: UserType;
    phone: string;
    address_dong:string;
    division: string; // kakao, naver, email
    address: string;
    lat: number; // 위도
    lng: number; // 경도
    nickName: string;
}

export type UserType = "client" | 'helper' | null;