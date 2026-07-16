import { ErrandCategory } from "@/schema/errand.schema";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useErrandCategory = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    console.log('first', searchParams.get('category'))
    const onCurrentCategory = useCallback(
        (type: ErrandCategory | 'all') => {
            const params = new URLSearchParams(searchParams.toString());
            console.log('type', type)
            if (type !== 'all') {
                params.set('category', type);
                router.push(`/errand?${params.toString()}`);
            } else if (type === 'all') {
                router.push('/errand');
            }

        },
        [searchParams, router],
    );

    return {
        currentCategory: (searchParams.get('category') as ErrandCategory),
        onCurrentCategory
    };
};