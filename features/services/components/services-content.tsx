"use client";
import { useState } from "react";
import { Search } from "@/components/shared/icon";
import { categories } from "../data/services";
import { CategoryGrid } from "./category-grid";
export function ServicesContent({ onCategory }: {
    onCategory: (x: string) => void;
}) {
    const [query, setQuery] = useState("");
    const filtered = categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));
    return (<section className="page-content">
      <div className="page-title">
        <h1>All services</h1>
        <p className="muted">Find the right person for every task.</p>
      </div>
      <div className="search-box">
        <Search size={18}/>
        <input placeholder="Search services" value={query} onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <CategoryGrid onSelect={onCategory}/>
      <div className="service-list">
        {filtered.map((c) => (<button key={c.name} className="service-row" onClick={() => onCategory(c.name)}>
            <span className={`category-icon ${c.color}`}>
              <c.icon size={20}/>
            </span>
            <span>
              <strong>{c.name}</strong>
              <small>Trusted local professionals</small>
            </span>
            
          </button>))}
      </div>
    </section>);
}
