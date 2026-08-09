import { useHelperCreateMutation } from '@/hooks/mutations/helper/useHelperCreateMutation';
import { MOVEMENT_ENUM } from '@/interfaces/helper-postinterface';
import { parsePrice } from '@/lib/lib';
import {
  helperRegisterSchema,
  HelperRegisterType,
} from '@/schema/helper-post.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export const useWriteHelper = () => {
  const {
    watch,
    control,
    formState: { isValid },
    setValue,
    register,
    handleSubmit,
  } = useForm<HelperRegisterType>({
    resolver: zodResolver(helperRegisterSchema),
  });
  const { mutate } = useHelperCreateMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCurrMovement = (type: MOVEMENT_ENUM) => {
    setValue('movement', type);
  };
  const handleAddressOpen = () => setIsOpen(true);
  const handleHelperSubmit = (data: HelperRegisterType) => {
    console.log('submit data', data);
    mutate({
      ...data,
      price: String(parsePrice(data.price)),
    });
  };
  return {
    isOpen,
    isValid,
    control,
    price: watch('price'),
    useWatch,
    handleSubmit,
    setIsOpen,
    handleAddressOpen,
    register,
    handleCurrMovement,
    setValue,
    handleHelperSubmit,
  };
};
