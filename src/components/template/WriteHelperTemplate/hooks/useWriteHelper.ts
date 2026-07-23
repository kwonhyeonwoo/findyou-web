import { MOVEMENT_ENUM } from '@/interfaces/helper.interface';
import {
  helperRegisterSchema,
  HelperRegisterType,
} from '@/schema/helper.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useWriteHelper = () => {
  const { register, handleSubmit, setValue, watch } =
    useForm<HelperRegisterType>({
      resolver: zodResolver(helperRegisterSchema),
    });

  const handleCurrMovement = (type: MOVEMENT_ENUM) => {
    setValue('movement', type);
  };
  const handleHelperSubmit = (data: HelperRegisterType) => {};
  return {
    currCategory: watch('category'),
    currMovement: watch('movement'),
    handleCurrMovement,
    watch,
    setValue,
    handleHelperSubmit,
  };
};
