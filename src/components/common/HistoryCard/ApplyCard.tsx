import { ErrandStatus } from "@/interfaces/errand.interface";
import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import { ErrandCategory } from "@/schema/errand.schema";
import React from "react";

interface Props {
  category: ErrandCategory;
  createdAt: Date;
  images: string[];
  description: string;
  address_dong: string;
  title: string;
  price: string;
  status: ErrandStatus;
  applicatoinStatus: ErrandApplicationStatus;
}

function ApplyCard() {
  return <div></div>;
}

export default ApplyCard;
