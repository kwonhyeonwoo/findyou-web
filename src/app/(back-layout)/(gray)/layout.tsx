export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col bg-[#F7F8FA] p-5">{children}</div>
  );
}
