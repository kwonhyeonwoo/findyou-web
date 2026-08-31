import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CustomStatus } from '@/interfaces/common.interface';
import { useApplicationStatusMutation } from '@/hooks/quires/errand-application/useApplicationStatusMutation';
import { useGetMyErrandsQuery } from '@/hooks/quires/errand/useGetMyErrandsQuery';
import { useGetHelpersQuery } from '@/hooks/quires/helper/useGetHelpersQuery';
import { useUser } from '@/store/useUserStore';
import useGetMyHelperPostsQuery from '@/hooks/quires/helper/useGetMyHelperPostsQuery';

// 내 게시글
// 내가 등록한 심부름 , 내가 등록한 헬퍼게시글

export interface SelectedApplication {
  applicationId: string;
  nickName: string;
  helperId: string;
}

export const useErrandPostHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId } = useUser();
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [selectedApplicant, setSelectedApplicant] =
    useState<SelectedApplication | null>(null);
  const [isBottomOpen, setIsBottomOpen] = useState<boolean>(false);
  const { data: errandData } = useGetMyErrandsQuery();
  const handleSatusActive = ({
    idx,
    id,
    status,
  }: {
    idx: number | null;
    id?: string;
    status: CustomStatus;
  }) => {
    if (status === CustomStatus.PENDING) {
      setCurrentIdx(idx);
      setIsBottomOpen((prev) => !prev);
    } else if (status === CustomStatus.IN_PROGRESS) {
      router.push(`/errand/status/${id}`);
    } else if (status === CustomStatus.COMPLETED) {
    }
  };
  const handleModalOpen = ({
    applicationId,
    nickName,
    helperId,
  }: SelectedApplication) => {
    setSelectedApplicant({
      applicationId,
      nickName,
      helperId,
    });
  };

  const handleApplicationUpdate = ({
    applicationId,
    helperId,
  }: {
    applicationId: string;
    helperId: string;
  }) => {
    mutate({ applicationId });
    setSelectedApplicant(null);
    router.push(`/helper/${helperId}}`);
  };

  const handleHelperProfile = (helperId: string) => {
    router.push(`/helper/${helperId}`);
  };

  const handleErrandDetailActive = (errandId: string) => {
    router.push(`/errand/${errandId}`);
  };
  return {
    errandData,
    isBottomOpen,
    currentIdx,
    selectedApplicant,
    userId,
    dataType: searchParams.get('type'),
    handleErrandDetailActive,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleApplicationUpdate,
    handleSatusActive,
  };
};
