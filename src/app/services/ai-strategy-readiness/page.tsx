import type { Metadata } from "next";
import StrategyReadinessPage from "@/components/strategy-readiness-page";
import { servicePages } from "@/components/service-pages-data";

export const metadata: Metadata = {
  title: "AI Strategy & Readiness Services | AgyntiQ",
  description: servicePages["ai-strategy-readiness"].summary
};

export default function Page() {
  return <StrategyReadinessPage />;
}
