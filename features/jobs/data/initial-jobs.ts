import type { Job } from "../types";

export const initialJobs: Job[] = [
  {
    id: 1,
    title: "Fix leaking kitchen tap",
    category: "Plumbing",
    location: "12 Oak Street",
    date: "Today, 4:00 PM",
    status: "Assigned",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Move sofa and boxes",
    category: "Moving",
    location: "48 Pine Avenue",
    date: "Jun 18, 10:30 AM",
    status: "Requested",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Living room deep clean",
    category: "Cleaning",
    location: "12 Oak Street",
    date: "Jun 12, 2:00 PM",
    status: "Completed",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
  },
];
