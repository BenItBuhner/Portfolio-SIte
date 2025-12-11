import { Project } from '@/data/projects';
import { Blog } from '@/data/blogs';

interface BlogStructuredDataProps {
  blog: Blog;
}

interface ProjectStructuredDataProps {
  project: Project;
}

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

export function BlogStructuredData({ blog }: BlogStructuredDataProps) {
  const slugSegment = getBlogSlugSegment(blog.slug);
  const blogUrl = slugSegment 
    ? `https://bennettbuhner.com/blog/${slugSegment}`
    : `https://bennettbuhner.com/blog/${blog.id}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "author": {
      "@type": "Person",
      "name": "Bennett Buhner",
      "url": "https://bennettbuhner.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Bennett Buhner",
      "url": "https://bennettbuhner.com"
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    },
    "url": blogUrl,
    "keywords": blog.tags.join(", "),
    "articleSection": "Technology",
    "wordCount": blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    "timeRequired": `PT${blog.readTime.split(' ')[0]}M`,
    "image": blog.image 
      ? `https://bennettbuhner.com${blog.image}` 
      : `https://bennettbuhner.com/api/og/blog?id=${blog.id}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function ProjectStructuredData({ project }: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": project.title,
    "description": project.description,
    "author": {
      "@type": "Person",
      "name": "Bennett Buhner",
      "url": "https://bennettbuhner.com"
    },
    "codeRepository": project.github,
    "programmingLanguage": project.tech.join(", "),
    "url": `https://bennettbuhner.com/projects/${project.id}`,
    "image": project.image 
      ? `https://bennettbuhner.com${project.image}` 
      : `https://bennettbuhner.com/api/og/project?id=${project.id}`,
    "dateCreated": new Date().toISOString(),
    "license": "https://opensource.org/licenses/MIT",
    "keywords": project.tech.join(", "),
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Cross-platform",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bennett Buhner - Portfolio",
    "description": "AI Engineer, Developer, Machine Learning Enthusiast. Pushing the boundaries of generative AI/RL, design, and tech.",
    "url": "https://bennettbuhner.com",
    "author": {
      "@type": "Person",
      "name": "Bennett Buhner",
      "url": "https://bennettbuhner.com",
      "sameAs": [
        "https://github.com/BenItBuhner",
        "https://x.com/BennettBuhner",
        "https://www.linkedin.com/in/bennett-buhner-7515921a6/"
      ]
    },
    "publisher": {
      "@type": "Person",
      "name": "Bennett Buhner"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bennettbuhner.com/projects?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bennett Buhner",
    "jobTitle": "AI Engineer",
    "description": "AI Engineer, Developer, Machine Learning Enthusiast. Pushing the boundaries of generative AI/RL, design, and tech.",
    "url": "https://bennettbuhner.com",
    "image": "https://bennettbuhner.com/api/og/page?type=home",
    "sameAs": [
      "https://github.com/BenItBuhner",
      "https://x.com/BennettBuhner",
      "https://www.linkedin.com/in/bennett-buhner-7515921a6/"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Reinforcement Learning",
      "Generative AI",
      "Software Development",
      "Python",
      "FastAPI",
      "PyTorch",
      "TypeScript",
      "React"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Adrian High School",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Adrian",
        "addressRegion": "MN",
        "addressCountry": "US"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
