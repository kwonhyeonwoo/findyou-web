import { useState } from "react"

export const useImgUpload = () => {
    const [imgFiles, setImgFiles] = useState<File[]>([]);
    const [previewImage, setPreviewImage] = useState<string[]>([]);

    const handleImaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        // 파일을 배열로 변환
        const fileArray = Array.from(files);
        const newPreviewUrls = fileArray.map((file) => URL.createObjectURL(file));

        setImgFiles((prev) => [...prev, ...fileArray]);
        setPreviewImage((prev) => [...prev, ...newPreviewUrls]);

    }
    return {
        imgFiles,
        previewImage,
        handleImaChange,
    }
}