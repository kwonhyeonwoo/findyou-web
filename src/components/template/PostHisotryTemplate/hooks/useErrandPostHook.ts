import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CustomStatus } from '@/interfaces/common.interface';
import { useGetMyErrandsQuery } from '@/hooks/quires/errand/useGetMyErrandsQuery';
import { useUser } from '@/store/useUserStore';
import { useAccepteErrandApplication } from '@/hooks/mutations/errand-application/useAccepteErrandApplication';
import { useReviewViewer } from '@/hooks/common/useReviewViewer';

export interface SelectedApplication {
  applicationId: string;
  nickName: string;
  helperId: string;
}

export const useErrandPostHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId } = useUser();
  const { mutate } = useAccepteErrandApplication();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [selectedApplicant, setSelectedApplicant] =
    useState<SelectedApplication | null>(null);
  const [isBottomOpen, setIsBottomOpen] = useState<boolean>(false);
  const { data: errandData } = useGetMyErrandsQuery();
  const { selectedReview, isReviewOpen, openReceivedReview, closeReview } =
    useReviewViewer();

  const handleStatusActive = ({
    idx,
    id,
    status,
    applicationId,
  }: {
    idx: number | null;
    id?: string;
    status: CustomStatus;
    applicationId?: string;
  }) => {
    if (status === CustomStatus.PENDING) {
      setCurrentIdx(idx);
      setIsBottomOpen((prev) => !prev);
    } else if (status === CustomStatus.IN_PROGRESS) {
      router.push(`/errand/progress/${id}`);
    } else if (status === CustomStatus.COMPLETED) {
      const completedApplication = errandData?.[idx ?? 0]?.applications?.find(
        (application) => application.status === CustomStatus.COMPLETED,
      );
      if (completedApplication?.hasWrittenReview) {
        openReceivedReview(completedApplication.reviews, userId);
      } else {
        router.push(`/errand/${applicationId}/review`);
      }
    } else if (status === CustomStatus.COMPLETED_REQUEST) {
      router.push(`/errand/progress/${id}`);
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

  // 지원자 수락
  const handleErrandAccepted = ({
    applicationId,
  }: {
    applicationId: string;
  }) => {
    mutate({ applicationId });
    setSelectedApplicant(null);
    setIsBottomOpen(false);
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
    selectedReview,
    isReviewOpen,
    dataType: searchParams.get('type'),
    handleErrandDetailActive,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleErrandAccepted,
    handleStatusActive,
    closeReview,
  };
};
