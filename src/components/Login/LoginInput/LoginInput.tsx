
interface Props{
    name:string;
    type:string;
    placeholder:string;
    minLength?:number;
    maxLength?:number;
}

export default function LoginInput({
    name,
    type,
    placeholder,
    minLength,
    maxLength
}:Props) {
  return (
    <input
        className="w-full px-2 py-2 box-border border-b border-b-[#C7C4D7]"
        placeholder={placeholder}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
    />
  )
}
