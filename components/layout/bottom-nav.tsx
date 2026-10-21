"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Clock3, UserRound, Plus } from "@/components/shared/icon";
const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: LayoutGrid },
    { href: "/jobs", label: "Jobs", icon: Clock3 },
    { href: "/profile", label: "Profile", icon: UserRound },
];
export function BottomNav({ onNew }: {
    onNew: () => void;
}) {
    const pathname = usePathname();
    return (<nav className="bottom-nav" aria-label="Main navigation">
      {items.map(({ href, label, icon: Icon }, index) => (<span className="nav-item" key={href}>
          {index === 2 && <button className="nav-action" onClick={onNew} aria-label="Request a worker"><Plus size={22}/></button>}
          <Link href={href} aria-label={label} title={label} className={`nav-link${pathname === href ? " active" : ""}`} aria-current={pathname === href ? "page" : undefined}>
            <Icon size={20} fill={pathname === href ? "currentColor" : "none"}/><span className="nav-label">{label}</span>
          </Link>
        </span>))}
    </nav>);
}
