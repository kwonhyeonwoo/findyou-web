import { useApplicationStatusMutation } from "./quires/errand-application/useApplicationStatusMutation";
import { useGetMyErrandsQuery } from "./quires/errand/useGetMyErrandsQuery";
import { useState } from "react";

export const useRequestTemplate = () => {
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data } = useGetMyErrandsQuery();

  const handleRouter = (idx: number | null) => {
    setCurrentIdx(idx)
    setIsOpen((prev) => !prev)
  }
  const handleApplicationStatus = (id: string, status: "ACCEPTED" | "REJECTED") => {
    mutate({ id, status })
    console.log('id', id, 'status', status)
  }

  return {
    data,
    isOpen,
    currentIdx,
    handleApplicationStatus,
    handleRouter,
  };
};
