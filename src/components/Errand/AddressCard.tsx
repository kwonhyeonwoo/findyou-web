import Image from 'next/image';

interface Props{
    address:string;
}
export default function AddressCard({address}:Props) {
  return (
    <div className="bg-[#F5F3F3] cursor-pointer w-full rounded-[12px] border border-[#C7C4D7] flex gap-3 items-center p-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Image
                src="/common/address-color.svg"
                alt='address-color'
                width={16}
                height={20}
            />
        </div>
        <div>
            <p className="text-[#777586] text-[12px] font-medium">희망장소</p>
            <p className="text-[#1B1C1C] text-[14px] font-medium">{address}</p>
        </div>
    </div>
  )
}
