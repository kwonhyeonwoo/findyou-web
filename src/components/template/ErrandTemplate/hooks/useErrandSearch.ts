import { CATEGORY_TABS } from "@/constants/common.-constants";
import { ErrandCategory } from "@/schema/errand.schema";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const useErrandSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) return;

        if (e.key === 'Enter') {
            const value = e.currentTarget.value;

            const params = new URLSearchParams(searchParams.toString());

            if (value.trim()) {
                params.set('keyword', value);
            } else {
                params.delete('keyword');
            }

            router.push(`/errand?${params.toString()}`);
        }
    };

    const listTabs: {
        type: ErrandCategory | "all";
        text: string;
    }[] = [
            {
                type: "all",
                text: "전체",
            },
            ...CATEGORY_TABS,
        ];

    return {
        keyword: searchParams.get('keyword') || "",
        listTabs,
        handleKeydown,
    };
};