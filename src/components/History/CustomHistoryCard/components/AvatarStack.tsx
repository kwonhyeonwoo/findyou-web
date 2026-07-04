interface Props {
  appliedCount: number;
}

function AvatarStack({ appliedCount }: Props) {
  return (
    <div className="flex items-center">
      <div className="mr-1 flex -space-x-2">
        {Array.from({ length: Math.min(appliedCount, 3) }).map((_, i) => (
          <div
            key={i}
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-[10px] text-gray-500"
          >
            👤
          </div>
        ))}
      </div>
      <p className="text-[12px] text-[#464554]">{appliedCount}명</p>
    </div>
  );
}

export default AvatarStack;
