import { useErrandCompleteMutation } from '@/hooks/mutations/errand/useErrandCompleteMutation';
import { useGetErrandProgressQuery } from '@/hooks/quires/errand/useGetErrandProgressQuery';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export const useErrandStatus = () => {
  const { id } = useParams();
  const router = useRouter();
  console.log('id', id);
  const { data } = useGetErrandProgressQuery(String(id));
  const { mutate } = useErrandCompleteMutation(
    String(id),
    String(data?.applications[0]?.helper.nickName),
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
  return {
    data,
    isCompleteOpen,
    setIsCompleteOpen,
    handleOpenCompleteModal,
    handleComplete,
    handleProfileDetail,
    handleKaKaoOpenLink,
  };
};
