export function Avatar({ small = false }: {
    small?: boolean;
}) {
    return (<img className={small ? "avatar avatar-sm" : "avatar"} src="https://i.pravatar.cc/120?img=47" alt="Maya Thompson"/>);
}
