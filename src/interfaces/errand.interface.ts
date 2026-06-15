import { ErrandCategory } from "@/schema/errand.schema";

export type ErrandStatus = 'matching' | 'in_progress' | 'completed';
// matching: 모집중, in_progress: 진행중, completed: 완료

export interface ILiveErrand {
    status: ErrandStatus;
    title:string;
    price:string;
    address:string;
    time:string;
}

export interface ErrandResponse{
    address:string
    category: ErrandCategory
    createdAt:Date;
    description: string;
    id: string;
    images: string;
    lat: number;
    lng: number;
    openLink:string;
    price:string; 
    status:ErrandStatus;
    title:string;
}