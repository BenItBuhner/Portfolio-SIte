export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string; // HTML content supporting images, embeds, media, etc.
  date: string; // ISO string
  readTime: string;
  tags: string[];
  slug: string; // e.g. "/blog/building-agentic-systems"
  image?: string; // Optional header image URL
  comingSoon?: boolean; // If true, the blog is marked as coming soon and page is not accessible
}

const blogs: Blog[] = [
  // Example blog with coming soon state for testing
  {
    id: 1,
    title: "Building Scalable AI Agents with MCP",
    excerpt: "A deep dive into building scalable AI agents using the Model Context Protocol. Learn best practices and implementation strategies.",
    content: "",
    date: "2025-01-15T00:00:00.000Z",
    readTime: "8 min read",
    tags: ["AI", "MCP", "Agents", "Tutorial"],
    slug: "/blog/building-scalable-ai-agents",
    comingSoon: true
  },
  // Regular blog example (not coming soon)
  {
    id: 2,
    title: "My Journey into AI Development",
    excerpt: "Exploring how I got started in AI development and the lessons learned along the way.",
    content: "<p>This is where the full blog content would go...</p>",
    date: "2024-11-20T00:00:00.000Z",
    readTime: "5 min read",
    tags: ["AI", "Career", "Development"],
    slug: "/blog/my-journey-into-ai"
  }
];

export function getAllBlogs(): Blog[] {
  return blogs;
}

export function getBlogById(postIdOrSlug: string | undefined): Blog | undefined {
  if (!postIdOrSlug) {
    return undefined;
  }
  // Normalize input: strip query/hash, decode, trim, remove leading "blog/" or "/blog/"
  const raw = decodeURIComponent(postIdOrSlug).split("?")[0].split("#")[0].trim();
  const toSegment = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/^\/+|\/+$/g, "")
      .replace(/^blog\//, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const numeric = Number(raw);
  if (!Number.isNaN(numeric)) {
    return blogs.find(b => b.id === numeric);
  }
  // Remove leading/trailing slashes
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  // Remove "blog/" prefix if present
  const cleanSegment = trimmed.startsWith("blog/") ? trimmed.slice("blog/".length) : trimmed;

  // Match by final slug segment
  return blogs.find(b => {
    const slugTrimmed = (b.slug || "").replace(/^\/+|\/+$/g, "");
    const last = slugTrimmed.split("/").pop();
    const lastSeg = last ? toSegment(last) : "";
    const byTitle = toSegment(b.title);
    const inputSeg = toSegment(cleanSegment);
    return (
      last === cleanSegment ||
      slugTrimmed === cleanSegment ||
      (b.slug || "").endsWith(`/${cleanSegment}`) ||
      (b.slug || "") === cleanSegment ||
      (b.slug || "") === `/blog/${cleanSegment}` ||
      lastSeg === inputSeg ||
      byTitle === inputSeg
    );
  });
}


