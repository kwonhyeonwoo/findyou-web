import { useRouter } from "next/navigation"

export const useBack = () => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    const handleHome = () => {
        router.push("/");
    }
    return { handleBack, handleHome };
}