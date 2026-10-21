"use client";
import { Children, type ReactNode } from "react";
export function ServiceCarousel({ label, children }: {
    label: string;
    children: ReactNode;
}) {
    const slides = Children.toArray(children);
    return (<section className="popular-slider" aria-label={label} aria-roledescription="carousel">
      <div className="job-carousel">
        {slides.map((slide, index) => (<div className="popular-slide" key={index} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
            {slide}
          </div>))}
      </div>
    </section>);
}
