// src/apis/client.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * 💡 백엔드에 쿠키(refreshToken)를 들고 가서 자동으로 쿠키를 갱신받는 함수
 */
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
    const headers = new Headers(options.headers);

    // [체크] Body가 FormData라면 Content-Type을 알아서 브라우저가 정하도록 삭제
    if (options.body instanceof FormData) {
        headers.delete('Content-Type');
    } else {
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json');
        }
    }

    const updatedOptions = {
        ...options,
        headers,
    };

    let response = await fetch(`${BASE_URL}${url}`, updatedOptions);

    // 1. 🚨 [순서 교정] 401 만료 체크를 최우선으로 진행 (!response.ok 보다 먼저!)
    if (response.status === 401) {
        console.log("Access Token 만료 감지! 심폐소생술 시도...");
        const isRefreshed = await refreshAccessToken();

        if (isRefreshed) {
            console.log("토큰 재발급 성공! 기존 요청을 재시도합니다.");
            return await fetch(`${BASE_URL}${url}`, updatedOptions);
        } else {
            console.log("Refresh Token까지 만료됨. 로그아웃 처리 진행.");
            if (typeof window !== "undefined") {
                alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
                window.location.href = "/login";
            }
            throw new Error("세션 만료");
        }
    }

    // 2. 401이 아닌 다른 에러(400, 403, 500 등) 처리
    if (!response.ok) {
        try {
            // response 스트림 파괴를 막기 위해 복사본(clone) 사용
            const errorClone = response.clone();
            const errorData = await errorClone.json();
            
            console.log("ㅠㅠ 백엔드가 거절한 진짜 이유 리스트:");
            if (errorData.message) {
                console.table(errorData.message);
            } else {
                console.error("❌ 백엔드 검증 실패 사유:", errorData);
            }
        } catch (e) {
            console.error("에러 바디 파싱 실패 또는 바디가 비어있음");
        }
        throw new Error(`HTTP 에러! 상태코드: ${response.status}`);
    }

    return response;
};

// 💡 외부에서 사용할 API 클라이언트 객체
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
        // FormData 여부에 따라 body와 headers를 다이나믹하게 세팅
        const isFormData = body instanceof FormData;
        
        const res = await baseRequest(url, {
            method: "POST",
            credentials: "include",
            headers: isFormData 
                ? { ...options?.headers } // FormData일 땐 Content-Type 세팅 안 함
                : { "Content-Type": "application/json", ...options?.headers },
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