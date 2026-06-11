export const ERRAND_KEYS ={
    errand:['errand'] as const,
    lists:(id:string)=>[...ERRAND_KEYS.errand,id],
    detail:(id:string)=>[...ERRAND_KEYS.errand, id, 'detail'],
}