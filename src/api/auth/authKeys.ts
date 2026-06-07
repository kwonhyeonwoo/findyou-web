export const AUTH_KEYS = {
    all: ['client'] as const,
    me: ['me'] as const,
    lists: (id: string) => [...AUTH_KEYS.all, id] as const,
    detail: (id: string) => [...AUTH_KEYS.all, "detail", id] as const,
}