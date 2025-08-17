
export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-[11px] font-medium text-yellow-200/90">
      {children}
    </span>
  );
}
