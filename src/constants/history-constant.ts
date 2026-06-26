export const HISTORY_TAB: {
  type: "request" | "application";
  text: string;
  link: string;
}[] = [
  {
    type: "request",
    text: "의뢰내역",
    link: "/history/request",
  },
  {
    type: "application",
    text: "지원내역",
    link: "/history/application",
  },
];
