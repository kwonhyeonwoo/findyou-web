export enum ReviewTag {
    PUNCTUAL = "PUNCTUAL",
    KIND = "KIND",
    FAST = "FAST",
    GOOD_COMM = "GOOD_COMM",
}

export interface ReviewCreateRequest {
    rating: number;
    tags: ReviewTag[];
    content: string;
}