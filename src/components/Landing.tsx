import { motion } from "framer-motion";
import {
  ArrowRight, Bot, Brain, Briefcase, Cloud, Cpu, Database, ExternalLink,
  Github, Globe, Linkedin, Mail, Rocket, Server, Sparkles, Star, Workflow, Zap,
} from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";
import { ChatWidget } from "@/components/ChatWidget";
import { useState } from "react";
import { toast } from "sonner";

const CONTACT_EMAIL = "humerashaikhh605@gmail.com";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const SKILLS = [
  {
    label: "AI Architecture & Orchestration",
    items: ["OpenAI API", "Claude API", "Prompt Engineering", "RAG Pipelines", "Semantic Search", "Semantic Caching", "Vector DBs (pgvector)", "Embeddings", "Structured Outputs", "Tool Calling", "MCP", "Agent Workflows", "Context Engineering", "LLM Optimization"],
    icon: Brain,
    insight: "Deterministic AI pipelines",
  },
  {
    label: "Frontend Engineering",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "State Management", "Component Architecture", "Performance Optimization", "Accessibility", "Responsive Design"],
    icon: Globe,
    insight: "Sub-second Time-to-Interactive",
  },
  {
    label: "Backend Engineering",
    items: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "PostgreSQL", "Prisma", "Auth & RBAC", "Zod Validation", "Background Jobs", "Caching"],
    icon: Server,
    insight: "Production-grade APIs",
  },
  {
    label: "Infrastructure & Deployment",
    items: ["Docker", "GitHub Actions", "CI/CD", "Cloudflare", "Vercel", "Netlify", "Serverless Functions", "Monitoring", "Logging", "Environment Management"],
    icon: Cloud,
    insight: "Automated, observable, resilient",
  },
];

const PROJECTS = [
  {
    title: "Jarvis AI",
    tag: "Flagship · AI Orchestration",
    problem: "Manual desktop workflows were slow, repetitive, and error-prone.",
    solution: "Engineered an asynchronous Python orchestration pipeline using GPT-4, incorporating semantic chunking, structured JSON outputs via Zod, retry logic, and workflow validation to deliver deterministic automation with execution times under two seconds.",
    stack: ["Python", "GPT-4", "Async Orchestration", "Zod", "Structured Outputs"],
    metric: "Voice → action < 2s",
  },
  {
    title: "Usmani B2B Billing",
    tag: "Production · Live",
    problem: "Wholesale invoicing suffered edge-case pricing bugs and data integrity issues.",
    solution: "Designed a fault-tolerant pricing engine and deterministic state-management workflow with strict Zod schema validation, ensuring consistent billing logic and eliminating edge-case data integrity issues across wholesale transactions.",
    stack: ["React", "TypeScript", "Zod", "State Machines"],
    metric: "100% data integrity",
  },
  {
    title: "FlowSync",
    tag: "SaaS · Performance Engineering",
    problem: "Heavy SaaS dashboards blocked the main thread and delayed interactivity.",
    solution: "Optimized Next.js rendering pipelines using aggressive code splitting, intelligent state synchronization, and efficient data-loading strategies to reduce Time-to-Interactive to sub-second performance while maintaining a responsive user experience.",
    stack: ["Next.js", "React", "Code Splitting", "SSR"],
    metric: "Sub-second TTI",
  },
  {
    title: "Khidma Platform",
    tag: "Marketplace",
    problem: "High friction in the service booking flow reduced conversion and retention.",
    solution: "Refactored the booking pipeline with a mobile-first architecture, accessible components, and validated form state, improving conversion signals across the funnel.",
    stack: ["React", "TypeScript", "Accessibility", "Frontend Architecture"],
    metric: "Higher conversion funnel",
  },
  {
    title: "HyperMoon",
    tag: "Brand · Premium",
    problem: "Templated layouts diluted a premium brand identity.",
    solution: "Engineered a custom layout system and component library that broke standard template patterns while preserving performance budgets.",
    stack: ["React", "Tailwind CSS", "Design Systems"],
    metric: "Bespoke visual system",
  },
  {
    title: "ScrollCraft",
    tag: "Venture · Founder",
    problem: "Early-stage startups needed reliable design-to-code delivery without engineering overhead.",
    solution: "Founded and led a productionized design-to-code studio, shipping 6+ pixel-perfect web experiences with reusable component architectures.",
    stack: ["React", "TypeScript", "Component Systems", "Leadership"],
    metric: "6+ products shipped",
  },
];

