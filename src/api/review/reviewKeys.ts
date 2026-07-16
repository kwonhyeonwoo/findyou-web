export const reviewKeys = {
    all: ['review'] as const,
    list: () => [...reviewKeys.all, 'list'] as const,
    detail: (id: string) => [...reviewKeys.all, 'detail', id] as const,
}