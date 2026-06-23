import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

export const useBackShare = ()=>{
    const router = useRouter();
    const handleBackBtn = ()=> router.back();
    const handleCopy = async()=>{
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success('주소를 복사하였습니다 !')
        } catch (err) {
            console.error("클립보드 복사 실패:", err);
            toast.error('주소 복사 실패')
          }
    }
    return{
        handleBackBtn,
        handleCopy
    }
}