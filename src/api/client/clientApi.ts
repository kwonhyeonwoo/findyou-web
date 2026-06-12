// src/apis/client.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * 💡 백엔드에 쿠키(refreshToken)를 들고 가서 자동으로 쿠키를 갱신받는 함수
 * 일반 baseRequest를 거치지 않고 독자적인 fetch를 써서 무한 루프를 원천 차단합니다.
 */
const refreshAccessToken = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include", // 👈 쿠키(refreshToken)를 전송하기 위해 필수!
        });

        // 백엔드가 새 쿠키(accessToken)를 성공적으로 구워줬다면 200~299(ok)가 떨어집니다.
        return response.ok;
    } catch (error) {
        console.error("토큰 재발급 중 서버 에러:", error);
        return false;
    }
};

/**
 * 💡 모든 API 요청이 거쳐가는 핵심 커널
 */
const baseRequest = async (url: string, options: RequestInit): Promise<Response> => {
    let response = await fetch(`${BASE_URL}${url}`, options);

    // 🚨 백엔드 Guard에 의해 Access Token 만료(401)가 감지되었을 때
    if (response.status === 401) {
        console.log("Access Token 만료 감지! 심폐소생술 시도...");

        // 1. 딱 한 번만 토큰 재발급(쿠키 갱신)을 시도합니다.
        const isRefreshed = await refreshAccessToken();

        if (isRefreshed) {
            console.log("토큰 재발급 성공! 기존 요청을 재시도합니다.");
            // 2. 백엔드가 쿠키를 새로 구워줬으니, '동일한 옵션'으로 재요청하면 
            //    브라우저가 알아서 새 쿠키를 들고 갑니다.
            response = await fetch(`${BASE_URL}${url}`, options);
        } else {
            console.log("Refresh Token까지 만료됨. 로그아웃 처리 진행.");

            // 3. 리프레시마저 만료된 진짜 세션 종료 상황
            if (typeof window !== "undefined") {
                alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
                window.location.href = "/login";
            }
            throw new Error("세션 만료");
        }
    }

    // 401 외의 다른 에러(500, 404 등) 처리
    if (!response.ok) throw new Error(`HTTP 에러! 상태코드: ${response}`);
    return response;
};

// 💡 외부 컴포넌트나 기능에서 사용할 API 클라이언트 객체
export const client = {
    get: async <T>(url: string, options?: RequestInit): Promise<T> => {
        const res = await baseRequest(url, {
            method: "GET",
            credentials: "include", // 👈 모든 요청에 자동으로 쿠키가 실려가도록 고정
            headers: { "Content-Type": "application/json", ...options?.headers },
            ...options,
        });
        return res.json();
    },

    post: async <T>(url: string, body?: unknown, options?: RequestInit): Promise<T> => {
        const res = await baseRequest(url, {
            method: "POST",
            credentials: "include", // 👈 모든 요청에 자동으로 쿠키가 실려가도록 고정
            headers: { "Content-Type": "application/json", ...options?.headers },
            body: body ? JSON.stringify(body) : undefined,
            ...options,
        });
        return res.json();
    },

    patch: async <T>(url: string, body?: unknown, options?: RequestInit): Promise<T> => {
        const res = await baseRequest(url, {
            method: "PATCH",
            credentials: "include",
            headers: { "Content-Type": "application/json", ...options?.headers },
            body: body ? JSON.stringify(body) : undefined,
            ...options,
        });
        return res.json();
    },

    delete: async <T>(url: string, options?: RequestInit): Promise<T> => {
        const res = await baseRequest(url, {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json", ...options?.headers },
            ...options,
        });
        return res.json();
    },
};