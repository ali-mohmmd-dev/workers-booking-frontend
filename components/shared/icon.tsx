import type { CSSProperties } from "react";
const icons = {
    Bell: "bell",
    BriefcaseBusiness: "paint-roller",
    CalendarDays: "calendar-days",
    Check: "check",
    Clock3: "clock",
    Home: "home",
    ImagePlus: "picture",
    KeyRound: "key",
    LayoutGrid: "grid",
    MapPin: "marker",
    Menu: "menu-burger",
    Plus: "plus",
    Search: "search",
    Settings2: "settings-sliders",
    ShieldCheck: "shield-check",
    Sparkles: "sparkles",
    Star: "star",
    UserRound: "user",
    UsersRound: "users",
    Wrench: "wrench-simple",
    X: "cross-small",
    Zap: "bolt",
} as const;
export type IconName = keyof typeof icons;
type IconProps = {
    size?: number;
    className?: string;
    fill?: "currentColor" | "none";
};
type FlaticonIconProps = IconProps & {
    name: IconName;
};
export function FlaticonIcon({ name, size = 20, className = "", fill = "none" }: FlaticonIconProps) {
    const variant = fill === "currentColor" ? "sr" : "rr";
    const style = { "--icon-size": `${size}px` } as CSSProperties;
    return <i aria-hidden="true" className={`fi-${variant}-${icons[name]} app-icon ${className}`} style={style}/>;
}
function createIcon(name: IconName) {
    function Icon(props: IconProps) {
        return <FlaticonIcon name={name} {...props}/>;
    }
    Icon.displayName = `Flaticon${name}`;
    return Icon;
}
export const Bell = createIcon("Bell");
export const BriefcaseBusiness = createIcon("BriefcaseBusiness");
export const CalendarDays = createIcon("CalendarDays");
export const Check = createIcon("Check");
export const Clock3 = createIcon("Clock3");
export const Home = createIcon("Home");
export const ImagePlus = createIcon("ImagePlus");
export const KeyRound = createIcon("KeyRound");
export const LayoutGrid = createIcon("LayoutGrid");
export const MapPin = createIcon("MapPin");
export const Menu = createIcon("Menu");
export const Plus = createIcon("Plus");
export const Search = createIcon("Search");
export const Settings2 = createIcon("Settings2");
export const ShieldCheck = createIcon("ShieldCheck");
export const Sparkles = createIcon("Sparkles");
export const Star = createIcon("Star");
export const UserRound = createIcon("UserRound");
export const UsersRound = createIcon("UsersRound");
export const Wrench = createIcon("Wrench");
export const X = createIcon("X");
export const Zap = createIcon("Zap");
