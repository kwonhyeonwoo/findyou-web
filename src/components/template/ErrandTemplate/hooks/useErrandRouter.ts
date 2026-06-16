import { useRouter } from "next/navigation";

export const useErrandRouter = ()=>{
    const router = useRouter();
    const handleRouter = (id:string) => router.push(`/errand/${id}`);
    return{
        handleRouter,
    }
}