'use client';

import MyPageProfile from '@/components/MyPage/MyPageProfile';
import StatsBoard from '@/components/MyPage/StatsBoard';
import MenuListCard from '@/components/MyPage/MenuListCard';

function MyPageTemplate() {
  const MENU_SECTIONS: {
    title: string;
    items: { label: string; path?: string; action?: string }[];
  }[] = [
    {
      title: '서비스 이용',
      items: [
        { label: '이용 내역', path: '/history' },
        { label: '찜한 헬퍼', path: '/liked-helpers' },
      ],
    },
    {
      title: '알림 및 지원',
      items: [
        { label: '공지사항', path: '/notice' },
        { label: '자주 묻는 질문', path: '/faq' },
        { label: '고객센터', path: '/support' },
      ],
    },
    {
      title: '설정',
      items: [
        { label: '로그아웃', action: 'logout' },
        { label: '회원 탈퇴', action: 'withdraw' },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-5 pb-20">
      <div className="flex flex-col gap-5 px-5">
        <MyPageProfile nickName="사악한혀누" handleProfileEdit={() => {}} />
        <StatsBoard progressErrandCount={3} writeReviewCount={3} />
      </div>

      <div className="h-2 w-full bg-[#F7F8FA]" />

      {MENU_SECTIONS.map(({ title, items }, idx) => (
        <div key={title}>
          <div className="flex flex-col gap-2 px-5">
            <p className="text-[13px] text-[#8B95A1]">{title}</p>
            {items.map((item, itemIdx) => (
              <MenuListCard
                text={item.label}
                path={item.path}
                isLast={itemIdx === items.length - 1}
                key={item.label}
              />
            ))}
          </div>

          {idx !== MENU_SECTIONS.length - 1 && (
            <div className="mt-5 h-2 w-full bg-[#F7F8FA]" />
          )}
        </div>
      ))}
    </div>
  );
}

export default MyPageTemplate;
