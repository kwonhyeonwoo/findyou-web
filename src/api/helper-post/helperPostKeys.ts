export const HELPER_POST_KEYS = {
  all: ['helper'] as const,
  lists: () => [...HELPER_POST_KEYS.all, 'list'] as const,
  detail: (id: string) => [...HELPER_POST_KEYS.lists(), 'detail', id] as const,
  applications: (id: string) =>
    [...HELPER_POST_KEYS.all, 'applications', id] as const,
};
