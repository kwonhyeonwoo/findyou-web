import { useApplicationCreateMutation } from '@/hooks/quires/errand-application/useApplicationCreateMutation';
import { useErrandDetailQuery } from '@/hooks/quires/errand/useErrandDetailQuery';
import { useUser } from '@/store/useUserStore';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useErrandDetail = () => {
  const { id } = useParams();
  const user = useUser();

  const { mutate } = useApplicationCreateMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isPending } = useErrandDetailQuery(String(id));

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    data,
    uid: user.userId,
    isPending,
    isOpen,
    handleIsOpen,
  };
};
