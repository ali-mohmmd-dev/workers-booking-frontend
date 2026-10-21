"use client";
import { mostRatedServices } from "../data/rated-services";
import { PopularJobCard } from "./popular-job-card";
import { ServiceCarousel } from "./service-carousel";
export function MostRatedServices({ onCategory }: {
    onCategory: (category: string) => void;
}) {
    return (<section className="section-block" aria-labelledby="most-rated-heading">
      <div className="section-heading"><h2 id="most-rated-heading">Most rated services</h2></div>
      <ServiceCarousel label="Most rated services">
        {mostRatedServices.map(({ service, rating, reviews }) => <PopularJobCard key={service.title} service={service} rating={rating} reviews={reviews} onSelect={onCategory}/>)}
      </ServiceCarousel>
    </section>);
}
