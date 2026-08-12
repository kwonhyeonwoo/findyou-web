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
  const [currApplication, setCurrApplication] = useState<{
    appliId: string;
    clientId: string;
  }>({
    appliId: '',
    clientId: '',
  });
  const [isCompleteOpen, setIsCompleteOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetReceivedApplicationQuery(String(id) ?? '');
  const { mutate } = useAcceptedMutation({
    appliId: currApplication.appliId ?? '',
    clientId: currApplication.clientId,
  });
  const { mutate: rejectedMutate } = useRejectedMutation(
    currApplication.appliId ?? '',
  );

  const handleCompleteOpen = (
    type: 'ACCEPTED' | 'REJECT',
    appliId: string,
    clientId: string,
  ) => {
    setSelectedType(type);
    setCurrApplication({
      appliId,
      clientId,
    });
    setIsCompleteOpen((prev) => !prev);
  };
  const handleAccepted = () => {
    if (currApplication.appliId) {
      mutate(currApplication.appliId);
    }
  };

  const handleRejected = () => {
    if (currApplication.appliId) {
      rejectedMutate(currApplication.appliId);
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
