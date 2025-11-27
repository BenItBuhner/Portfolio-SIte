# Bennett Buhner - Portfolio Site

A modern, responsive portfolio website built with **Next.js 16**, **TypeScript**, and **CSS Modules**. Features a clean design with light/dark theme support, PWA capabilities, and SEO optimization.

## Overview

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **CSS Modules** for scoped, maintainable styles
- **Light/Dark Theme** with system preference detection
- **PWA Support** via `next-pwa` (offline-capable)
- **SEO Optimized** with structured data (JSON-LD), sitemap, and robots.txt
- **Responsive Design** for all device sizes
- **Accessible** with semantic HTML and ARIA attributes

## Using It

### Prerequisites

- Node.js 18+ (recommended: 20+)
- Preferably npm or some other

### Installation

```bash
# Clone the repository
git clone https://github.com/BenItBuhner/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding Content

### Adding a Blog Post

Edit `src/data/blogs.ts` and add a new entry to the `blogs` array:

```typescript
const blogs: Blog[] = [
  {
    id: 1,
    title: "My First Blog Post",
    excerpt: "A brief description of the post...",
    content: `
      <p>Your HTML content here...</p>
      <h2>Subheading</h2>
      <p>More content...</p>
    `,
    date: "2025-01-15",           // ISO date string
    readTime: "5 min read",
    tags: ["AI", "Machine Learning"],
    slug: "/blog/my-first-post",  // URL-friendly slug
    image: "/assets/blog/my-post.jpg"  // Optional header image
  },
  // Add more posts...
];
```

The blog will automatically:
- Appear on the `/blog` page
- Have its own detail page at `/blog/my-first-post`
- Be included in the sitemap

### Adding a Project

Edit `src/data/projects.ts` and add a new entry to the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "My Awesome Project",
    description: "A detailed description of what this project does...",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com/username/project",
    demo: "https://demo.example.com"  // or null if no demo
  },
  // Add more projects...
];
```

Projects will automatically:
- Appear on the `/projects` page and home page featured section
- Have their own detail page at `/projects/1`
- Be included in the sitemap

### Adding Timeline Entries

Edit `src/data/timeline.ts` to add career milestones:

```typescript
const TIMELINE: TimelineEntry[] = [
  {
    id: "job-company-2025",
    date: "2025 - Present",
    title: "Senior Developer",
    subtitle: "Company Name",
    type: "Experience",  // Experience | Education | Project | Open Source | Other
    location: "Remote",
    description: "Brief description of the role...",
    highlights: [
      "Key achievement 1",
      "Key achievement 2"
    ],
    links: [
      { label: "Company Website", url: "https://example.com" }
    ]
  },
  // Add more entries...
];
```