import type { Metadata } from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import { servicePages } from "@/components/service-pages-data";

export const metadata: Metadata = {
  title: "AI Managed Services | AgyntiQ",
  description: servicePages["ai-managed-services"].summary
};

export default function Page() {
  return <ServiceDetailPage data={servicePages["ai-managed-services"]} />;
}
