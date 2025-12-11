import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on AI, technology, and the future of development. Technical deep-dives, industry analysis, and practical guides.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on AI, technology, and the future of development. Technical deep-dives, industry analysis, and practical guides.",
    url: "https://bennettbuhner.com/blog",
    type: "website",
    images: [
      {
        url: "/api/og/page?type=blog",
        width: 1200,
        height: 630,
        alt: "Bennett Buhner - Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on AI, technology, and the future of development.",
    images: ["/api/og/page?type=blog"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
