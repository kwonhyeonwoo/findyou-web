"use client";
import { useWriteForm } from "./hooks/useWriteForm";
import ErrandWriteInput from "@/components/writeErrand/ErrandWriteInput/ErrandWriteInput";
import AddressInput from "@/components/writeErrand/AddressInput/AddressInput";
import ErrandTextarea from "@/components/writeErrand/ErrandTextarea/ErrandTextarea";
import ImageUpload from "@/components/writeErrand/ImageUpload/ImageUpload";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { formattedPrice } from "@/lib/lib";
import { useSearchAddress } from "@/hooks/useSearchAddress";
import SearchAddress from "@/components/common/SearchAddress/SearchAddress";
import { CATEGORY_TABS } from "@/constants/common.-constants";
import CategoryTabs from "@/components/common/CategoryTabs/CategoryTabs";

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
    handleCurrCategory,
    handleWriteSubmit,
    handlePriceChange,
  } = useWriteForm();
  const { handleComplete, handleLocation } = useSearchAddress({
    setValue,
    setIsOpen,
  });
  const currCategory = useWatch({ control, name: "category" });
  const textLength = useWatch({ control, name: "description" });
  const price = useWatch({ control, name: "price" });
  const address = useWatch({ control, name: "address" });
  return (
    <form
      className="mt-6 flex flex-col gap-4 pb-20"
      onSubmit={handleSubmit(handleWriteSubmit)}
    >
      {/* 카테고리 선택 */}
      <div className="flex flex-col gap-2">
        <p className="text-[12px] text-[#464554]">카테고리 선택</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORY_TABS.map((item) => (
            <CategoryTabs
              key={item.type}
              {...item}
              isActive={item.type === currCategory}
              onCurrCategory={handleCurrCategory}
            />
          ))}
        </div>
      </div>

      {/* 제목 */}
      <div>
        <ErrandWriteInput
          label="제목"
          placeholder="제목을 입력해주세요."
          minLength={4}
          maxLength={20}
          name="title"
          register={register}
        />
      </div>

      {/* 주소 */}
      <AddressInput
        value={address}
        register={register}
        handleIsOpen={handleIsOpen}
      />
      {/* 가격 */}
      <ErrandWriteInput
        label="가격"
        placeholder="가격을 입력해주세요."
        name="price"
        register={register}
        value={formattedPrice(price)}
        onChange={handlePriceChange}
      />
      <ErrandTextarea
        register={register}
        textLength={textLength?.length || 0}
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
