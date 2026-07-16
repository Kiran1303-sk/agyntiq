import type { Metadata } from "next";
import ServicesPage from "@/components/services-page";

export const metadata: Metadata = {
  title: "Services | AgyntiQ",
  description:
    "Explore AgyntiQ's enterprise AI services, from strategy and solution development to integration, data, and managed operations."
};

export default function Page() {
  return <ServicesPage />;
}
