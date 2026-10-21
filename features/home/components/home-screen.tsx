"use client";

import { useBooking } from "@/features/booking/booking-provider";
import { HomeContent } from "./home-content";
import { useRouter } from "next/navigation";
import { serviceSlug } from "@/features/services/data/service-details";

export function HomeScreen() {
  const { openRequest } = useBooking();
  const router = useRouter();
  return <HomeContent onNew={() => openRequest()} onCategory={category => router.push(`/services/${serviceSlug(category)}`)} />;
}
