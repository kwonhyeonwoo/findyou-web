export const HELPER_APPLICATION_KEYS = {
  all: ['helper-application'] as const,
  lists: () => [...HELPER_APPLICATION_KEYS.all, 'lists'] as const,
  myLists: (id: string) => [...HELPER_APPLICATION_KEYS.lists(), id] as const,
  detail: (id: string) => [...HELPER_APPLICATION_KEYS.all, 'detail', id],
};
