import usePostCompletedRequestMutation from '@/hooks/mutations/helper-application/usePostCompletedRequestMutation';
import useGetAcceptedApplicationQuery from '@/hooks/quires/helper-application/useGetAcceptedApplicationQuery';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useHelperProgress() {
  const router = useRouter();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetAcceptedApplicationQuery(String(id));
  const { mutate, isPending } = usePostCompletedRequestMutation(String(id));
  const handleProfileActive = (clientId: string) => {
    router.push(`/user/${clientId}`);
  };

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleCompletedRequest = () => {
    mutate(String(id));
  };

  return {
    data,
    isOpen,
    isPending,
    handleCompletedRequest,
    setIsOpen,
    handleIsOpen,
    handleProfileActive,
  };
}
