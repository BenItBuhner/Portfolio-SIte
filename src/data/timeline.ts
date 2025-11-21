export interface TimelineEntry {
  id: string;
  date: string; // ISO-ish or human
  title: string;
  subtitle?: string;
  type: "Experience" | "Education" | "Project" | "Open Source" | "Other";
  location?: string;
  description: string;
  highlights?: string[];
  links?: { label: string; url: string }[];
}

const TIMELINE: TimelineEntry[] = [
  {
    id: "placeholder-1",
    date: "Present",
    title: "Placeholder Entry — Replace Me",
    subtitle: "Short subtitle",
    type: "Other",
    location: "Remote",
    description:
      "This is a placeholder timeline entry to be replaced with real content. Use this spot to add a concise summary of the event, role, or milestone.",
    highlights: [
      "Add a short highlight or outcome",
      "Keep bullets action-oriented and concise"
    ]
  }
];

export function getTimeline(): TimelineEntry[] {
  return TIMELINE;
}

export default TIMELINE;
