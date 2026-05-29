interface Props{
    text:string;
}

export default function SubmitButton({text}:Props) {
  return (
    <button type="submit" className="py-4 w-full bg-black text-white rounded-[12px]">
        {text}
    </button>
  )
}
