import { useWriteErrandMutation } from '@/hooks/quires/errand/useWriteErrandMutation';
import { parsePrice } from '@/lib/lib';
import {
  ErrandCategory,
  errandRegisterSchema,
  ErrandRegisterType,
} from '@/schema/errand.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export const useWriteForm = () => {
  const {
    control,
    formState: { errors, isValid },
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm<ErrandRegisterType>({
    resolver: zodResolver(errandRegisterSchema),
  });
  const { mutate, isPending } = useWriteErrandMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleWriteSubmit = (data: ErrandRegisterType) => {
    console.log('data', typeof data.deadlineTime);
    mutate(data);
  };
  const handleCurrCategory = (type: ErrandCategory) => {
    setValue('category', type);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setValue('price', rawValue);
  };
  const handleIsOpen = () => setIsOpen(true);
  return {
    control,
    isOpen,
    isValid,
    isPending,
    setIsOpen,
    handleIsOpen,
    handlePriceChange,
    useWatch,
    register,
    handleSubmit,
    handleCurrCategory,
    handleWriteSubmit,
    setValue,
    watch,
  };
};
