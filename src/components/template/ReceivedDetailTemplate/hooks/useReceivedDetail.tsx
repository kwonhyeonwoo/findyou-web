import useAcceptedMutation from '@/hooks/mutations/helper-application/useAcceptedMutation';
import useRejectedMutation from '@/hooks/mutations/helper-application/useRejectedMutation';
import useGetReceivedApplicationQuery from '@/hooks/quires/helper/useGetReceivedApplicationQuery';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function useReceivedDetail() {
  const { id } = useParams();
  const [selectedType, setSelectedType] = useState<
    'ACCEPTED' | 'REJECT' | undefined
  >(undefined);
  const [currAppliId, setCurrAppliId] = useState<string>();
  const [isCompleteOpen, setIsCompleteOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetReceivedApplicationQuery(String(id) ?? '');
  const { mutate } = useAcceptedMutation(currAppliId ?? '');
  const { mutate: rejectedMutate } = useRejectedMutation(currAppliId ?? '');

  const handleCompleteOpen = (type: 'ACCEPTED' | 'REJECT', id: string) => {
    setSelectedType(type);
    setCurrAppliId(id);
    setIsCompleteOpen((prev) => !prev);
  };
  const handleAccepted = () => {
    if (currAppliId) {
      mutate(currAppliId);
    }
  };

  const handleRejected = () => {
    if (currAppliId) {
      rejectedMutate(currAppliId);
    }
  };

  return {
    data,
    isLoading,
    isCompleteOpen,
    selectedType,
    handleRejected,
    handleAccepted,
    setIsCompleteOpen,
    handleCompleteOpen,
  };
}
