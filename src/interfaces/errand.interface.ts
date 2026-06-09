export type ErrandStatus = 'matching' | 'in_progress' | 'completed';

export interface ILiveErrand{
    status: ErrandStatus;
    title:string;
    price:string;
    address:string;
    time:string;
}