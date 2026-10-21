import type { ReactNode } from "react";
import { BookingProvider } from "@/features/booking/booking-provider";
import { AppShell } from "@/components/layout/app-shell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <BookingProvider><AppShell>{children}</AppShell></BookingProvider>;
}
