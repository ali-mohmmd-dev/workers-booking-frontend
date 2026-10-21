"use client";

import Link from "next/link";
import { useBooking } from "@/features/booking/booking-provider";
import type { ServiceDetail } from "../data/service-details";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const { openRequest } = useBooking();
  return (
    <article className="py-6 pb-32 md:py-10 md:pb-32">
      <Link href="/services" className="mb-5 inline-flex text-sm font-semibold text-primary underline underline-offset-4">All services</Link>
      <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-10">
        <div className="overflow-hidden rounded-[var(--radius-card)] bg-surface-soft">
          <img src={service.image} alt={service.title} className={`aspect-[4/3] w-full md:aspect-square ${service.illustration ? "object-contain p-12" : "object-cover"}`} fetchPriority="high" />
        </div>
        <div className="min-w-0">
          <h1 className="m-0 text-[28px] font-semibold leading-tight tracking-tight md:text-[40px]">{service.title}</h1>
          <p className="mb-5 mt-3 text-2xl font-semibold text-primary">₹{service.pricePerHour}<span className="text-sm font-normal text-muted-foreground"> / hour · starting price</span></p>
          <p className="m-0 text-sm leading-7 text-muted-foreground md:text-base">{service.description}</p>
          <section className="mt-7 border-t border-border pt-6">
            <h2 className="mb-4 text-lg font-semibold">What’s included</h2>
            <ul className="m-0 grid list-disc gap-3 pl-5 text-sm leading-6 marker:text-primary">
              {service.included.map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="mt-7 rounded-[var(--radius-card)] bg-surface-soft p-5">
            <h2 className="mb-2 text-lg font-semibold">Make it work for you</h2>
            <p className="m-0 text-sm leading-6 text-muted-foreground">Choose a date, add your location and describe the job when you book. Materials, replacement parts and the final scope are agreed separately.</p>
          </section>
          <div className="mt-6 flex items-center justify-between gap-4 rounded-[var(--radius-card)] border border-border bg-white p-4">
            <div><p className="m-0 text-xs text-muted-foreground">Starting from</p><p className="m-0 text-xl font-semibold">₹{service.pricePerHour}<span className="text-sm font-normal">/hr</span></p></div>
            <button type="button" className="primary min-w-32" onClick={() => openRequest(service.category)}>Book now</button>
          </div>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">Demo pricing. Your request is confirmed with a professional before work begins.</p>
        </div>
      </div>
    </article>
  );
}
