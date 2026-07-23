'use client';
import CategoryTabs from '@/components/common/CategoryTabs/CategoryTabs';
import { useWriteHelper } from './hooks/useWriteHelper';
import MovementMethod from '@/components/WriteHelper/MovmentMethod/MovementMethod';
export default function WriteHelperTemplate() {
  const {
    currCategory,
    handleHelperSubmit,
    handleCurrMovement,
    currMovement,
    setValue,
  } = useWriteHelper();
  return (
    <form className="flex flex-col gap-6 pt-6">
      <CategoryTabs currCategory={currCategory} setValue={setValue} />
      <MovementMethod
        currMovement={currMovement}
        handleCurrMovement={handleCurrMovement}
      />
    </form>
  );
}
