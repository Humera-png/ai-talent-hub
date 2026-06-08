import { motion } from "framer-motion";
import {
  ArrowRight, Bot, Brain, Briefcase, Cpu, Database, ExternalLink,
  Github, Globe, Linkedin, Mail, Rocket, Sparkles, Star, Workflow, Zap,
} from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";
import { ChatWidget } from "@/components/ChatWidget";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const SKILLS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Zod"], icon: Globe, insight: "Pixel-perfect, performance-tuned" },
  { label: "Backend", items: ["Node.js", "Python", "Flask", "REST APIs"], icon: Cpu, insight: "Production-grade APIs" },
  { label: "AI & ML", items: ["OpenAI API", "GPT-4", "Prompt Engineering", "NLP", "Generative AI"], icon: Brain, insight: "Strongest emerging trend" },
  { label: "Database", items: ["MongoDB", "PostgreSQL", "Firebase"], icon: Database, insight: "Schema design + scale" },
];

const PROJECTS = [
  {
    title: "Jarvis AI",
    tag: "Final Year · Flagship",
    problem: "Repetitive desktop workflows kill productivity.",
    solution: "Python automation engine using GPT-4 NLP to translate voice & text commands into file management and web automation.",
    stack: ["Python", "OpenAI API", "NLP", "Automation"],
    metric: "Voice → action in <2s",
  },
  {
    title: "FlowSync",
    tag: "SaaS · Performance",
    problem: "Heavy SaaS dashboards feel sluggish on first load.",
    solution: "High-performance automation SaaS frontend with optimized rendering pipeline.",
    stack: ["Next.js", "Tailwind", "UX"],
    metric: "Sub-second TTI",
  },
  {
    title: "Usmani B2B Billing",
    tag: "Production · Live",
    problem: "Manual invoicing errors costing wholesale clients.",
    solution: "Automated pricing engine with wholesale/retail toggle, strict Zod validation eliminating data integrity bugs.",
    stack: ["React", "TypeScript", "Zod"],
    metric: "100% invoice accuracy",
  },
  {
    title: "Khidma Platform",
    tag: "Marketplace",
    problem: "Friction in service booking flow hurting retention.",
    solution: "Mobile-first redesign of the booking pipeline, accessibility-focused frontend rebuild.",
    stack: ["React", "UX Design", "Frontend"],
    metric: "Higher conversion funnel",
  },
  {
    title: "HyperMoon",
    tag: "Brand · Premium",
    problem: "Generic templates dilute high-end brand identity.",
    solution: "Custom layout engineering breaking standard template patterns for a unique digital presence.",
    stack: ["Tailwind", "React", "Design"],
    metric: "Bespoke visual system",
  },
  {
    title: "ScrollCraft",
    tag: "Venture · Founder",
    problem: "Startups need design-to-code without overhead.",
    solution: "Founded specialized design-to-code venture, delivered 6+ pixel-perfect web experiences to early-stage startups.",
    stack: ["Strategy", "React", "Leadership"],
    metric: "6+ products shipped",
  },
];

const SERVICES = [
  { icon: Bot, title: "AI Chatbot Development", value: "Custom GPT-powered assistants that actually solve workflow bottlenecks.", outcome: "24/7 intelligent support" },
  { icon: Workflow, title: "Business Automation", value: "End-to-end automation engines replacing manual ops with scalable systems.", outcome: "10x ops throughput" },
  { icon: Rocket, title: "Smart SaaS Applications", value: "Full-stack AI-native SaaS — from architecture to launch.", outcome: "MVP → revenue in weeks" },
  { icon: Zap, title: "API + AI Integration", value: "Glue your stack to OpenAI, vector DBs, and custom models without breaking what works.", outcome: "AI inside, no rewrite" },
];

const TESTIMONIALS = [
  { quote: "Humera does an exceptional job when it comes to complex systems and architecture management.", author: "Sarim J.", role: "Upwork · Verified · Apr 2026" },
  { quote: "Even with shifting requirements, Humera was patient and got the frontend live when we were stuck. She's much more than just a coder.", author: "Khidma Team", role: "Service Marketplace" },
  { quote: "The pricing logic was a nightmare to explain, but she just 'got it.' Our billing is finally automated and actually accurate.", author: "Usmani Group", role: "Operations" },
  { quote: "She doesn't just code; she thinks about the user experience. Turned our rough ideas into a polished, high-end interface.", author: "HyperMoon", role: "Digital Brand" },
];

