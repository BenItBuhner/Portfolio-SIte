export interface Project {
  id: number;
  title: string;
  description: string;
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
  {
    id: 4,
    title: "Base Agent",
    description:
      "An open-source FastAPI agent base for anyone to quickly fork and get started with agents. Uses MCP, multi-agent orchestration, and a modular framework to make it intuitive to build off of.",
    tech: ["FastAPI", "Python", "MCP", "Multi-Agent"],
    github: "https://github.com/BenItBuhner/base-agent",
    demo: null
  },
  {
    id: 5,
    title: "Model Proxy",
    description:
      "This proxy allows for any OpenAI compatible providers, API keys, and models, to be fallen back on and ran through a centralized inference server that works through both OpenAI and an Anthropic API interpreter. You can easily run any of your favorite models on Claude Code or wherever else you want!",
    tech: ["Python", "FastAPI", "OpenAI API", "Anthropic API"],
    github: "https://github.com/BenItBuhner/model-proxy",
    demo: null
  },
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


