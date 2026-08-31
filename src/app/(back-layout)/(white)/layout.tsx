export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 flex-col bg-white p-5">{children}</div>;
}
