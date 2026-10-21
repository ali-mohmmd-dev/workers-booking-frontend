"use client";
import { MapPin, CalendarDays, Star } from "@/components/shared/icon";
import type { Job, JobAction } from "../types";
export function JobCard({ job, onAction, }: {
    job: Job;
    onAction: (job: Job, action: JobAction) => void;
}) {
    return (<article className="job-card">
      <div className="job-image">
        <img src={job.image} alt=""/>
        <span className={`status status-${job.status.toLowerCase().replace(" ", "-")}`}>
          {job.status}
        </span>
      </div>
      <div className="job-info">
        <p className="job-category">{job.category}</p>
        <h3>{job.title}</h3>
        <div className="job-meta">
          <span>
            <MapPin size={14}/>
            {job.location}
          </span>
          <span>
            <CalendarDays size={14}/>
            {job.date}
          </span>
        </div>
        {job.rating && (<div className="stars">
            {[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={14} fill={i <= job.rating! ? "currentColor" : "none"}/>))}
            <small>Rated</small>
          </div>)}
        <div className="job-actions">
          <button className="secondary" onClick={() => onAction(job, "details")}>
            View details
          </button>
          {job.status === "Requested" || job.status === "Assigned" ? (<button className="ghost-danger" onClick={() => onAction(job, "cancel")}>
              Cancel
            </button>) : job.status === "In Progress" ? (<>
              <button className="primary small" onClick={() => onAction(job, "complete")}>
                Complete
              </button>
              <button className="ghost-danger" onClick={() => onAction(job, "abort")}>
                Abort
              </button>
            </>) : job.status === "Completed" ? (<button className="secondary" onClick={() => onAction(job, "rate")}>
              <Star size={14}/> Rate
            </button>) : null}
        </div>
      </div>
    </article>);
}
