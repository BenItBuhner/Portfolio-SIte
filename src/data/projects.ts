export interface Project {
  id: number;
  title: string;
  description: string; // Short summary for cards/previews
  date: string; // ISO string
  content?: string; // Optional HTML content supporting headers, lists, images, embeds, links, etc.
  image?: string; // Optional header image URL
  tech: string[];
  github: string;
  demo: string | null;
  slug?: string; // optional; primary key is id for projects
  comingSoon?: boolean;
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
    date: "2025-01-15",
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
    image: "/projects/agent-chassis/agent-chassis-header-v2.png",
    tech: ["FastAPI", "Python", "MCP", "Multi-Agent"],
    github: "https://github.com/BenItBuhner/Agent-Chassis",
    demo: null,
  },
  {
    id: 5,
    title: "Model Proxy (With Claude Code)",
    description:
      "Resilient inference proxy with API key/provider/model fallbacks, optimized to plug any model into Claude Code with minimal setup.",
    date: "2025-02-01",
    content: `
<h2>The Pain With Claude Code & Similar Tools</h2>
<p>I always loved the looks, experience, and more with Claude Code; even if many showed immense latency, bloated inference usage, and many inefficiencies, I find these are mere tradeoffs to something far greater. Sub-agents, native MCP, skill, slash commands, and more, <em>all</em> are very useful and can compound their usefulness when used right. Yet to mere mortals, this usefulness is restrained by its immense cost to use with no real limits. Sure, you can enable paid usage and pay on a per token basis, but this stacks quickly, and there are strong alternatives like GLM-4.6, Qwen3-Coder, and many more.</p>
<h2>My Solution to These Issues</h2>
<p>Here is my custom “model proxy,” not solely for Claude Code, but also to harness free offerings from some providers. Many offer free tiers with rate-limits, and those limits can be frustrating when you hit them—until now. This proxy has:</p>
<ul>
  <li><strong>API Key Fallback Protection:</strong> Detects rate-limits/faults and retries other API keys for that provider to keep tools like Claude Code flowing.</li>
  <li><strong>Provider Fallback Protection:</strong> If all keys/accounts or a server are overloaded, the framework gracefully falls back to another provider for the same model.</li>
  <li><strong>Model Fallback Protection:</strong> When all keys and models are depleted, it can resort to the next best model, letting key-level and provider-level fallbacks handle the next option.</li>
</ul>
<h2>How It’s Better Than the Rest</h2>
<p>Many “Claude Code proxies” work but can feel rough. This framework enables efficient streaming at scale, multiple models concurrently, and layered fail-safes. It’s a singular command to get your custom models running in Claude Code or any OpenAI/Anthropic-compatible tool.</p>
<h2>Where This Proxy/Link is Being Used Today</h2>
<p>Thousands use this via a beta in <strong>Nahcrof AI</strong>, a side-project hosting affordable inference (GLM-4.6, Kimi K2 Thinking, DeepSeek V3.2 Reasoning, Qwen3-Coder, GPT-OSS-120B, and more). The OSS implementation welcomes contributions to improve accessibility.</p>
<h2>Why Take Advantage of This?</h2>
<p>Claude Code is powerful but not accessible to all. If you hit limits (free or paid), this “set it and forget it” proxy fails over across keys, providers, and models to keep you working without interruption.</p>
    `,
    image: "/projects/model-proxy/claude-code-tunnel-header.png",
    tech: [
      "Python",
      "FastAPI",
      "OpenAI SDK",
      "Anthropic SDK",
      "Google GenAI SDK",
    ],
    github: "https://github.com/BenItBuhner/model-proxy",
    demo: null,
  },
  /*
  {
    id: 6,
    title: "Noetic",
    description:
      "An open-source alternative to Notion, Linear, Todoist, and AI-powered assistants, unifying work management and AI tools into one seamless experience.",
    date: "2025-12-19",
    image: "/projects/noetic/noetic-header.png",
    tech: ["Next.js", "TypeScript", "Generative AI", "Agents", "Productivity"],
    github: "https://github.com/BenItBuhner/noetic",
    demo: null,
    comingSoon: true,
  },
  */
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(idOrSlug: string): Project | undefined {
  const numeric = Number(idOrSlug);
  if (!Number.isNaN(numeric)) {
    return projects.find((p) => p.id === numeric);
  }
  // optional slug matching if provided in future
  return projects.find(
    (p) =>
      p.slug && (p.slug === idOrSlug || p.slug?.split("/").pop() === idOrSlug),
  );
}

export function getFeaturedProjects(): Project[] {
  // Return all projects as featured projects
  return projects;
}
