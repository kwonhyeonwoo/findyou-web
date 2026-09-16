import usePostCompletedRequestMutation from '@/hooks/mutations/helper/usePostCompletedRequestMutation';
import usePostCompleteMutation from '@/hooks/mutations/helper/usePostCompleteMutation';
import { useGetDetailHelperApplication } from '@/hooks/quires/helper-application/useGetDetailHelperApplication';
import useGetReceivedApplicationQuery from '@/hooks/quires/helper/useReceivedHelperApplications';
import { CustomStatus } from '@/interfaces/common.interface';
import { useUser } from '@/store/useUserStore';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useHelperProgress() {
  const { id } = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useUser();
  const { data: application } = useGetDetailHelperApplication(id as string);
  const { mutate, isPending } = usePostCompletedRequestMutation(String(id));
  const { mutate: acceptMutate, isPending: isAcceptPending } =
    usePostCompleteMutation(String(id));

  const handleProfileActive = (clientId: string) => {
    router.push(`/user/${clientId}`);
  };

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  //. 완료 요청하기
  const handleCompletedRequest = () => {
    if (application && application.helperPosts) {
      mutate(application.helperPosts.id);
    }
  };
  console.log('tq', application);
  const handleAcceptCompleted = () => {
    if (application && application.helperPosts) {
      acceptMutate(application.helperPosts.id);
    }
  };

  return {
    data: application,
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
