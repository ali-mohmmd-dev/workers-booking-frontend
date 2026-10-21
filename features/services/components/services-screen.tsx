"use client";

import { useRouter } from "next/navigation";
import { serviceSlug } from "../data/service-details";
import { ServicesContent } from "./services-content";

export function ServicesScreen() {
  const router = useRouter();
  return <ServicesContent onCategory={category => router.push(`/services/${serviceSlug(category)}`)} />;
}
