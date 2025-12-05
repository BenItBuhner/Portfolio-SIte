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
}

const blogs: Blog[] = [];

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


