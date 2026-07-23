import { ERRAND_CATEGORIES } from '@/interfaces/category.enum';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

export const useCategoryTabs = <T extends FieldValues>({
  setValue,
}: {
  setValue: UseFormSetValue<T>;
}) => {
  const handleCurrentCategory = (type: ERRAND_CATEGORIES) => {
    setValue('category' as Path<T>, type as PathValue<T, Path<T>>);
  };
  return {
    handleCurrentCategory,
  };
};
