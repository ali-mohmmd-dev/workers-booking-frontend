"use client";

import { popular } from "../data/services";
import { PopularJobCard } from "./popular-job-card";
import { ServiceCarousel } from "./service-carousel";

export function PopularJobs({
  onCategory,
}: {
  onCategory: (category: string) => void;
}) {
  return (
    <ServiceCarousel label="Popular jobs">
      {popular.map((service) => (
        <PopularJobCard
          key={service.title}
          service={service}
          onSelect={onCategory}
        />
      ))}
    </ServiceCarousel>
  );
}
