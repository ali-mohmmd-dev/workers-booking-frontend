"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { LOGIN_ENABLED } from "@/features/auth/config";
import { initialJobs } from "@/features/jobs/data/initial-jobs";
import type { Job, JobAction } from "@/features/jobs/types";
import { RequestModal } from "@/features/jobs/components/request-modal";
import { Toast } from "@/components/shared/toast";

type BookingContextValue = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
  jobs: Job[];
  openRequest: (category?: string) => void;
  actOnJob: (job: Job, action: JobAction) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [sessionLoggedIn, setLoggedIn] = useState(false);
  const loggedIn = !LOGIN_ENABLED || sessionLoggedIn;
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [request, setRequest] = useState<{ category?: string } | null>(null);
  const [toast, setToast] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function notify(message: string) {
    if (timer.current) clearTimeout(timer.current);
    setToast(message);
    timer.current = setTimeout(() => setToast(""), 3000);
  }

  function logout() {
    setLoggedIn(false);
    setRequest(null);
    setToast("");
    router.push("/");
  }

  function addJob(job: Job) {
    setJobs(current => [job, ...current]);
    setRequest(null);
    notify("Request submitted successfully");
  }

  function actOnJob(job: Job, action: JobAction) {
    if (action === "cancel" || action === "abort" || action === "complete") {
      const status = action === "complete" ? "Completed" : "Cancelled";
      setJobs(current => current.map(item => item.id === job.id ? { ...item, status } : item));
      notify(action === "complete" ? "Job marked complete" : "Job cancelled");
    } else {
      notify(action === "rate" ? "Rating form coming soon" : `${job.title} · ${job.status}`);
    }
  }

  return (
    <BookingContext.Provider value={{ loggedIn, login: () => setLoggedIn(true), logout, jobs, openRequest: category => setRequest({ category }), actOnJob }}>
      {children}
      {loggedIn && request && <RequestModal selected={request.category} onClose={() => setRequest(null)} onSubmit={addJob} />}
      {loggedIn && <Toast message={toast} />}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used inside BookingProvider");
  return context;
}
