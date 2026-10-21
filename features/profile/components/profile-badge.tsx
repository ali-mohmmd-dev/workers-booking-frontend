import Link from "next/link";

export function ProfileBadge() {
  return (
    <Link
      href="/profile"
      aria-label="View Maya Thompson's profile"
      className="mb-3 inline-flex max-w-full items-center gap-2.5 rounded-full border border-primary/15 bg-surface-soft p-1.5 pr-4 text-primary-dark transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary max-[760px]:gap-2 max-[760px]:p-1 max-[760px]:pr-3"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white max-[760px]:size-7">
        <img src="https://i.pravatar.cc/120?img=47" alt="" width={36} height={36} className="size-9 rounded-full object-cover max-[760px]:size-7" />
      </span>
      <span className="text-sm font-semibold max-[760px]:text-xs">Maya Thompson</span>
    </Link>
  );
}
