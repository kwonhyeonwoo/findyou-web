export const USER_KEYS = {
    all: ['user' as const],
    lists: (id: string) => [...USER_KEYS.all, id] as const,
    detail: (id: string) => [...USER_KEYS.all, 'detail', id]
}