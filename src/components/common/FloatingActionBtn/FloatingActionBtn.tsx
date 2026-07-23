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
          <div className="border-priamry-border rounded-2x absolute right-0 bottom-full mb-3 flex w-max flex-col items-end rounded-2xl border">
            <Link
              href={'/errand/write'}
              className="bg-popover text-popover-foreground flex w-39 items-center gap-2 rounded-2xl px-4 py-2 text-sm"
              onClick={handleFloatingBtnClick}
            >
              <div className="bg-teal-light flex h-10 w-10 items-center justify-center rounded-full">
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
              href={'/helper/write'}
              className="bg-popover text-popover-foreground flex w-39 items-center gap-2 rounded-2xl px-4 py-2 text-sm"
              onClick={handleFloatingBtnClick}
            >
              <div className="bg-teal-light flex h-10 w-10 items-center justify-center rounded-full">
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
          className="bg-teal-primary flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        >
          <Image src="/icon/plus.svg" alt="plus" width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
