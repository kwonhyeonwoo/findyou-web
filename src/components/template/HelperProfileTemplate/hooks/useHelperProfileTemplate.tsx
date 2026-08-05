import { useHelperAppliCreateMutation } from '@/hooks/mutations/helper-application/useHelperAppliCreateMutation';
import { useGetHelperQuery } from '@/hooks/quires/helper/useGetHelperQuery';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useHelperProfileTemplate = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useGetHelperQuery(String(id));
  const { mutate, isPending } = useHelperAppliCreateMutation();
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
    setMessage('');
  };
  const handleApplicationSubmit = (helperId: string) => {
    mutate({
      message,
      helperId: String(id),
    });
  };

  return {
    data,
    isOpen,
    message,
    isPending,
    handleChangeMessage,
    setIsOpen,
    handleModalOpen,
    handleApplicationSubmit,
  };
};
