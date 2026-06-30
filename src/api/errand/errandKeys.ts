export const ERRAND_KEYS = {
  all: ['errand'] as const,
  lists: () => [...ERRAND_KEYS.all, 'list'] as const,

  myLists: () => [...ERRAND_KEYS.all, 'my'] as const,

  detail: (id: string) => [...ERRAND_KEYS.all, 'detail', id] as const,
};