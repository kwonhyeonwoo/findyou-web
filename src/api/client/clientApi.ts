// src/apis/client.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const refreshAccessToken = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
        });
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
    // 1. 안전하게Headers 객체로 변환
    const headers = new Headers(options.headers);

    // ✨ [핵심 치트키] body가 FormData인지 체크해서 처리합니다.
    if (options.body instanceof FormData) {
        // FormData일 때는 브라우저가 boundary를 자동으로 채우도록 Content-Type을 지워야 합니다!
        headers.delete('Content-Type');
    } else {
        // 일반 JSON 요청일 때만 기본으로 설정
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json');
        }
    }

    const updatedOptions = {
        ...options,
        headers,
    };

    let response = await fetch(`${BASE_URL}${url}`, updatedOptions);

    // Access Token 만료(401) 감지 시 재발급 로직
    if (response.status === 401) {
        console.log("Access Token 만료 감지! 심폐소생술 시도...");
        const isRefreshed = await refreshAccessToken();

        if (isRefreshed) {
            console.log("토큰 재발급 성공! 기존 요청을 재시도합니다.");
            response = await fetch(`${BASE_URL}${url}`, updatedOptions);
        } else {
            console.log("Refresh Token까지 만료됨. 로그아웃 처리 진행.");
            if (typeof window !== "undefined") {
                alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
                window.location.href = "/login";
            }
            throw new Error("세션 만료");
        }
    }

    if (!response.ok) throw new Error(`HTTP 에러! 상태코드: ${response.status}`);
    return response;
};

// 💡 외부 컴포넌트나 기능에서 사용할 API 클라이언트 객체
export const client = {
    get: async <T>(url: string, options?: RequestInit): Promise<T> => {
        const res = await baseRequest(url, {
            method: "GET",
            credentials: "include",
            ...options,
        });
        return res.json();
    },

    post: async <T>(url: string, body?: unknown, options?: RequestInit): Promise<T> => {
        // ✨ body가 FormData인지 체크
        const isFormData = body instanceof FormData;

        const res = await baseRequest(url, {
            method: "POST",
            credentials: "include",
            headers: isFormData 
                ? { ...options?.headers } // FormData일 땐 Content-Type 세팅을 비워둠
                : { "Content-Type": "application/json", ...options?.headers },
            // FormData일 때는 stringify를 안 거치고 원본 그대로 밀어넣습니다!
            body: isFormData ? (body as FormData) : body ? JSON.stringify(body) : undefined,
            ...options,
        });
        return res.json();
    },

    patch: async <T>(url: string, body?: unknown, options?: RequestInit): Promise<T> => {
        const isFormData = body instanceof FormData;

        const res = await baseRequest(url, {
            method: "PATCH",
            credentials: "include",
            headers: isFormData 
                ? { ...options?.headers } 
                : { "Content-Type": "application/json", ...options?.headers },
            body: isFormData ? (body as FormData) : body ? JSON.stringify(body) : undefined,
            ...options,
        });
        return res.json();
    },

    delete: async <T>(url: string, options?: RequestInit): Promise<T> => {
        const res = await baseRequest(url, {
            method: "DELETE",
            credentials: "include",
            ...options,
        });
        return res.json();
    },
};