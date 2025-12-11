import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Building the future of technology. AI, machine learning, distributed systems, and web development projects.",
  openGraph: {
    title: "Projects",
    description: "Building the future of technology. AI, machine learning, distributed systems, and web development projects.",
    url: "https://bennettbuhner.com/projects",
    type: "website",
    images: [
      {
        url: "/api/og/page?type=projects",
        width: 1200,
        height: 630,
        alt: "Bennett Buhner - Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects",
    description: "Building the future of technology.",
    images: ["/api/og/page?type=projects"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
