export const HISTORY_TAB: {
  type: 'post' | 'application-history';
  text: string;
  link: string;
}[] = [
    {
      type: 'post',
      text: '내 게시글',
      link: '/history/post?type=helper',
    },
    {
      type: 'application-history',
      text: '지원내역',
      link: '/history/application-history?type=helper',
    },
  ];
