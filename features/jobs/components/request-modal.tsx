"use client";
import { useState } from "react";
import { X, ImagePlus } from "@/components/shared/icon";
import type { Job } from "../types";
import { categories, popular } from "@/features/services/data/services";
export function RequestModal({ selected, onClose, onSubmit, }: {
    selected?: string;
    onClose: () => void;
    onSubmit: (job: Job) => void;
}) {
    const [category, setCategory] = useState(selected || "");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (!category || !title || !description || !address || !date) {
            setError("Please fill in all required fields.");
            return;
        }
        onSubmit({
            id: Date.now(),
            title,
            category,
            location: address,
            date,
            status: "Requested",
            image: popular.find((x) => x.category === category)?.image || popular[0].image,
        });
    }
    return (<div className="modal-backdrop">
      <section className="request-modal" role="dialog" aria-modal="true" aria-labelledby="request-title">
        <div className="modal-head">
          <div>
            <h2 id="request-title">What can we help with?</h2>
          </div>
          <button aria-label="Close request" className="close-button" onClick={onClose}>
            <X size={20}/>
          </button>
        </div>
        <form onSubmit={submit}>
          <label>
            Service category{" "}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Choose a service</option>
              {categories.map((c) => (<option key={c.name}>{c.name}</option>))}
            </select>
          </label>
          <label>
            Job title
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Fix my kitchen tap"/>
          </label>
          <label>
            Describe the job
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Tell us a little about what you need…" rows={3}/>
          </label>
          <div className="form-row">
            <label>
              Address
              <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street address"/>
            </label>
            <label>
              Preferred date & time
              <input value={date} onChange={(e) => setDate(e.target.value)} type="datetime-local"/>
            </label>
          </div>
          <button type="button" className="upload-button">
            <ImagePlus size={18}/> Add photos <span>optional</span>
          </button>
          {error && <p className="error">{error}</p>}
          <div className="modal-actions">
            <button type="button" className="secondary" onClick={onClose}>
              Close
            </button>
            <button className="primary" type="submit">
              Submit request 
            </button>
          </div>
        </form>
      </section>
    </div>);
}
