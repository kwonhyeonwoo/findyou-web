import { useRouter } from "next/navigation";

export const useErrandCardRouter = () => {
    const router = useRouter();
    const handleRouter = (id: string) => router.push(`/errand/${id}`);
    return {
        handleRouter,
    }
}