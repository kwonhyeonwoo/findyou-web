import { MOVEMENT_ENUM } from '@/interfaces/helper.interface';
import {
  helperRegisterSchema,
  HelperRegisterType,
} from '@/schema/helper.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export const useWriteHelper = () => {
  const { register, handleSubmit, control, setValue, watch } =
    useForm<HelperRegisterType>({
      resolver: zodResolver(helperRegisterSchema),
    });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCurrMovement = (type: MOVEMENT_ENUM) => {
    setValue('movement', type);
  };
  const handleAddressOpen = () => setIsOpen(true);
  const handleHelperSubmit = (data: HelperRegisterType) => {};
  return {
    currCategory: watch('category'),
    currMovement: watch('movement'),
    address: useWatch({ control, name: 'address' }),
    isOpen,
    setIsOpen,
    handleAddressOpen,
    register,
    handleCurrMovement,
    setValue,
    handleHelperSubmit,
  };
};
