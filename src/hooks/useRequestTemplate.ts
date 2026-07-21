import { ErrandResponse, ErrandStatus } from "@/interfaces/errand.interface";
import { useApplicationStatusMutation } from "./quires/errand-application/useApplicationStatusMutation";
import { useGetMyErrandsQuery } from "./quires/errand/useGetMyErrandsQuery";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useRequestTemplate = () => {
  const router = useRouter();
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useGetMyErrandsQuery();

  const handleActive = ({
    idx,
    id,
    status }:
    {
      idx: number | null,
      id?: string,
      status: ErrandStatus
    }) => {
    if (status === ErrandStatus.MATCHING) {
      setCurrentIdx(idx);
      setIsOpen((prev) => !prev);
    } else if (status === ErrandStatus.IN_PROGRESS) {
      router.push(`/errand/status/${id}`)
    } else if (status === ErrandStatus.COMPLETED) {

    }

  };
  const handleApplicationStatus = (
    id: string,
    status: "ACCEPTED" | "REJECTED",
  ) => {
    mutate({ id, status });
  };

  return {
    data,
    isOpen,
    currentIdx,
    handleApplicationStatus,
    handleActive,
  };
};
