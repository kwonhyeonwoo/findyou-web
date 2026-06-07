"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-auto items-center justify-center">
      <ClipLoader color="#3b82f6" size={30} />
    </div>
  );
}
