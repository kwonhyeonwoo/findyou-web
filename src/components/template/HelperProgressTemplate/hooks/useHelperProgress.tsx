import usePostCompletedRequestMutation from '@/hooks/mutations/helper-application/usePostCompletedRequestMutation';
import useGetAcceptedApplicationQuery from '@/hooks/quires/helper-application/useGetAcceptedApplicationQuery';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useHelperProgress() {
  const router = useRouter();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetAcceptedApplicationQuery(String(id));
  const { mutate } = usePostCompletedRequestMutation(String(id));
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
    handleCompletedRequest,
    setIsOpen,
    handleIsOpen,
    handleProfileActive,
  };
}

// 수락요청만 하면 됨... helper-application/:id/completed-requested 보내면 됨
//  application id를 post로 보냄, 그리고 서버에서는 getUser을 받아와서 application에 있는
// helper.helper.id랑 비교를함. 같으면 completed-reuqest , 같지가않으면 에러전달
