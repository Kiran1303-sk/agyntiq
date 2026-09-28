import type { Metadata } from "next";
import AboutPage from "@/components/about-page";

export const metadata: Metadata = {
  title: "About AgyntiQ | Enterprise AI That Moves Business Forward",
  description: "Learn how AgyntiQ helps organizations turn AI ambition into intelligent systems people trust, use, and grow with."
};

export default function Page() {
  return <AboutPage />;
}
