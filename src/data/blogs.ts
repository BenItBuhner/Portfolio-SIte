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
  comingSoon?: boolean;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How I use VS Code anywhere, even on my iPad!",
    excerpt:
      "Stay tuned for the full write-up—this post will cover the journey, architecture, and lessons learned once details are ready.",
    content: "",
    date: "2025-02-01",
    readTime: "Coming soon",
    tags: ["VS Code", "Mobile", "Productivity"],
    slug: "/blog/placeholder",
    image: "/blogs/vs-code-anywhere/how-use-vs-code-anywhere-header.png",
    comingSoon: true,
  },
  {
    id: 2,
    title:
      "I made the best text correction tool out there… and it’s an AutoHotkey script",
    excerpt:
      "A tiny AutoHotkey shortcut that uses Groq Kimi K2 for instant, real-time text corrections — fast, magical, and surprisingly useful.",
    content: `<p>Alright, this is quite an interesting one. I cannot call this a “project” per se, as it is not that massive of an undertaking and it heavily relies on a keyboard shortcut script service to work, but nonetheless, I find is most certainly amusing and super useful! This keyboard shortcut uses the power of Groq’s rapid inference, paired with their Kimi K2 0905 deployment, allowing for near instantaneous text corrections. This may sure sound janky, and the setup may sure feel so, but once it is all said and done, it’s simply <em>magical</em>.</p>

<p>Check out the full source, installation notes, and usage details on GitHub: <a href="https://github.com/BenItBuhner/Insta-AI-Correct" target="_blank" rel="noopener noreferrer">BenItBuhner / Insta-AI-Correct</a></p>

<p><img src="/blogs/cool-auto-correct-tool/demo.gif" alt="This is real-time, and not sped up in any way; this is all to the speed of Groq and power of Kimi K2." /></p>

<p>This is <em>real-time</em>, and not sped up in any way; this is all to the speed of Groq and power of Kimi K2.</p>

<p>All it takes to actually <em>use</em> this cool little tool is:</p>

<ol>
<li><strong>Highlight the text to correct:</strong> This will be the text parsed to Groq for text text correction.</li>
<li><strong>Press the keyboard shortcut:</strong> It is simply <code>Ctrl + Alt + R</code> to trigger the correction.</li>
</ol>

<p>And that is it! P.S. that GIF you see above is <em>real-time</em>, no speed ups, no tricks.</p>

<hr />

<p>I really hope that this tool is useful to someone as it is to me, because I use it for almost <strong>everything</strong>!</p>

<ul>
<li>Correcting text in a draft before Tweeting.</li>
<li>Fixing typos within DMs prior to sending.</li>
<li>Cleaning up snippets of code in my IDE of choice (like Zed and Cursor).</li>
<li>And so. Much. More.</li>
</ul>`,
    date: "2025-12-19",
    readTime: "2 min read",
    tags: ["Shortcuts", "Keyboard", "Productivity", "AI"],
    slug: "/blog/cool-auto-correct-tool",
    image: "/blogs/cool-auto-correct-tool/auto-correct-header.png",
    comingSoon: false,
  },
];

export function getAllBlogs(): Blog[] {
  return blogs;
}

export function getBlogById(
  postIdOrSlug: string | undefined,
): Blog | undefined {
  if (!postIdOrSlug) {
    return undefined;
  }
  // Normalize input: strip query/hash, decode, trim, remove leading "blog/" or "/blog/"
  const raw = decodeURIComponent(postIdOrSlug)
    .split("?")[0]
    .split("#")[0]
    .trim();
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
    return blogs.find((b) => b.id === numeric);
  }
  // Remove leading/trailing slashes
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  // Remove "blog/" prefix if present
  const cleanSegment = trimmed.startsWith("blog/")
    ? trimmed.slice("blog/".length)
    : trimmed;

  // Match by final slug segment
  return blogs.find((b) => {
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
