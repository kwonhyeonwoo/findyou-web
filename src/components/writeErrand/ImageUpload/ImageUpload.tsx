import Image from "next/image";
import { useImgUpload } from "./hooks/useImgUpload";

export default function ImageUpload() {
  const { handleImaChange, imgFiles, previewImage } = useImgUpload();
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-[#464554]">사진등록</p>
        <p className="text-[12px] text-[#464554]">{imgFiles.length}/5</p>
      </div>
      <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto py-2 whitespace-nowrap">
        <input
          type="file"
          multiple
          accept="image/*"
          id="image"
          className="hidden"
          onChange={handleImaChange}
          //   {...register("images")}
        />
        <label
          htmlFor="image"
          className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-[8px] border border-dashed border-[#C7C4D7]"
        >
          <Image
            src="/common/upload-img.svg"
            alt="image-upload"
            width={18}
            height={18}
          />
        </label>
        <div className="flex items-center gap-2">
          {previewImage.map((url, index) => (
            <Image
              key={index}
              className="h-20 w-20 shrink-0 rounded-[8px] border border-[#C7C4D7] object-cover"
              src={url}
              alt="image-upload"
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
