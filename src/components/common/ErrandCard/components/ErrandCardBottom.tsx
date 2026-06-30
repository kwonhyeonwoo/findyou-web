interface Props {
  applications: string[];
  price: string;
}

function ErrandCardBottom({ applications, price }: Props) {
  return (
    <div className="flex items-center justify-between border-t border-t-[#EEEEE] pt-3">
      <p className="text-[18px] font-semibold text-[#170083]">{price}</p>
      {applications?.length > 0 && (
        <div className="flex items-center">
          <div className="mr-2 flex -space-x-2">
            {/* 최대 3개까지만 기본 회색 동그라미를 그립니다 */}
            {Array.from({ length: Math.min(applications.length, 3) }).map(
              (_, i) => (
                <div
                  key={i}
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-300 text-[10px] text-gray-500"
                >
                  👤
                </div>
              ),
            )}
          </div>
          <p className="text-[12px] text-[#464554]">{applications.length}명</p>
        </div>
      )}
    </div>
  );
}

export default ErrandCardBottom;
