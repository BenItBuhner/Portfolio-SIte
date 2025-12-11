import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "About me, my experience, skills, and projects. AI Engineer, Developer, Machine Learning Enthusiast.",
  openGraph: {
    title: "Overview",
    description: "About me, my experience, skills, and projects. AI Engineer, Developer, Machine Learning Enthusiast.",
    url: "https://bennettbuhner.com/overview",
    type: "website",
    images: [
      {
        url: "/api/og/page?type=overview",
        width: 1200,
        height: 630,
        alt: "Bennett Buhner - Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overview",
    description: "About me, my experience, skills, and projects.",
    images: ["/api/og/page?type=overview"],
  },
};

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
