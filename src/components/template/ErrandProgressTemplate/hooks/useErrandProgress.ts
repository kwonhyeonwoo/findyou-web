import { usePatchErrandCompleteRequest } from '@/hooks/mutations/errand/usePatchErrandCompleteRequest';
import { usePostErrandApplicationComplete } from '@/hooks/mutations/errand/usePostErrandApplicationComplete';
import { useGetErrandProgressQuery } from '@/hooks/quires/errand/useGetErrandProgressQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { useUser } from '@/store/useUserStore';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export const useErrandProgress = () => {
  const { id } = useParams();
  const router = useRouter();
  const params = useParams();
  const { userId } = useUser();
  const { data } = useGetErrandProgressQuery(String(id));
  const { mutate: completeMutate } = usePostErrandApplicationComplete(
    String(id),
    String(data?.helper?.nickName),
  );
  const { mutate: completeRequestMutate } = usePatchErrandCompleteRequest();
  const [isCompleteOpen, setIsCompleteOpen] = useState<boolean>(false);
  const handleProfileDetail = (id: string) => {
    router.push(`/helper/${id}`);
  };

  // 카카오 오픈링크 이동
  const handleKaKaoOpenLink = (link: string) => {
    router.push(link);
  };

  // 심부름 완료 모달 열기
  const handleOpenCompleteModal = () => {
    setIsCompleteOpen(true);
  };

  // 수락하기 버튼 클릭 시 심부름 완료 처리
  const handleCompleted = () => {
    completeMutate(String(id));
  };

  // 완료요청 보내기
  const handleCompletedRequest = () => {
    completeRequestMutate(String(params.id));
  };

  const BUTTON_STATUS_TEXT: Partial<
    Record<CustomStatus, { label: string; onClick: () => void }>
  > = {
    IN_PROGRESS: { label: '심부름 완료하기', onClick: handleOpenCompleteModal },
    COMPLETED_REQUEST: {
      label:
        data?.completionRequestedBy === userId
          ? '완료 대기중'
          : '완료 수락하기',
      onClick: handleOpenCompleteModal,
    },
    COMPLETED: { label: '리뷰쓰기', onClick: () => { } },
  };

  const BUTTOM_SUBMIT: Partial<Record<CustomStatus, () => void>> = {
    IN_PROGRESS: handleCompletedRequest,
    COMPLETED_REQUEST: handleCompleted,
  };
  return {
    data,
    isCompleteOpen,
    BUTTOM_SUBMIT,
    BUTTON_STATUS_TEXT,
    userId,
    setIsCompleteOpen,
    handleOpenCompleteModal,
    handleCompleted,
    handleProfileDetail,
    handleKaKaoOpenLink,
  };
};
