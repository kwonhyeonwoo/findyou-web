import Image from 'next/image';

interface Props {
  value: string;
  handleIsOpen: () => void;
}

export default function AddressInput({ value, handleIsOpen }: Props) {
  return (
    <div className="flex justify-between gap-2 rounded-[8px] border px-4 py-3">
      <p className="font-bold">거래 희망장소</p>
      <button
        className="flex items-center justify-end gap-1"
        onClick={handleIsOpen}
      >
        <p className="text-[14px] text-[#464554]">
          {value ? value : '위치추가'}
        </p>
        <Image
          src={'/common/gray-right-arrow.svg'}
          alt="right-arrow"
          width={8}
          height={8}
        />
      </button>
    </div>
  );
}
