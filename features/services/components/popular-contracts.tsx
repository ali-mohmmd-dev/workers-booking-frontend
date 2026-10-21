"use client";

import { popularContracts } from "../data/contracts";
import { PopularJobCard } from "./popular-job-card";
import { ServiceCarousel } from "./service-carousel";

export function PopularContracts({ onCategory }: { onCategory: (category: string) => void }) {
  return (
    <section className="section-block" aria-labelledby="popular-contracts-heading">
      <div className="section-heading"><h2 id="popular-contracts-heading">Popular contracts</h2></div>
      <ServiceCarousel label="Popular contracts">
        {popularContracts.map(service => <PopularJobCard key={service.title} service={service} onSelect={onCategory} />)}
      </ServiceCarousel>
    </section>
  );
}
