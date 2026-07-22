import { useApplicationCreateMutation } from '@/hooks/quires/errand-application/useApplicationCreateMutation';
import { useErrandDetailQuery } from '@/hooks/quires/errand/useErrandDetailMutation';
import { useUser } from '@/store/useUserStore';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useErrandDetail = () => {
  const user = useUser();
  const { id } = useParams();
  const { mutate } = useApplicationCreateMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const { data, isPending } = useErrandDetailQuery(String(id));

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    if (id) {
      mutate({ message, errandId: id as string });
    }
  };
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMessage(value);
  };
  return {
    data,
    uid: user.userId,
    isPending,
    isOpen,
    message,
    handleChangeMessage,
    handleIsOpen,
    handleSubmit,
  };
};