const TIMELINE = [
  { date: "Mar 2025 – Present", title: "Independent Full-Stack & AI Developer", desc: "Engineering AI-powered systems & high-performance React interfaces for global clients." },
  { date: "Oct 2024 – Jun 2025", title: "Founder · ScrollCraft", desc: "Led a design-to-code venture. Delivered 6+ pixel-perfect web experiences to startups." },
  { date: "Jan 2025 – May 2025", title: "Frontend Engineering Intern · InfoLabz", desc: "Performance optimization. Reduced LCP by 40% via code-splitting and asset management." },
  { date: "Dec 2020 – Dec 2024", title: "Technical Author · GeeksforGeeks", desc: "Peer-reviewed articles on JavaScript logic and React internals." },
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
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
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
            <span className="text-muted-foreground">Available for AI & full-stack projects · Q2 2026</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="text-5xl md:text-7xl font-display font-semibold leading-[1.05] tracking-tight"
          >
            Full Stack Developer
            <br />
            <span className="text-gradient">& AI Systems Architect</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I build intelligent, scalable systems that solve real business problems
            using AI and modern web technologies. Trusted by clients across freelance
            platforms and real-world production deployments.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-electric to-neon text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
            alt="Abstract iridescent geometric orb representing AI systems architecture"
            width={1024}
            height={1024}
            className="relative rounded-3xl shadow-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 max-w-[200px]">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Bot className="w-3.5 h-3.5 text-accent" /> AI Insight
            </div>
            <p className="text-sm font-medium">Strongest trend: <span className="text-gradient">Full-Stack + AI integration</span></p>
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
  const items = ["React", "Next.js", "OpenAI", "Python", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Docker", "GPT-4", "Zod", "Generative AI"];
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
      eyebrow="01 · About"
      title={<>A hiring manager's evaluation. <span className="text-muted-foreground">Not a résumé.</span></>}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Brain, h: "Solves problems, not tickets", p: "Most engineers wait for specs. Humera reverse-engineers the business goal — then designs the smallest system that wins. The Usmani billing engine wasn't asked for; it was proposed after spotting invoice errors." },
          { icon: Cpu, h: "AI + Full-Stack as one discipline", p: "Backend, frontend, prompt design, model orchestration — handled by the same brain. No coordination tax. No 'that's not my layer.'" },
          { icon: Briefcase, h: "Ships under real-world pressure", p: "Founder of ScrollCraft. Verified Upwork freelancer. Production code running today for paying clients. Execution > credentials." },
        ].map((c) => (
          <motion.div {...fadeUp} key={c.h} className="glow-border rounded-2xl p-6 space-y-3">
            <c.icon className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-semibold">{c.h}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.p}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-6">Career timeline</div>
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
      eyebrow="02 · Skills Intelligence"
      title={<>The full stack. <span className="text-gradient">Plus the intelligence layer.</span></>}
      kicker="AI-generated insights from a real freelance footprint."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILLS.map((s) => (
          <motion.div {...fadeUp} key={s.label} className="glow-border rounded-2xl p-6 group hover:translate-y-[-4px] transition-transform">
            <s.icon className="w-6 h-6 text-accent mb-4" />
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="text-2xl font-display font-semibold mt-1 mb-4">{s.items.length} stacks</div>
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
      eyebrow="03 · Selected Work"
      title={<>Each project a <span className="text-gradient">product page</span>, not a screenshot.</>}
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
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Problem</span>
                <p className="mt-1">{p.problem}</p>
              </div>
              <div>
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Solution</span>
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
      eyebrow="04 · Freelance Impact"
      title={<>Client trust, <span className="text-gradient">Upwork verified.</span></>}
      kicker="Real-world credibility from a verified freelance footprint — synthesized into a digestible profile."
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <motion.div {...fadeUp} className="glow-border rounded-2xl p-7 lg:col-span-2 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent">Upwork · Verified Profile</div>
              <h3 className="text-2xl font-display font-semibold mt-1">Humera S. — AI Automation & Full-Stack Developer</h3>
            </div>
            <a href="https://www.upwork.com/freelancers/~01abf633e12f90d800" target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-1 text-accent hover:underline">
              View profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <blockquote className="text-foreground/90 leading-relaxed border-l-2 border-accent pl-4 italic">
            "Most AI projects fail because they focus on the model… and not enough on the product. Having GPT-4 is not the hard part anymore — turning it into something useful, scalable, and actually usable in a real business is. That's where I come in."
          </blockquote>

          <div className="grid grid-cols-3 gap-4">
            {[
              { v: "$50/hr", l: "Hourly rate" },
              { v: "6", l: "Portfolio items" },
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
            { label: "Most worked domain", value: "AI + Web Automation" },
            { label: "Strongest skill trend", value: "Full-Stack + AI Integration" },
            { label: "Client sentiment", value: "Highly Positive" },
            { label: "Specialty signal", value: "GPT-powered SaaS" },
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
      eyebrow="05 · Services"
      title={<>Monetizable AI services. <span className="text-gradient">Outcomes, not hours.</span></>}
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
                Let's build <span className="text-gradient">intelligent systems</span> that scale.
              </h2>
              <p className="text-muted-foreground">Direct line. No discovery calls unless we both want one.</p>
              <div className="space-y-3 pt-2">
                <a href="mailto:hello@humerashaikh.dev" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" /> hello@humerashaikh.dev
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
              <Field name="req" label="What do you need built?" textarea placeholder="A GPT-powered onboarding flow, automated billing pipeline, an AI-native SaaS MVP..." />
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
        <div>© 2026 Humera Shaikh · Full Stack + AI Systems Architect</div>
        <div className="font-mono text-xs">Built with intelligence. Deployed with confidence.</div>
      </div>
    </footer>
  );
}
