'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingActionBtn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleFloatingBtnClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className="fixed z-60"
      style={{
        right: 'calc(max((100vw - 480px)/2, 0px) + 1rem)',
        bottom: '6.25rem',
      }}
    >
      <div className="relative w-14">
        {isOpen && (
          <div className="absolute border  border-priamry-border rounded-2xl rounded-2x bottom-full right-0 mb-3 flex flex-col items-end w-max">
            <Link
              href={'/errand/write'}
              className="flex items-center gap-2  rounded-2xl bg-popover px-4 py-2 w-39 text-sm text-popover-foreground "
              onClick={handleFloatingBtnClick}
            >
              <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-teal-light">
                <Image
                  src="/floating/helper.svg"
                  alt="plus"
                  width={14}
                  height={14}
                />
              </div>
              <span>심부름 등록</span>
            </Link>

            <Link
              href={'/account'}
              className="flex items-center rounded-2xl gap-2 w-39  bg-popover px-4 py-2 text-sm text-popover-foreground "
              onClick={handleFloatingBtnClick}
            >
              <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-teal-light">
                <Image
                  src="/floating/errand.svg"
                  alt="plus"
                  width={14}
                  height={14}
                />
              </div>
              <span>헬퍼 등록</span>
            </Link>
          </div>
        )}

        <button
          type="button"
          aria-label="actions"
          onClick={handleFloatingBtnClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-primary shadow-lg"
        >
          <Image src="/icon/plus.svg" alt="plus" width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
