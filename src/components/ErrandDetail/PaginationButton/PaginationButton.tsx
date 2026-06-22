import Image from "next/image";

interface Props {
  type: "prev" | "next";
  handleSlide: (type: "prev" | "next") => void;
}
function PaginationButton({ type, handleSlide }: Props) {
  return (
    <button
      onClick={() => handleSlide(type)}
      className={`transition-color absolute top-[50%] ${type === "prev" ? "left-5" : "right-5"} flex -translate-x-0 translate-y-[-50%] cursor-pointer items-center justify-center rounded-full bg-black/20 p-2 text-2xl text-white`}
    >
      <Image
        src={
          type === "prev" ? "/write-errand/prev.svg" : "/write-errand/next.svg"
        }
        alt={type}
        width={10}
        height={10}
      />
    </button>
  );
}

export default PaginationButton;
