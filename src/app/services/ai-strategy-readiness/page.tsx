import type { Metadata } from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import { servicePages } from "@/components/service-pages-data";

export const metadata: Metadata = {
  title: "AI Strategy & Readiness Services | AgyntiQ",
  description: servicePages["ai-strategy-readiness"].summary
};

export default function Page() {
  return <ServiceDetailPage data={servicePages["ai-strategy-readiness"]} />;
}
