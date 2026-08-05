export const HISTORY_TAB: {
  type: 'request' | 'apply';
  text: string;
  link: string;
}[] = [
  {
    type: 'request',
    text: '의뢰내역',
    link: '/history/request',
  },
  {
    type: 'apply',
    text: '지원내역',
    link: '/history/apply',
  },
];
