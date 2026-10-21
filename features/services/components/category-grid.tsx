"use client";
import { useState } from "react";
import { categories } from "../data/services";
type CategoryGridProps = {
    onSelect: (category: string) => void;
    variant?: "default" | "tiles";
};
export function CategoryGrid({ onSelect, variant = "default" }: CategoryGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const tiles = variant === "tiles";
    return (<div className={`category-grid${tiles ? " category-grid--tiles" : ""}`}>
      {categories.map(({ name, illustration }) => (<button className={`category${tiles ? " category--tile" : ""}${tiles && selectedCategory === name ? " is-selected" : ""}`} key={name} onClick={() => {
                setSelectedCategory(name);
                onSelect(name);
            }}>
          <span className="category-art" aria-hidden="true">
            <img src={illustration} alt="" width={64} height={64} draggable={false}/>
          </span>
          <span>{name}</span>
        </button>))}
    </div>);
}
