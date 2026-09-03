import { useGetErrandApplicationsQuery } from "@/hooks/quires/errand-application/useGetErrandApplicationsQuery"

export const useErrandApplicationDetail = () => {
    const { data: errandApplications } = useGetErrandApplicationsQuery();
    return {
        errandApplications
    }
}