import { ErrandCategory } from "@/schema/errand.schema";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useErrandCategory = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onCurrentCategory = useCallback(
        (type: ErrandCategory | "all") => {
            const params = new URLSearchParams(searchParams.toString());

            params.set('category', type);
            router.push(`/errand?${params.toString()}`);
        },
        [searchParams, router],
    );

    return {
        currentCategory: (searchParams.get('category') as ErrandCategory) || "all",
        onCurrentCategory
    };
};