export interface Project {
  id: number;
  title: string;
  description: string; // Short summary for cards/previews
  content?: string; // Optional HTML content supporting headers, lists, images, embeds, links, etc.
  image?: string; // Optional header image URL
  tech: string[];
  github: string;
  demo: string | null;
  slug?: string; // optional; primary key is id for projects
}

const projects: Project[] = [
  /*
  {
    id: 1,
    title: "Athena 1 Recursive",
    description:
      "An open source/weights recursive-reasoning hybrid SLM that beats frontier on multiple domains. It's free, small, intelligent, and easy-to-use!",
    tech: ["Python", "PyTorch", "SLM", "Recursive Reasoning"],
    github: "https://github.com/BenItBuhner/athena-1-recursive",
    demo: null
  },
  {
    id: 2,
    title: "Athena Cloud Code Agent",
    description:
      "An open-source coding agent that runs in the cloud from any call in Slack or GitHub. It's based off of the Base Agent and makes it super easy to hand off complex tasks for thorough building and testing server-side.",
    tech: ["FastAPI", "Python", "Slack API", "GitHub API"],
    github: "https://github.com/BenItBuhner/athena-cloud-code-agent",
    demo: null
  },
  {
    id: 3,
    title: "Athena CLI",
    description:
      "An open-source CLI once again based off of the Base Agent, allowing you to easily interface with any MCP tools, make edits to files, and more.",
    tech: ["Python", "CLI", "MCP", "File Operations"],
    github: "https://github.com/BenItBuhner/athena-cli",
    demo: null
  },
  */
  {
    id: 4,
    title: "Agent Chassis",
    description:
      "Developed a modular agent foundation with native MCP and local tool support. Includes pre-routed authentication, versatile state management, and more for rapid agent deployment.",
    image: "/projects/agent-chassis-header.png",
    tech: ["FastAPI", "Python", "MCP", "Multi-Agent"],
    github: "https://github.com/BenItBuhner/Agent-Chassis",
    demo: null
  },
  {
    id: 5,
    title: "Model Proxy",
    description:
      "Built a resilient inference gateway that offers API key, provider, and model-level fallbacks. Forked and created a custom version for using any model with Claude Code easily.",
    tech: ["Python", "FastAPI", "OpenAI API", "Anthropic API"],
    github: "https://github.com/BenItBuhner/model-proxy",
    demo: null
  },
  /*
  {
    id: 6,
    title: "Portfolio Site",
    description:
      "Hey! This is the site you're on right now, and its an open-source Next.js app. Feel free to check it out!",
    tech: ["Next.js", "TypeScript", "React", "CSS Modules"],
    github: "https://github.com/BenItBuhner/portfolio-site",
    demo: null
  }
  */
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(idOrSlug: string): Project | undefined {
  const numeric = Number(idOrSlug);
  if (!Number.isNaN(numeric)) {
    return projects.find(p => p.id === numeric);
  }
  // optional slug matching if provided in future
  return projects.find(p => (p.slug && (p.slug === idOrSlug || p.slug?.split("/").pop() === idOrSlug)));
}

export function getFeaturedProjects(): Project[] {
  // Return all projects as featured projects
  return projects;
}


