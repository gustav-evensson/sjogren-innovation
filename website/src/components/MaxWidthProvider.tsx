export default function MaxWidthProvider({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-screen-mw mx-auto px-8 sm:px-20">{children}</div>;
}
