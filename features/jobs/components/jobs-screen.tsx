"use client";

import { useBooking } from "@/features/booking/booking-provider";
import { JobsContent } from "./jobs-content";

export function JobsScreen() {
  const { jobs, actOnJob } = useBooking();
  return <JobsContent jobs={jobs} onAction={actOnJob} />;
}
