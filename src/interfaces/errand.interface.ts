import { ErrandCategory } from "@/schema/errand.schema";

export type ErrandStatus = 'matching' | 'in_progress' | 'completed';

export interface ILiveErrand{
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