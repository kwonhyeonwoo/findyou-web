import { useDeleteErrandApplicationMutation } from '@/hooks/mutations/errandApplication/useDeleteErrandApplicationMutation';
import { useGetErrandApplicationsQuery } from '@/hooks/quires/errand-application/useGetErrandApplicationsQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useErrandApplicationHistory = () => {
  const router = useRouter();
  const { data: errandApplications } = useGetErrandApplicationsQuery();
  const { mutate: applicationDelete } = useDeleteErrandApplicationMutation();
  const [currApplicationId, setCurrApplicationId] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleErrandDetailActive = (errandId: string) => {
    router.push(`/errand/${errandId}`);
  };

  // 이 부분도 취소인지, 진행상황인지, 리뷰보기 인지 알아야하잖아
  const handleStatusActive = ({
    status,
    currApplicationId,
    errandId,
  }: {
    status: CustomStatus;
    currApplicationId: string;
    errandId: string;
  }) => {
    if (status === CustomStatus.PENDING) {
      // 대기 중
      setCurrApplicationId(currApplicationId);
      setIsModalOpen(true);
    } else if (status === CustomStatus.ACCEPTED) {
      // 수락
      router.push(`/errand/progress/${errandId}`);
    }
  };

  const handleDeleteApplication = () => {
    applicationDelete(currApplicationId);
  };
  return {
    errandApplications,
    isModalOpen,
    handleDeleteApplication,
    setIsModalOpen,
    handleStatusActive,
    handleErrandDetailActive,
  };
};

// 내 게시글(헬퍼)
// 1. 헬퍼지원 내역에도 리뷰보기, 지원취소, 진행상황등을 볼 수 있어야함.
// 2. 여기에서도 카드를 클릭하면 심부름 진행상황을 볼 수 있어애함 맞지?

// 공통부분
// 진행상황인 경우에는 심부름상세 페이지로 이동하긴해야함
// 지원취소를 클릭하면 모닱창이 떠야함.

// 심부름완료 요청
// 1. 의뢰인 또는 헬퍼가 완료요청을 함
// 2. 완료요청을 받는 쪽에서는 수락을 해줘야함
// 3. 누가 완료요청을 했는지 알아야함.
// 4. 그 완료요청을 한 기준은 completionRequestedBy 컬럼으로 알아내면 될듯?