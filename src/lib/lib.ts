'use client'

export const formattedPrice = (price: string) => {
    if (!price) return "";
    return `${price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
};