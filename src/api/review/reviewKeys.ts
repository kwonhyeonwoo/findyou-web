export const reviewKeys = {
    errand: ['reivew-errand'] as const,
    helper: ['review-helper'] as const,
    errandLists: () => [...reviewKeys.errand, 'list'] as const,
    errandDetail: (id: string) => [...reviewKeys.errand, 'detail', id] as const,
    helperLists: () => [...reviewKeys.helper, 'list'] as const,
    helperDetail: (id: string) => [...reviewKeys.helper, 'detail', id] as const,
}