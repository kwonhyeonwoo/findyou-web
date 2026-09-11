import useDeleteHelperAppliMutation from '@/hooks/mutations/helper-application/useDeleteHelperAppliMutation';
import { useGetApplicationsQuery } from '@/hooks/quires/helper-application/useGetApplicationsQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { ReviewRole } from '@/interfaces/review.interface';
import { useUser } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useHelperApplication = () => {
  const router = useRouter();
  const { userId } = useUser();
  const { data: helperApplications, isLoading } = useGetApplicationsQuery();
  const { mutate: deleteApplication } = useDeleteHelperAppliMutation();
  const [isBottomOpen, setIsBottomOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currAppliId, setCurrAppliId] = useState<string>('');

  const handleHelperStatusActive = ({
    id,
    status,
    helperId,
    hasWrittenReview,
    nickName,
  }: {
    id: string;
    helperId: string;
    status: CustomStatus;
    hasWrittenReview?: boolean;
    nickName?: string;
  }) => {
    // router.push(`/history/errand/${id}`);
    if (status === CustomStatus.IN_PROGRESS) {
      // 진행 중
      router.push(`/apply/${id}/progress`);
    } else if (status === CustomStatus.COMPLETED) {
      // 완료
      if (hasWrittenReview) {
        setCurrAppliId(id);
        setIsBottomOpen(true);
      } else {
        router.push(`/helper/${id}/review`);
      }
    } else if (status === CustomStatus.PENDING) {
      setIsModalOpen(true);
      setCurrAppliId(id);
      console.log('id', id);
      // 대기 -> 모달창 띄어서 거절하기 할건지 물어보기,
    } else if (status === CustomStatus.ACCEPTED) {
      // 수락 -> 진행상황 페이지로 이동
      router.push(`/helper/${id}/progress`);
    } else if (status === CustomStatus.COMPLETED_REQUEST) {
      router.push(`/apply/${id}/progress`);
    } else if (status === CustomStatus.REJECTED) {
      setIsModalOpen(true);
    }
  };

  const handleDeleteApplication = () => {
    deleteApplication(currAppliId);
  };

  const handleHelperDetailActive = ({
    type,
    applicationId,
    helperPostId,
  }: {
    type: CustomStatus;
    applicationId: string;
    helperPostId: string;
  }) => {
    if (type === CustomStatus.PENDING) {
      return router.push(`/helper/${helperPostId}/post`);
    }
    return router.push(`/helper/${applicationId}/progress`);
  };
  const currApplication = helperApplications?.find(
    (item) => item.id === currAppliId,
  );
  const review = currApplication?.reviews.find(
    (item) => item.role === ReviewRole.USER,
  );
  return {
    helperApplications,
    isModalOpen,
    currAppliId,
    review,
    isBottomOpen,
    setIsBottomOpen,
    handleHelperDetailActive,
    handleDeleteApplication,
    setIsModalOpen,
    handleHelperStatusActive,
  };
};
