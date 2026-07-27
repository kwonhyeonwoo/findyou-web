import { MOVEMENT_ENUM } from '@/interfaces/helper.interface';
import {
  helperRegisterSchema,
  HelperRegisterType,
} from '@/schema/helper.schema';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCurrMovement = (type: MOVEMENT_ENUM) => {
    setValue('movement', type);
  };
  const handleAddressOpen = () => setIsOpen(true);
  const handleHelperSubmit = (data: HelperRegisterType) => {};
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
