import Image from 'next/image';

function HelperProgressTop() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="bg-teal-primary flex h-20 w-20 items-center justify-center rounded-full">
        <Image
          src={'/icon/check-icon.svg'}
          width={50}
          height={50}
          className="h-[35px] w-[35px]"
          alt="check"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[18px] font-bold">매칭이 완료 됐어요 !</p>
        <p className="text-[14px] font-semibold text-[#8B95A1]">
          이제 카카오톡으로 소통하며 진행해요.
        </p>
      </div>
    </div>
  );
}

export default HelperProgressTop;
