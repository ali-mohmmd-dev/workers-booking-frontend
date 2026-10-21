"use client";
import { useState } from "react";
import type { Job, JobAction } from "../types";
import { JobCard } from "./job-card";
export function JobsContent({ jobs, onAction, }: {
    jobs: Job[];
    onAction: (j: Job, a: JobAction) => void;
}) {
    const [filter, setFilter] = useState("All jobs");
    const filteredJobs = jobs.filter(job => filter === "All jobs" || job.status === filter);
    return (<section className="page-content">
      <div className="page-title">
        <h1>Recent jobs</h1>
        <p className="muted">Keep track of your requests and bookings.</p>
      </div>
      <div className="filter-row">
        {["All jobs", "Requested", "Completed"].map(status => (<button key={status} className={`filter${filter === status ? " active" : ""}`} aria-pressed={filter === status} onClick={() => setFilter(status)}>{status}</button>))}
      </div>
      <div className="jobs-list">
        {filteredJobs.length === 0 && <p className="muted">No jobs match this filter.</p>}
        {filteredJobs.map((job) => (<JobCard key={job.id} job={job} onAction={onAction}/>))}
      </div>
    </section>);
}
