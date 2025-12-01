import { MetadataRoute } from 'next';
import { getAllProjects } from '@/data/projects';
import { getAllBlogs } from '@/data/blogs';
import { getTimeline } from '@/data/timeline';

/**
 * Safely extracts the final segment from a blog slug for URL construction.
 * Handles edge cases like empty slugs, missing slashes, and undefined values.
 */
function getBlogSlugSegment(slug: string | undefined): string {
  if (!slug || typeof slug !== 'string') {
    return '';
  }
  
  // Remove leading/trailing slashes and whitespace
  const trimmed = slug.trim().replace(/^\/+|\/+$/g, '');
  
  if (!trimmed) {
    return '';
  }
  
  // Split by '/' and get the last segment
  const segments = trimmed.split('/').filter(segment => segment.length > 0);
  
  // Return the last segment, or the whole trimmed slug if no slashes found
  return segments.length > 0 ? segments[segments.length - 1] : trimmed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bennettbuhner.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/overview`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/timeline`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-me`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Dynamic project pages
  const projectPages = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic blog pages
  const blogPages = getAllBlogs().map((blog) => {
    const slugSegment = getBlogSlugSegment(blog.slug);
    const blogUrl = slugSegment 
      ? `${baseUrl}/blog/${slugSegment}`
      : `${baseUrl}/blog/${blog.id}`;
    
    return {
      url: blogUrl,
      lastModified: new Date(blog.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  // Timeline entries count (for reference, timeline is a single page)
  const _timelineCount = getTimeline().length;

  return [...staticPages, ...projectPages, ...blogPages];
}
