import { useDeleteErrandApplicationMutation } from "@/hooks/mutations/errandApplication/useDeleteErrandApplicationMutation";
import { useGetErrandApplicationsQuery } from "@/hooks/quires/errand-application/useGetErrandApplicationsQuery"
import { CustomStatus } from "@/interfaces/common.interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useErrandApplicationDetail = () => {
    const router = useRouter();
    const { data: errandApplications } = useGetErrandApplicationsQuery();
    const { mutate: applicationDelete } = useDeleteErrandApplicationMutation();
    const [currApplicationId, setCurrApplicationId] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log('errandApplications', errandApplications)

    const handleErrandDetailActive = (errandId: string) => {
        router.push(`/errand/${errandId}`)
    }

    // 이 부분도 취소인지, 진행상황인지, 리뷰보기 인지 알아야하잖아
    const handleStatusActive = ({ status, currApplicationId }: { status: CustomStatus, currApplicationId: string }) => {
        if (status === CustomStatus.PENDING) {
            setCurrApplicationId(currApplicationId)
            setIsModalOpen(true);
        }
    }

    const handleDeleteApplication = () => {
        applicationDelete(currApplicationId)
    }
    return {
        errandApplications,
        isModalOpen,
        handleDeleteApplication,
        setIsModalOpen,
        handleStatusActive,
        handleErrandDetailActive
    }
}

// 내 게시글 (심부름)
// 1. 심부름 지원내역일 때 리뷰보기, 지원취소, 진행상황 등 볼 수 있어야하고
// 2. 심부름 지원내역에서 내가 카드를 클릭하면 심부름상세로 이동해야함.

// 내 게시글(헬퍼)
// 1. 헬퍼지원 내역에도 리뷰보기, 지원취소, 진행상황등을 볼 수 있어야함.
// 2. 여기에서도 카드를 클릭하면 심부름 진행상황을 볼 수 있어애함 맞지?


// 공통부분
// 진행상황인 경우에는 심부름상세 페이지로 이동하긴해야함 
// 지원취소를 클릭하면 모닱창이 떠야함.
