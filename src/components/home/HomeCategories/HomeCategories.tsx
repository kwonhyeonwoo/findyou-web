'use client'
import { HOME_CATEGORIES } from '@/constants/home-constants';
import { useHomeCategoryHook } from './hooks/useHomeCategoryHook';

export default function HomeCategories() {
    const {handleCategoryClick} = useHomeCategoryHook();
  return (
    <div className="grid grid-cols-4 gap-4">
        {HOME_CATEGORIES.map(({text,type,img,bgColor})=>(
            <button onClick={()=>handleCategoryClick(type)} key={type} className="flex flex-col gap-2 items-center justify-center">
                <div  className={`w-14 h-14 rounded-full ${bgColor} flex justify-center items-center`}>
                    <img
                        src={`/home/${img}.svg`}
                        alt={img}
                        className="object-none" 
                    />
                </div>
                <p className="text-[12px]">{text}</p>
            </button>
        ))}
    </div>
  )
}
