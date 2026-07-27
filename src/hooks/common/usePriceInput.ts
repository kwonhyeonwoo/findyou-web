import { formattedPrice } from '@/lib/lib';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

// price 필드(string)를 가진 폼만 허용
interface Props<T extends FieldValues & { price: string }> {
  setValue: UseFormSetValue<T>;
}

export const usePriceInput = <T extends FieldValues & { price: string }>({
  setValue,
}: Props<T>) => {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formattedPrice(e.target.value);
    setValue('price' as Path<T>, formatted as PathValue<T, Path<T>>, {
      shouldValidate: true,
    });
  };

  return { handlePriceChange }; // ← 이것도 빠져 있었어요
};
