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
    return {
        imgFiles,
        previewImage,
        handleImaChange,
    }
}