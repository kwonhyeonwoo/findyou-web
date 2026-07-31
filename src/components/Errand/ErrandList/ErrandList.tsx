import { ErrandStatus } from '@/interfaces/errand.interface';
import ErrandListHeader from './components/ErrandListHeader';
import ErrandListBody from './components/ErrandListBody';
import ErrandListBottom from './components/ErrandListBottom';
import { ErrandCategory } from '@/schema/errand.schema';

interface Props {
  status: ErrandStatus;
  id: string;
  title: string;
  price: string;
  description: string;
  images?: string[];
  address_dong: string;
  applicationsCount: number;
  category: ErrandCategory;
  createdAt: Date;
  onRouter: (id: string) => void;
}

function ErrandList({
  status,
  id,
  title,
  description,
  price,
  images,
  address_dong,
  category,
  createdAt,
  applicationsCount,
  onRouter,
}: Props) {
  return (
    <div
      onClick={() => onRouter(id)}
      className="gpa-2 flex cursor-pointer flex-col justify-center border-b border-b-[#C7C4D7]"
    >
      <ErrandListHeader
        category={category}
        status={status}
        createdAt={createdAt}
      />
      <ErrandListBody
        title={title}
        description={description}
        image={images?.[0]}
      />
      <ErrandListBottom
        applicationsCount={applicationsCount}
        price={price}
        address_dong={address_dong}
      />
    </div>
  );
}

export default ErrandList;
