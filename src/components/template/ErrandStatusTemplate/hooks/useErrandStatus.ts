import { useErrandCompleteMutation } from '@/hooks/mutations/errand/useErrandCompleteMutation';
import { useGetErrandProgressQuery } from '@/hooks/quires/errand/useGetErrandProgressQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export const useErrandStatus = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data } = useGetErrandProgressQuery(String(id));
  const { mutate } = useErrandCompleteMutation(
    String(id),
    String(data?.helper?.nickName),
  );
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
  const handleAccepted = () => {
    mutate(String(id));
  };

  // 완료요청 보내기
  const handleCompletedRequest = () => {};

  const BUTTON_STATUS_TEXT: Partial<
    Record<CustomStatus, { label: string; onClick: () => void }>
  > = {
    IN_PROGRESS: { label: '심부름 완료하기', onClick: handleCompletedRequest },
    COMPLETED_REQUEST: {
      label: '완료 수락하기',
      onClick: handleOpenCompleteModal,
    },
    COMPLETED: { label: '리뷰쓰기', onClick: () => {} },
  };
  return {
    data,
    isCompleteOpen,
    BUTTON_STATUS_TEXT,
    setIsCompleteOpen,
    handleOpenCompleteModal,
    handleAccepted,
    handleProfileDetail,
    handleKaKaoOpenLink,
  };
};
