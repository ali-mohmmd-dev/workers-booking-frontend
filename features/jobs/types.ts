export type Job = {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  status: "Requested" | "Assigned" | "In Progress" | "Completed" | "Cancelled";
  image: string;
  rating?: number;
};

export type JobAction = "details" | "cancel" | "complete" | "abort" | "rate";
