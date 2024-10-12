import Link from "next/link";

export function MenuItem({ icon: Icon, label, link, click }: { icon: React.ElementType, label: string, link?: string, click?: () => void }) {
  return (
    <div onClick={() => !link && click ? click() : null}>
      <Link href={link ? link : "#"}
        className="flex items-center px-4 py-3 space-x-3 transition-all rounded-md focus-within:bg-slate-200 bg-slate-100">
        <Icon className="text-alate-500" />
        <span>{label}</span>
      </Link>
    </div>
  );
}