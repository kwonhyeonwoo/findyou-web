export const HELPER_KEYS = {
    all: ['helper'] as const,
    lists: () => [...HELPER_KEYS.all, 'list'] as const,
    detail: (id: string) => [...HELPER_KEYS.lists(), 'detail', id] as const,
}