import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2A14B4', // 메인 블루 컬러 (text-primary 로 사용 가능)
                    hover: '#2563EB',   // (text-primary-hover 로 사용)
                },
                background: '#F3F4F6',
            },
            spacing: {
                'page': '24px', // (p-page 로 사용 가능)
            }
        },
    },
};
export default config;