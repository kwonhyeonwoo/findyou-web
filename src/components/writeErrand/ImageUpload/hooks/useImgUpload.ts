import { ErrandRegisterType } from "@/schema/errand.schema";
import { useState } from "react"
import {  UseFormSetValue } from "react-hook-form";

export const useImgUpload = ({setValue}:{
    setValue:UseFormSetValue<ErrandRegisterType>
}) => {
    const [imgFiles, setImgFiles] = useState<File[]>([]);
    const [previewImage, setPreviewImage] = useState<string[]>([]);

    const handleImaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        // 파일을 배열로 변환
        const fileArray = Array.from(files);
        const newPreviewUrls = fileArray.map((file) => URL.createObjectURL(file));

        const updatedFiles = [...imgFiles, ...fileArray];
        setImgFiles(updatedFiles);
        setPreviewImage((prev) => [...prev, ...newPreviewUrls]);
        setValue('images', updatedFiles);
    }
    const handleRemove = (index: number)=>{
        URL.revokeObjectURL(previewImage[index]);

        setPreviewImage((prev) => prev.filter((_, i) => i !== index));
        setImgFiles((prev) => prev.filter((_, i) => i !== index));
    }
    return {
        imgFiles,
        previewImage,
        handleRemove,
        handleImaChange,
    }
}