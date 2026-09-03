export const HISTORY_TAB: {
  type: 'post' | 'application-detail';
  text: string;
  link: string;
}[] = [
    {
      type: 'post',
      text: '내 게시글',
      link: '/history/post?type=helper',
    },
    {
      type: 'application-detail',
      text: '지원내역',
      link: '/history/application-detail?type=helper',
    },
  ];
