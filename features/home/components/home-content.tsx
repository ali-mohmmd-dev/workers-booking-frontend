"use client";
import Link from "next/link";
import { Plus } from "@/components/shared/icon";
import { HomeHero } from "./home-hero";
import { CategoryGrid } from "@/features/services/components/category-grid";
import { MostRatedServices } from "@/features/services/components/most-rated-services";
import { PopularJobs } from "@/features/services/components/popular-jobs";
import { PopularContracts } from "@/features/services/components/popular-contracts";
export function HomeContent({ onNew, onCategory, }: {
    onNew: () => void;
    onCategory: (x: string) => void;
}) {
    return (<>
      <HomeHero />
      <section className="section-block">
        <div className="section-heading">
          <div>
            <h2>Browse services</h2>
          </div>
          <Link className="link-button" href="/services">
            View all 
          </Link>
        </div>
        <CategoryGrid variant="tiles" onSelect={onCategory}/>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <div>
            <h2>Popular jobs</h2>
          </div>
          <Link className="link-button" href="/services">
            See all 
          </Link>
        </div>
        <PopularJobs onCategory={onCategory}/>
      </section>
      <MostRatedServices onCategory={onCategory}/>
      <PopularContracts onCategory={onCategory}/>
      <section className="cta-strip">
        <div>
          <h2>Tell us what&apos;s on your list.</h2>
        </div>
        <button className="primary" onClick={onNew}>
          Post a job <Plus size={17}/>
        </button>
      </section>
    </>);
}
