import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Bennett Buhner. Open to discussing new opportunities, collaborations, or chatting about technology and AI.",
  openGraph: {
    title: "Contact Me",
    description: "Get in touch with Bennett Buhner. Open to discussing new opportunities, collaborations, or chatting about technology and AI.",
    url: "https://bennettbuhner.com/contact-me",
    type: "website",
    images: [
      {
        url: "/api/og/page?type=contact-me",
        width: 1200,
        height: 630,
        alt: "Bennett Buhner - Contact Me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me",
    description: "Get in touch with Bennett Buhner.",
    images: ["/api/og/page?type=contact-me"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
