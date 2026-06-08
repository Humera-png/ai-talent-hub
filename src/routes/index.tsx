import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humera Shaikh — Full Stack Developer & AI Systems Architect" },
      { name: "description", content: "I build intelligent, scalable systems with AI and modern web technologies. Verified Upwork freelancer. Available for AI chatbots, automation, and SaaS development." },
      { property: "og:title", content: "Humera Shaikh — Full Stack + AI Systems Architect" },
      { property: "og:description", content: "Premium AI-powered developer portfolio. GPT-powered apps, automation systems, and scalable SaaS." },
    ],
  }),
  component: Landing,
});
