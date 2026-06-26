// src/apis/client.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

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
const baseRequest = async (
  url: string,
  options: RequestInit,
): Promise<Response> => {
  const headers = new Headers(options.headers);

  if (options.body instanceof FormData) {
    headers.delete("Content-Type");
  } else {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
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
      throw new ApiError("세션 만료", 401);
    }
  }

  // ✨ 2. 에러가 났을 때 서버의 메시지를 추출하는 핵심 로직
  if (!response.ok) {
    let errorMessage = `HTTP 에러! 상태코드: ${response.status}`;
    let errorData = null;

    try {
      // 서버에서 보낸 JSON 형태의 에러 내용을 파싱합니다.
      errorData = await response.json();
      console.log("errorData", errorData);
      // NestJS의 기본 예외 구조({ statusCode, message, error })를 고려한 처리
      if (errorData && errorData.message) {
        // class-validator 에러 등 message가 배열로 올 경우 첫 번째 메시지를 사용
        errorMessage = Array.isArray(errorData.message)
          ? errorData.message[0]
          : errorData.message;
      }
    } catch (parseError) {
      // 서버가 JSON이 아닌 HTML(예: 502 Bad Gateway)을 보냈을 때를 대비한 방어 코드
      console.warn("에러 응답 JSON 파싱 실패 (서버가 텍스트/HTML을 반환함)");
    }

    // 파싱한 진짜 메시지와 상태 코드를 담아서 ApiError를 던집니다!
    throw new ApiError(errorMessage, response.status, errorData);
  }

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

  post: async <T>(
    url: string,
    body?: unknown,
    options?: RequestInit,
  ): Promise<T> => {
    // ✨ body가 FormData인지 체크
    const isFormData = body instanceof FormData;

    const res = await baseRequest(url, {
      method: "POST",
      credentials: "include",
      headers: isFormData
        ? { ...options?.headers } // FormData일 땐 Content-Type 세팅을 비워둠
        : { "Content-Type": "application/json", ...options?.headers },
      // FormData일 때는 stringify를 안 거치고 원본 그대로 밀어넣습니다!
      body: isFormData
        ? (body as FormData)
        : body
          ? JSON.stringify(body)
          : undefined,
      ...options,
    });
    return res.json();
  },

  patch: async <T>(
    url: string,
    body?: unknown,
    options?: RequestInit,
  ): Promise<T> => {
    const isFormData = body instanceof FormData;

    const res = await baseRequest(url, {
      method: "PATCH",
      credentials: "include",
      headers: isFormData
        ? { ...options?.headers }
        : { "Content-Type": "application/json", ...options?.headers },
      body: isFormData
        ? (body as FormData)
        : body
          ? JSON.stringify(body)
          : undefined,
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
