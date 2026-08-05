export const helperApplicationKeys = {
  all: ['helper-application'] as const,
  lists: () => [...helperApplicationKeys.all, 'lists'] as const,
  detail: (id: string) => [...helperApplicationKeys.all, 'detail', id],
};
