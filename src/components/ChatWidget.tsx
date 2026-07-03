import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Bot, Send, Sparkles, X } from "lucide-react";

const SUGGESTIONS = [
  "What's Humera's engineering experience?",
  "Show me her production AI work",
  "Can she engineer a RAG-powered chatbot?",
  "How do I hire her?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open, messages.length]);

  const submit = async (text: string) => {
    const value = text.trim();
    if (!value || isLoading) return;
    setInput("");
    await sendMessage({ text: value });
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open AI assistant"
      >
        <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl group-hover:bg-primary/60 transition-colors" />
        <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-br from-electric to-neon px-5 py-3.5 text-primary-foreground font-medium shadow-glow">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Ask HUMERA-AI</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[min(420px,calc(100vw-2rem))] h-[min(620px,calc(100vh-8rem))] flex flex-col glass rounded-2xl overflow-hidden shadow-glow"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/60 bg-gradient-to-r from-electric/10 to-neon/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-electric to-neon flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-neon ring-2 ring-card animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold">HUMERA-AI</p>
                  <p className="text-xs text-muted-foreground">Virtual HR concierge · Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-sm text-foreground/90 leading-relaxed">
                    👋 Hi, I'm <span className="text-gradient font-semibold">HUMERA-AI</span> — I can answer anything about Humera's experience, projects, freelance work, and how to hire her.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => submit(s)}
                        className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/50 hover:border-primary/50 hover:bg-secondary transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("");
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={
                        isUser
                          ? "max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-primary text-primary-foreground text-sm"
                          : "max-w-[90%] text-sm text-foreground/95 leading-relaxed prose prose-sm prose-invert prose-p:my-2 prose-headings:text-foreground prose-strong:text-foreground prose-a:text-accent"
                      }
                    >
                      {isUser ? text : <ReactMarkdown>{text}</ReactMarkdown>}
                    </div>
                  </div>
                );
              })}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="shimmer-text font-medium">HUMERA-AI is thinking</span>
                  <span className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-neon animate-bounce" />
                    <span className="w-1 h-1 rounded-full bg-neon animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1 h-1 rounded-full bg-neon animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="border-t border-border/60 p-3 bg-card/60"
            >
              <div className="flex items-end gap-2 rounded-xl bg-input/60 border border-border focus-within:border-primary/60 transition-colors p-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submit(input);
                    }
                  }}
                  rows={1}
                  placeholder="Ask about experience, projects, hiring..."
                  className="flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground/70 max-h-24 px-1 py-1.5"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-electric to-neon text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:scale-105 active:scale-95 transition-transform"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
