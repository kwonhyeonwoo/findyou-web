import useDeleteHelperAppliMutation from '@/hooks/mutations/helper-application/useDeleteHelperAppliMutation';
import { useGetApplicationsQuery } from '@/hooks/quires/helper-application/useGetApplicationsQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useApplication = () => {
  const router = useRouter();
  const { data, isLoading } = useGetApplicationsQuery();
  const { mutate: deleteApplication } = useDeleteHelperAppliMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currAppliId, setCurrAppliId] = useState<string>('');

  const handleStatusAction = ({
    id,
    status,
    helperId,
  }: {
    id: string;
    helperId: string;
    status: CustomStatus;
  }) => {
    // router.push(`/history/errand/${id}`);
    if (status === CustomStatus.IN_PROGRESS) {
      // 진행 중
    } else if (status === CustomStatus.COMPLETED) {
      router.push(`/helper/${id}/review`); // 완료
    } else if (status === CustomStatus.PENDING) {
      setIsModalOpen(true);
      setCurrAppliId(id);
      console.log('currid', id);
      // 대기 -> 모달창 띄어서 거절하기 할건지 물어보기,
    } else if (status === CustomStatus.ACCEPTED) {
      // 수락 -> 진행상황 페이지로 이동
      router.push(`/apply/${id}/progress`);
    } else if (status === CustomStatus.COMPLETE_REQUESTED) {
      // 완료 대기중 -> 완료 수락하기 모달 띄어서 해야함
    }
  };

  const handleDeleteApplication = () => {
    deleteApplication(currAppliId);
  };
  return {
    data,
    isModalOpen,
    handleDeleteApplication,
    setIsModalOpen,
    handleStatusAction,
  };
};