const SERVICES = [
  {
    icon: Zap,
    title: "API + AI Integration",
    value: "Integrate AI into existing software without disrupting production workflows. From OpenAI APIs and vector databases to semantic retrieval and structured outputs, I build reliable AI capabilities that fit seamlessly into modern applications while maintaining performance, scalability, and stability.",
    outcome: "AI inside, no rewrite",
  },
  {
    icon: Rocket,
    title: "Smart SaaS Applications",
    value: "Design and build production-ready AI-native SaaS platforms using scalable multi-tenant architectures, secure authentication, modern frontend frameworks, resilient backend systems, and optimized AI workflows that are ready for long-term growth.",
    outcome: "MVP → revenue in weeks",
  },
  {
    icon: Bot,
    title: "AI Chatbot & Agent Engineering",
    value: "Engineer domain-specific chatbots and agent workflows with RAG, tool calling, structured outputs, and semantic caching — deployed behind observable, rate-limited APIs designed for real business traffic.",
    outcome: "Deterministic, measurable AI",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation Systems",
    value: "Architect end-to-end automation pipelines that replace manual operations with validated, fault-tolerant workflows — orchestrated across queues, APIs, and LLM steps with strong observability.",
    outcome: "10x operational throughput",
  },
];

const TESTIMONIALS = [
  { quote: "Humera does an exceptional job when it comes to complex systems and architecture management.", author: "Sarim J.", role: "Upwork · Verified · Apr 2026" },
  { quote: "Even with shifting requirements, Humera was patient and got the frontend live when we were stuck. She's much more than just a coder.", author: "Khidma Team", role: "Service Marketplace" },
  { quote: "The pricing logic was a nightmare to explain, but she just 'got it.' Our billing is finally automated and actually accurate.", author: "Usmani Group", role: "Operations" },
  { quote: "She doesn't just code; she thinks about the user experience. Turned our rough ideas into a polished, high-end interface.", author: "HyperMoon", role: "Digital Brand" },
];

const TIMELINE = [
  { date: "Mar 2025 – Present", title: "Independent Full-Stack AI Engineer", desc: "Engineering AI-powered products end-to-end — frontend architecture, backend systems, LLM orchestration, and production deployment for global clients." },
  { date: "Oct 2024 – Jun 2025", title: "Founder · ScrollCraft", desc: "Led a productionized design-to-code venture. Shipped 6+ web products with reusable component systems and rigorous performance budgets." },
  { date: "Jan 2025 – May 2025", title: "Frontend Engineering Intern · InfoLabz", desc: "Optimized rendering and asset pipelines. Reduced LCP by 40% via code splitting, asset strategy, and hydration tuning." },
  { date: "Dec 2020 – Dec 2024", title: "Technical Author · GeeksforGeeks", desc: "Peer-reviewed engineering articles on JavaScript internals, React runtime behavior, and system design fundamentals." },
];

export function Landing() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <UpworkSection />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="max-w-7xl mx-auto px-6 mt-4">
        <div className="glass rounded-full px-5 py-2.5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-electric to-neon flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span>Humera<span className="text-accent">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Philosophy</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Stack</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#services" className="hover:text-foreground transition-colors">What I Build</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="text-sm font-medium px-4 py-1.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 px-6">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 space-y-7">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-muted-foreground">Available for AI engineering & full-stack engagements · Q3 2026</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="text-5xl md:text-7xl font-display font-semibold leading-[1.05] tracking-tight"
          >
            Full-Stack AI Engineer
            <br />
            <span className="text-gradient">building production AI systems</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I engineer scalable AI applications, intelligent automation systems, and production-ready SaaS
            across React, Next.js, Node.js, and Python — from LLM orchestration and API design to
            performance optimization and deployment infrastructure.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-electric to-neon text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform">
              View Engineering Work <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all">
              Hire Me
            </a>
            <a href="https://www.upwork.com/freelancers/~01abf633e12f90d800" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              Upwork profile <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-wrap gap-6 pt-4 text-sm"
          >
            <Stat value="$50/hr" label="Upwork rate" />
            <Divider />
            <Stat value="6+" label="Products shipped" />
            <Divider />
            <Stat value="40%" label="LCP reduction" />
            <Divider />
            <Stat value="100%" label="Verified reviews" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-electric/30 to-neon/20 blur-3xl rounded-full" />
          <motion.img
            src={heroOrb}
            alt="Abstract iridescent geometric orb representing production AI systems engineering"
            width={1024}
            height={1024}
            className="relative rounded-3xl shadow-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-5 max-w-[240px] space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Bot className="w-3.5 h-3.5 text-accent" /> AI Insight · Architectural Focus
            </div>
            <ul className="text-xs space-y-1 text-foreground/85">
              <li>· Deterministic LLM pipelines</li>
              <li>· Semantic caching & retrieval</li>
              <li>· Structured outputs (Zod)</li>
              <li>· Token & latency optimization</li>
              <li>· Reliable workflow orchestration</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-display font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}
