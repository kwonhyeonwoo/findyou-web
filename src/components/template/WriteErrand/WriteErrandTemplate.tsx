"use client";

import ErrandWriteCategory from "@/components/writeErrand/ErrandWriteCategory/ErrandWriteCategory";
import { WRITE_CATEGORY } from "@/constants/write-constants";
import { useWriteForm } from "./hooks/useWriteForm";
import ErrandWriteInput from "@/components/writeErrand/ErrandWriteInput/ErrandWriteInput";
import AddressInput from "@/components/writeErrand/AddressInput/AddressInput";
import ErrandTextarea from "@/components/writeErrand/ErrandTextarea/ErrandTextarea";
import ImageUpload from "@/components/writeErrand/ImageUpload/ImageUpload";
import OpenTalk from "@/components/writeErrand/OpenTalk/OpenTalk";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { formattedPrice } from "@/lib/lib";
import { useEffect } from "react";

export default function WriteErrandTemplate() {
  const {
    register,
    handleSubmit,
    useWatch,
    handleCurrCategory,
    handleWriteSubmit,
    handlePriceChange,
    control,
  } = useWriteForm();
  const currCategory = useWatch({ control, name: "category" });
  const textLength = useWatch({ control, name: "description" });
  const price = useWatch({ control, name: "price" });
  return (
    <form
      className="mt-6 flex flex-col gap-4"
      onSubmit={handleSubmit(handleWriteSubmit)}
    >
      {/* 카테고리 선택 */}
      <div className="flex flex-col gap-2">
        <p className="text-[12px] text-[#464554]">카테고리 선택</p>
        <div className="flex flex-wrap gap-2">
          {WRITE_CATEGORY.map((item) => (
            <ErrandWriteCategory
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
      <AddressInput register={register} />
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
      <ImageUpload />
      <OpenTalk />
      <div className="pt-6 pb-10">
        <SubmitButton
          text="심부름 등록하기"
          isPending={false}
          isDisabled={false}
        />
      </div>
    </form>
  );
}
