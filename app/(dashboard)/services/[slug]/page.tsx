import { notFound } from "next/navigation";
import { serviceDetails } from "@/features/services/data/service-details";
import { ServiceDetailPage } from "@/features/services/components/service-detail-page";

export function generateStaticParams() {
  return serviceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails.find(item => item.slug === slug);
  return { title: service ? `${service.title} | lever` : "Service not found" };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails.find(item => item.slug === slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
