export const CLIENT_KEYS={
    all:"client" as const,
    lists:(id:string)=>[...CLIENT_KEYS.all,id]as const,
    detail:(id:string)=>[...CLIENT_KEYS.all, "detail",id] as const,
}