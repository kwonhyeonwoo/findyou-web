import usePostCompletedRequestMutation from '@/hooks/mutations/helper/usePostCompletedRequestMutation';
import usePostCompleteMutation from '@/hooks/mutations/helper/usePostCompleteMutation';
import useGetReceivedApplicationQuery from '@/hooks/quires/helper/useGetReceivedApplicationQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { useUser } from '@/store/useUserStore';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useHelperProgress() {
  const router = useRouter();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useUser();
  const { data: applications } = useGetReceivedApplicationQuery(String(id));
  const { mutate, isPending } = usePostCompletedRequestMutation(String(id));
  const { mutate: acceptMutate, isPending: isAcceptPending } =
    usePostCompleteMutation(String(id));

  const handleProfileActive = (clientId: string) => {
    router.push(`/user/${clientId}`);
  };

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleCompletedRequest = () => {
    if (data && data.helperPosts) {
      mutate(data.helperPosts.id);
    }
  };

  const handleAcceptCompleted = () => {
    if (data && data.helperPosts) {
      acceptMutate(data.helperPosts.id);
    }
  };

  const data = applications?.find(
    (application) =>
      application.status === CustomStatus.ACCEPTED ||
      application.status === CustomStatus.COMPLETED_REQUEST,
  );
  return {
    data,
    isOpen,
    isPending: isPending || isAcceptPending,
    userId,
    handleCompletedRequest,
    handleAcceptCompleted,
    setIsOpen,
    handleIsOpen,
    handleProfileActive,
  };
}
