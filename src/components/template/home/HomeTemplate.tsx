import Advertisement from '@/components/home/Advertisement/Advertisement';
import HomeSearch from '@/components/home/HomeSearch/HomeSearch';

export default function HomeTemplate() {
  return (
    <div className="box-border px-5 py-5">
        <HomeSearch />
        <Advertisement/>
    </div>
  )
}
