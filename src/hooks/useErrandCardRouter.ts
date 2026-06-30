import { useRouter } from "next/navigation";
import { useGetMyErrandsQuery } from "./quires/errand/useGetMyErrandsQuery";

export const useErrandCardRouter = () => {
  const router = useRouter();
  const { data } = useGetMyErrandsQuery();

  const handleRouter = (id: string) => router.push(`/errand/${id}`);
  return {
    data,
    handleRouter,
  };
};
