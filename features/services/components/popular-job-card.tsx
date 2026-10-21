"use client";
import { Star } from "@/components/shared/icon";
import type { popular } from "../data/services";
import { useRouter } from "next/navigation";
import { serviceSlug } from "../data/service-details";
type PopularJobCardProps = {
    service: (typeof popular)[number];
    onSelect: (category: string) => void;
    rating?: number;
    reviews?: number;
};
export function PopularJobCard({ service, rating, reviews }: PopularJobCardProps) {
    const router = useRouter();
    return (<button data-service-card className="group relative isolate block aspect-square w-full overflow-hidden rounded-[var(--radius-photo-card)] max-[760px]:rounded-[18px] border border-border bg-foreground p-0 text-left text-white transition-shadow hover:shadow-[var(--shadow-photo-card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none" onClick={() => router.push(`/services/${serviceSlug(service.title)}`)} aria-label={`${service.title}, ${rating ? `${rating} out of 5, ${reviews} reviews` : service.jobs}`}>
      <img className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" src={service.image} alt="" loading="lazy" draggable={false}/>
      <span className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-service)]" aria-hidden="true"/>
      <div className="relative z-10 flex h-full flex-col items-start justify-end  p-[26_21] max-[760px]:gap-0 max-[760px]:p-[22px_16px]">
        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] leading-tight font-semibold text-primary max-[760px]:gap-1 max-[760px]:px-2 max-[760px]:py-0.5 max-[760px]:text-[9px]">
          {rating ? <><Star size={12} className="max-[760px]:size-2.5 max-[760px]:text-[10px]" fill="currentColor"/><span>{rating.toFixed(1)} · {reviews} reviews</span></> : service.jobs}
        </span>
        <h2 className="m-0 text-lg leading-tight mt-2 font-semibold tracking-[-.3px] max-[760px]:text-[16px] max-[760px]:mt-1 max-[760px]:mx-0 max-[760px]:mb-0 max-[760px]:leading-snug max-[760px]:tracking-[-.15px]">{service.title}</h2>
        <p className="m-0 text-xs text-white/90 max-[760px]:text-[10px] max-[760px]:leading-tight">₹{service.pricePerHour}/hr</p>
      </div>
    </button>);
}
