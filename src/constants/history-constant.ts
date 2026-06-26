export const HISTORY_TAB: {
  type: "request" | "backup";
  text: string;
  link: string;
}[] = [
  {
    type: "request",
    text: "의뢰내역",
    link: "/history/request",
  },
  {
    type: "backup",
    text: "지원내역",
    link: "/history/backup",
  },
];
