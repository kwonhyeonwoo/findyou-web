'use client';
import CategoryTabs from '@/components/common/CategoryTabs/CategoryTabs';
import { useWriteHelper } from './hooks/useWriteHelper';
import MovementMethod from '@/components/WriteHelper/MovmentMethod/MovementMethod';
import AddressInput from '@/components/WriteErrand/AddressInput/AddressInput';
import SearchAddress from '@/components/common/SearchAddress/SearchAddress';
import { useSearchAddress } from '@/hooks/useSearchAddress';
import ErrandTextarea from '@/components/WriteErrand/ErrandTextarea/ErrandTextarea';
import ErrandWriteInput from '@/components/WriteErrand/ErrandWriteInput/ErrandWriteInput';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import { usePriceInput } from '@/hooks/common/usePriceInput';

export default function WriteHelperTemplate() {
  const {
    isOpen,
    price,
    isValid,
    control,
    useWatch,
    setIsOpen,
    register,
    handleAddressOpen,
    handleSubmit,
    handleHelperSubmit,
    handleCurrMovement,
    setValue,
  } = useWriteHelper();
  const { handlePriceChange } = usePriceInput({ setValue });
  const { handleComplete, handleLocation } = useSearchAddress({
    setValue,
    setIsOpen,
  });
  return (
    <form
      className="flex flex-col gap-6 pt-6 pb-10"
      onSubmit={handleSubmit(handleHelperSubmit)}
    >
      <CategoryTabs
        currCategory={useWatch({ control, name: 'category' })}
        setValue={setValue}
      />
      <MovementMethod
        currMovement={useWatch({ control, name: 'movement' })}
        handleCurrMovement={handleCurrMovement}
      />
      <ErrandWriteInput
        label="제목"
        placeholder="제목을 입력해주세요"
        minLength={4}
        maxLength={20}
        name="title"
        register={register}
      />

      {/* 주소  */}
      <AddressInput
        value={useWatch({ control, name: 'address' })}
        handleIsOpen={handleAddressOpen}
      />

      <ErrandTextarea
        register={register}
        textLength={useWatch({ control, name: 'introduction' })?.length || 0}
        name="introduction"
      />
      <ErrandWriteInput
        label="카카오톡 오픈채팅 링크 (선택)"
        placeholder="카카오톡 오픈채팅 링크"
        name="openLink"
        register={register}
      />
      <ErrandWriteInput
        label="가격"
        placeholder="가격을 입력해주세요."
        name="price"
        value={price}
        onChange={handlePriceChange}
      />
      <div>
        <SubmitButton
          text="헬퍼 등록하기"
          isPending={false}
          isDisabled={!isValid}
          bgColor="bg-teal-primary"
          textColor="text-white"
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
