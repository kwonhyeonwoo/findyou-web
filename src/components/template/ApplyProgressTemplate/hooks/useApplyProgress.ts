import useApplicationCompleteMutation from '@/hooks/mutations/helper-application/useApplicationCompleteMutation';
import useGetAcceptedApplicationQuery from '@/hooks/quires/helper-application/useGetAcceptedApplicationQuery';
import { useParams } from 'next/navigation';
import { useState } from 'react';

function useApplyProgress() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAcceptedApplicationQuery(String(id));
  const { mutate, isPending } = useApplicationCompleteMutation();

  const handleModalOpen = () => setIsModalOpen(true);
  const handleApplicationComplete = (id: string) => {
    mutate(id);

  };
  const handleOpenLinkAction = (link: string) => window.open(link, '_blank')
  return {
    data,
    isPending,
    isLoading,
    isModalOpen,
    setIsModalOpen,
    handleModalOpen,
    handleOpenLinkAction,
    handleApplicationComplete,
  };
}

export default useApplyProgress;
