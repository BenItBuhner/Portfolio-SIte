import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "A curated timeline of projects, education, and open-source work throughout my career.",
  openGraph: {
    title: "Timeline",
    description: "A curated timeline of projects, education, and open-source work throughout my career.",
    url: "https://bennettbuhner.com/timeline",
    type: "website",
    images: [
      {
        url: "/api/og/page?type=timeline",
        width: 1200,
        height: 630,
        alt: "Bennett Buhner - Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeline",
    description: "A curated timeline of projects, education, and open-source work.",
    images: ["/api/og/page?type=timeline"],
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
