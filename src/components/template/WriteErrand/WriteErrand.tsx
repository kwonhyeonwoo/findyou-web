'use client'

import ErrandWriteCategory from "@/components/writeErrand/ErrandWriteCategory/ErrandWriteCategory";
import { WRITE_CATEGORY } from "@/constants/write-constants";
import { useWriteForm } from "./hooks/useWriteForm";
import ErrandWriteInput from "@/components/writeErrand/ErrandWriteInput/ErrandWriteInput";
import AddressInput from "@/components/writeErrand/AddressInput/AddressInput";

export default function WriteErrand() {
    const {
        register,
        handleSubmit,
        useWatch,
        handleCurrCategory,
        handleWriteSubmit,
        control
    } = useWriteForm();
    const currCategory = useWatch({control, name:"category"})

  return (
    <form className="flex flex-col mt-6 gap-6">
        {/* 카테고리 선택 */}
        <div className="flex flex-col gap-2">
            <p className="text-[12px] text-[#464554]">카테고리 선택</p>
            <div className="flex flex-wrap  gap-2">
                {WRITE_CATEGORY.map((item)=>(
                    <ErrandWriteCategory 
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
        <AddressInput register={register}/>
    </form>
  )
}
