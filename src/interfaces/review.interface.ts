export interface ReviewCreateRequest {
    rating: number;
    tags: string[];
    review: string;
}