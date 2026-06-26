export const ERRAND_APPLICAION_KEYS = {
  all: ["errand_application" as const],
  detail: (id: string) =>
    [...ERRAND_APPLICAION_KEYS.all, "detail", id] as const,
  lists: (id: string) => [...ERRAND_APPLICAION_KEYS.all, id] as const,
};
