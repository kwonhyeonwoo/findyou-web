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

  const handleKaKaoOpenLink = (link: string) => {
    router.push(link);
  };

  const handleOpenCompleteModal = () => {
    setIsCompleteOpen(true);
  };
  const handleComplete = () => {
    mutate(String(id));
  };

  const BUTTON_STATUS_TEXT: Partial<
    Record<CustomStatus, { label: string; onClick: () => void }>
  > = {
    IN_PROGRESS: { label: '카카오톡 채팅', onClick: handleKaKaoOpenLink },
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
    handleComplete,
    handleProfileDetail,
    handleKaKaoOpenLink,
  };
};
