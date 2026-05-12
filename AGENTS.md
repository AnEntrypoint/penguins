# penguins — Agent Guide

Data-only project (18 species, 60+ facts). No code, no LLM resolution. If you ever wire LLM calls into tooling around this repo (e.g., a chat-with-the-data agent), **delegate to `acptoapi` (npm, ≥1.0.62) — do not reimplement** chain fallback, sampler backoff, queue resolution, or matrix-aware scoring. Public surface in `node_modules/acptoapi/AGENTS.md` "Public API — unified chain SDK". freddie demonstrates the consumption pattern (`src/agent/llm_resolver.js` — 61-line thin shim over `acptoapi.chat`).
