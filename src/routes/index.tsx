import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humera Shaikh — Full-Stack AI Engineer" },
      { name: "description", content: "Full-Stack AI Engineer building production AI systems, intelligent automation, and modern SaaS with React, Next.js, Node.js, and Python. Verified Upwork engineer." },
      { property: "og:title", content: "Humera Shaikh — Full-Stack AI Engineer" },
      { property: "og:description", content: "Engineering production-ready AI software: LLM orchestration, scalable SaaS, and modern full-stack systems." },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Humera Shaikh — Full-Stack AI Engineer" },
      { name: "twitter:description", content: "Engineering production-ready AI software: LLM orchestration, scalable SaaS, and modern full-stack systems." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Humera Shaikh",
          jobTitle: "Full-Stack AI Engineer",
          email: "mailto:humerashaikhh605@gmail.com",
          url: "https://www.upwork.com/freelancers/~01abf633e12f90d800",
          sameAs: [
            "https://www.linkedin.com/in/humerashaikhofficial",
            "https://www.upwork.com/freelancers/~01abf633e12f90d800",
          ],
          knowsAbout: [
            "Full-Stack AI Engineering",
            "LLM Orchestration",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "RAG Pipelines",
            "Production SaaS",
          ],
        }),
      },
    ],
  }),
  component: Landing,
});
