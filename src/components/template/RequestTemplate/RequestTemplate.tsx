"use client";
import { useErrandListsQuery } from "@/hooks/quires/errand/useErrandListsQuery";

function RequestTemplate() {
  const { data } = useErrandListsQuery({});
  console.log("data", data);
  return <div></div>;
}

export default RequestTemplate;
