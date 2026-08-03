import { useHelperAppliCreateMutation } from '@/hooks/mutations/helper-application/useHelperAppliCreateMutation';
import { useGetHelperQuery } from '@/hooks/quires/helper/useGetHelperQuery';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useHelperProfileTemplate = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useGetHelperQuery(String(id));
  const { mutate } = useHelperAppliCreateMutation();

  const handleModalOpen = () => setIsOpen(true);
  const handleApplicationSubmit = () => {};

  return {
    data,
    isOpen,
    setIsOpen,
    handleModalOpen,
    handleApplicationSubmit,
  };
};
