import type { Metadata } from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import { servicePages } from "@/components/service-pages-data";

export const metadata: Metadata = {
  title: "AI Solution Development | AgyntiQ",
  description: servicePages["ai-solution-development"].summary
};

export default function Page() {
  return <ServiceDetailPage data={servicePages["ai-solution-development"]} />;
}