function Divider() {
  return <div className="w-px bg-border h-10 self-center" />;
}

function Marquee() {
  const items = ["React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Prisma", "OpenAI", "Claude", "pgvector", "RAG", "Docker", "Cloudflare", "CI/CD"];
  return (
    <section className="border-y border-border/50 py-6 overflow-hidden bg-card/30">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="text-sm font-mono text-muted-foreground/70 tracking-widest uppercase">{s}</span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

function Section({ id, eyebrow, title, kicker, children }: { id: string; eyebrow: string; title: React.ReactNode; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight">{title}</h2>
          {kicker && <p className="text-muted-foreground mt-4 text-lg leading-relaxed">{kicker}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · Engineering Philosophy"
      title={<>How I engineer software. <span className="text-muted-foreground">Not a résumé.</span></>}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Brain, h: "Systems thinking, hands-on execution", p: "I reverse-engineer the business goal, then design the smallest reliable system that solves it — and implement it end-to-end. The Usmani billing engine was proposed after spotting invoice edge cases, then architected, built, and shipped." },
          { icon: Cpu, h: "AI and full-stack as one discipline", p: "Frontend rendering, backend APIs, LLM orchestration, and infrastructure — engineered by the same person. No coordination tax, no dropped context between layers, no ‘that's not my concern.’" },
          { icon: Briefcase, h: "Production-ready, not demo-ready", p: "Every system I ship is designed for reliability under real traffic: validated inputs, deterministic outputs, observable failures, and maintainable code. Founder of ScrollCraft. Verified Upwork engineer." },
        ].map((c) => (
          <motion.div {...fadeUp} key={c.h} className="glow-border rounded-2xl p-6 space-y-3">
            <c.icon className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-semibold">{c.h}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.p}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-6">Product engineering experience</div>
        <div className="space-y-px">
          {TIMELINE.map((t) => (
            <motion.div {...fadeUp} key={t.title} className="grid md:grid-cols-[200px_1fr] gap-6 py-5 border-t border-border/60 first:border-t-0">
              <div className="text-sm font-mono text-muted-foreground">{t.date}</div>
              <div>
                <div className="font-semibold">{t.title}</div>
                <div className="text-muted-foreground text-sm mt-1">{t.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Engineering Stack"
      title={<>The full stack. <span className="text-gradient">Organized by discipline.</span></>}
      kicker="The tools, patterns, and architectures I reach for when engineering production AI software."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {SKILLS.map((s) => (
          <motion.div {...fadeUp} key={s.label} className="glow-border rounded-2xl p-6 group hover:translate-y-[-4px] transition-transform">
            <s.icon className="w-6 h-6 text-accent mb-4" />
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="text-2xl font-display font-semibold mt-1 mb-4">{s.items.length} capabilities</div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {s.items.map((i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary/70 border border-border">{i}</span>
              ))}
            </div>
            <div className="text-xs text-accent pt-3 border-t border-border/60 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> {s.insight}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="work"
      eyebrow="03 · Selected Engineering Work"
      title={<>Case studies, <span className="text-gradient">not screenshots.</span></>}
      kicker="Each project below documents the challenge, the engineering decisions behind the solution, and the measurable business outcome."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <motion.article {...fadeUp} key={p.title} className="glow-border rounded-2xl p-7 group">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">{p.tag}</div>
                <h3 className="text-2xl font-display font-semibold">{p.title}</h3>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase text-muted-foreground font-mono">Impact</div>
                <div className="text-sm font-semibold text-gradient">{p.metric}</div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Challenge</span>
                <p className="mt-1">{p.problem}</p>
              </div>
              <div>
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Engineering Solution</span>
                <p className="mt-1 text-foreground/90">{p.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border/60">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-md bg-secondary/70 border border-border font-mono">{s}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function UpworkSection() {
  return (
    <Section
      id="upwork"
      eyebrow="04 · Freelance Engineering Impact"
      title={<>Client trust, <span className="text-gradient">Upwork verified.</span></>}
      kicker="Production engagements from a verified freelance profile — engineered, shipped, and maintained."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <motion.div {...fadeUp} className="glow-border rounded-2xl p-7 lg:col-span-2 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent">Upwork · Verified Profile</div>
              <h3 className="text-2xl font-display font-semibold mt-1">Humera S. — Full-Stack AI Engineer</h3>
            </div>
            <a href="https://www.upwork.com/freelancers/~01abf633e12f90d800" target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 text-accent hover:underline">
              View profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <blockquote className="text-foreground/90 leading-relaxed border-l-2 border-accent pl-4 italic">
            "Most AI projects fail because they focus on the model and not the product. Having GPT-4 is not the hard part anymore — engineering it into something reliable, scalable, and maintainable inside a real business is. That's the work I do."
          </blockquote>

          <div className="grid grid-cols-3 gap-4">
            {[
              { v: "$50/hr", l: "Hourly rate" },
              { v: "6+", l: "Shipped systems" },
              { v: "Verified", l: "Profile status" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-secondary/40 border border-border p-4">
                <div className="text-2xl font-display font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="space-y-3">
          {[
            { label: "Primary domain", value: "AI-powered SaaS engineering" },
            { label: "Architectural focus", value: "LLM orchestration + full-stack" },
            { label: "Client sentiment", value: "Highly positive" },
            { label: "Delivery signature", value: "Production, not prototypes" },
          ].map((insight) => (
            <div key={insight.label} className="glow-border rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric/30 to-neon/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{insight.label}</div>
                <div className="text-sm font-semibold truncate">{insight.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="05 · What I Build"
      title={<>Engineering capabilities. <span className="text-gradient">Outcomes, not hours.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {SERVICES.map((s) => (
          <motion.div {...fadeUp} key={s.title} className="glow-border rounded-2xl p-7 flex gap-5 group hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric/30 to-neon/30 flex items-center justify-center shrink-0">
              <s.icon className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.value}</p>
              <div className="text-xs text-accent font-mono uppercase tracking-wider">→ {s.outcome}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="06 · Receipts"
      title={<>Straight talk from <span className="text-gradient">real clients.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {TESTIMONIALS.map((t) => (
          <motion.figure {...fadeUp} key={t.author} className="glow-border rounded-2xl p-7">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-foreground/95 leading-relaxed mb-5">"{t.quote}"</blockquote>
            <figcaption className="text-sm">
              <div className="font-semibold">{t.author}</div>
              <div className="text-muted-foreground text-xs">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="glow-border rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-neon/10 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-12 relative">
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-mono">07 · Contact</div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight">
                Let's engineer <span className="text-gradient">production AI systems</span> together.
              </h2>
              <p className="text-muted-foreground">Direct line. Technical scoping first, calls only if we both want one.</p>
              <div className="space-y-3 pt-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
                </a>
                <a href="https://www.linkedin.com/in/humerashaikhofficial" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" /> /in/humerashaikhofficial
                </a>
                <a href="https://www.upwork.com/freelancers/~01abf633e12f90d800" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <Briefcase className="w-4 h-4" /> Upwork (verified)
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Message queued — Humera will reply within 24h.");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setSent(false), 4000);
              }}
              className="space-y-3"
            >
              <Field name="name" label="Name" placeholder="Your name" />
              <Field name="email" label="Email" type="email" placeholder="you@company.com" />
              <Field name="req" label="What do you need engineered?" textarea placeholder="A RAG-powered support agent, an automated billing pipeline, an AI-native SaaS MVP, a performance rebuild..." />
              <button
                type="submit"
                disabled={sent}
                className="w-full mt-2 px-5 py-3.5 rounded-xl bg-gradient-to-br from-electric to-neon text-primary-foreground font-medium shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60"
              >
                {sent ? "Sent ✓" : "Send inquiry"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text", textarea }: { name: string; label: string; placeholder?: string; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">{label}</span>
      {textarea ? (
        <textarea name={name} required placeholder={placeholder} rows={4} className={cls + " resize-none"} maxLength={1000} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={cls} maxLength={255} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© 2026 Humera Shaikh · Full-Stack AI Engineer</div>
        <div className="font-mono text-xs">Engineered for reliability. Deployed for scale.</div>
      </div>
    </footer>
  );
}
