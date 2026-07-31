'use client';
import { useWriteForm } from './hooks/useWriteForm';
import ErrandWriteInput from '@/components/WriteErrand/ErrandWriteInput/ErrandWriteInput';
import AddressInput from '@/components/WriteErrand/AddressInput/AddressInput';
import ErrandTextarea from '@/components/WriteErrand/ErrandTextarea/ErrandTextarea';
import ImageUpload from '@/components/WriteErrand/ImageUpload/ImageUpload';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import { useSearchAddress } from '@/hooks/useSearchAddress';
import SearchAddress from '@/components/common/SearchAddress/SearchAddress';
import CategoryTabs from '@/components/common/CategoryTabs/CategoryTabs';
import { ErrandTimeSelect } from '@/components/WriteErrand/ErrandTimeSelect/ErrandTimeSelect';
import { usePriceInput } from '@/hooks/common/usePriceInput';

export default function WriteErrandTemplate() {
  const {
    control,
    isOpen,
    isValid,
    isPending,
    handleIsOpen,
    setIsOpen,
    register,
    handleSubmit,
    useWatch,
    setValue,
    handleWriteSubmit,
  } = useWriteForm();
  const { handlePriceChange } = usePriceInput({ setValue });
  const { handleComplete, handleLocation } = useSearchAddress({
    setValue,
    setIsOpen,
  });
  return (
    <form
      className="mt-6 flex flex-col gap-4 pb-20"
      onSubmit={handleSubmit(handleWriteSubmit)}
    >
      {/* 카테고리 선택 */}
      <CategoryTabs
        currCategory={useWatch({ control, name: 'category' })}
        setValue={setValue}
      />
      {/* 제목 */}
      <ErrandWriteInput
        label="제목"
        placeholder="제목을 입력해주세요."
        minLength={4}
        maxLength={20}
        name="title"
        register={register}
      />

      {/* 주소 */}
      <AddressInput
        value={useWatch({ control, name: 'address' })}
        handleIsOpen={handleIsOpen}
      />
      <ErrandTimeSelect
        value={useWatch({ control, name: 'deadlineTime' })}
        setValue={setValue}
      />
      {/* 가격 */}
      <ErrandWriteInput
        label="가격"
        placeholder="가격을 입력해주세요."
        name="price"
        value={useWatch({ control, name: 'price' })}
        onChange={handlePriceChange}
      />
      <ErrandTextarea
        register={register}
        name={'description'}
        textLength={useWatch({ control, name: 'description' })?.length || 0}
      />
      <ImageUpload setValue={setValue} />
      <ErrandWriteInput
        label="카카오톡 오픈채팅 링크 (선택)"
        placeholder="카카오톡 오픈채팅 링크"
        name="openLink"
        register={register}
      />
      <div className="pt-6 pb-10">
        <SubmitButton
          text="심부름 등록하기"
          isPending={isPending}
          isDisabled={!isValid}
        />
      </div>
      <SearchAddress
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLocation={handleLocation}
        handleComplete={handleComplete}
      />
    </form>
  );
}
