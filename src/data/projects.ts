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
      "A strong foundation for building versatile agents with native MCP and local tool support. Includes pre-routed authentication, persistent state management, and modular architecture for rapid agent deployment at any scale.",
    content: `<p>As we have all come to realize, generative AI agents are the future, and will be for a good while. And although they are super powerful, they can be quite complex and frustrating to make and scale for your purpose(s). This is why I have come up with something <em>very</em> useful for people that want to get their foot in the door when it comes to making agents, the <strong>Agent Chassis</strong>! This "chassis" is named uniquely, as it well takes on the characteristics of a vehicle chassis; it is a strong foundation that has majority of the core functionality.</p>
<p>This foundation offers a ton, including:</p>
<ul>
  <li>MCP and local tool integration out-of-the-box</li>
  <li>Pre-routed authentication for easy usage for production-level instances</li>
  <li>Server-side and client-side persistent methods depending on what one needs</li>
  <li>Modular agency throughout, easily enabling agents/completions to be called from anywhere, and new routes can be made with ease</li>
  <li>Redis and DB natively integrated for production-scale usage</li>
  <li>And more!</li>
</ul>
<p>I made this out of a major frustration of mine—I was trying to build new agents off of FastAPI, but every single one was messy, majorly unique, and imperfect in their own annoying ways. But with this, I can create my own customized/personalized agents. Each with their own endpoints, uses, tools, and so on.</p>
<p>I really hope people find this useful, as while it may not be anything too notable, it takes full advantage of the many offerings of today, such as SSE, HTTP, and other similar MCP implementations, and it could be genuinely useful to people that just want to get a grasp of how to use these unique protocols.</p>
<p>You can check out the GitHub repository above, and I hope this helps anyone in the future that wants to make their own agent(s), either locally or at production scale.</p>`,
    image: "/projects/agent-chassis-header.png",
    tech: ["FastAPI", "Python", "MCP", "Multi-Agent"],
    github: "https://github.com/BenItBuhner/Agent-Chassis",
    demo: null
  },
  /*
  {
    id: 5,
    title: "Model Proxy",
    description:
      "Built a resilient inference gateway that offers API key, provider, and model-level fallbacks. Forked and created a custom version for using any model with Claude Code easily.",
    tech: ["Python", "FastAPI", "OpenAI API", "Anthropic API"],
    github: "https://github.com/BenItBuhner/model-proxy",
    demo: null
  },
  */
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


