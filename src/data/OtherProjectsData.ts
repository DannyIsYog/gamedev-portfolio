import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("lgtmpro", "LGTM Pro", "img/projects/lgtmpro.png", `
    <div class="paragraph">
        <strong>LGTM Pro</strong> is a production micro-SaaS — a GitHub App that generates AI-powered code reviews
        using Claude, with 8 distinct personas including approval modes, PR summaries, risk reports, and changelogs.
    </div>
    <div class="paragraph center">
        <a href="https://lgtmpro.com" target="_blank" class="btn btn-primary" style="display:inline-block;padding:10px 20px;background:var(--accent);color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Visit lgtmpro.com</a>
    </div>
    <div class="paragraph">
        Architecture highlights:
        <ul>
            <li>Hono webhook handler on Railway processing GitHub events in &lt;2s</li>
            <li>Next.js 16 dashboard on Vercel with GitHub OAuth (NextAuth v5)</li>
            <li>Stripe Billing with full subscription lifecycle management</li>
            <li>PostgreSQL (Neon) with Drizzle ORM</li>
            <li>HMAC-SHA256 webhook validation, atomic quota management, idempotency protection, graceful degradation</li>
            <li>730+ lines of unit/integration tests (Vitest)</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/lgtmpro.png" alt="LGTM Pro Screenshot" />
    </div>
    `, "#1a1a2e", false, false, false, ["TypeScript", "Next.js", "Claude API", "Stripe", "SaaS"]),

    new ProjectData("nakama-mcp", "Nakama MCP Server", "img/projects/nakama-mcp.png", `
    <div class="paragraph">
        <strong>Nakama MCP Server</strong> exposes 11+ tools across player accounts, matches, leaderboards,
        storage, groups, RPCs, and server status — enabling AI assistants like Claude and Cursor to manage
        a live game backend through natural language.
    </div>
    <div class="paragraph center">
        <a href="https://github.com/DannyIsYog/nakama-mcp-server" target="_blank"><img src="img/projects/github.png" alt="GitHub" /></a>
    </div>
    <div class="paragraph">
        Highlights:
        <ul>
            <li>Built in Go using the MCP protocol and Nakama REST API</li>
            <li>Self-initiated; demonstrated to Heroic Labs leadership as a strategic competitive differentiator</li>
            <li>Currently being assessed for official customer deployment</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/nakama-mcp.png" alt="Nakama MCP Server Screenshot" />
    </div>
    `, "#22272e", false, false, false, ["Go", "MCP Protocol", "AI Tooling", "Heroic Labs"]),

    new ProjectData("haru", "Haru — RAG Docs Assistant", "img/projects/haru.png", `
    <div class="paragraph">
        <strong>Haru</strong> is a RAG-powered documentation assistant built for the Heroic Labs support team.
        It ingests Nakama documentation from GitHub, embeds with Voyage AI, and stores in Pinecone for fast,
        grounded retrieval — also exposed as MCP tools for Claude Desktop and Cursor.
    </div>
    <div class="paragraph">
        Features:
        <ul>
            <li>End-to-end RAG pipeline: markdown ingestion, heading-based chunking, Voyage AI embeddings (voyage-code-3), Pinecone upserts with runtime/engine metadata</li>
            <li>Real-time FastAPI query endpoint with optional runtime (Go/TS/Lua) and engine (Unity/Unreal/Godot) filtering</li>
            <li>Claude rewrites the question before retrieval and generates grounded answers with source links</li>
            <li>Incremental indexing (MD5-based manifest) and automatic gap logging for documentation roadmap priorities</li>
            <li>Single-file HTML/CSS/JS UI for internal use</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/haru.png" alt="Haru RAG System Screenshot" />
    </div>
    `, "#0d1117", false, false, true, ["Python", "RAG", "Claude API", "Pinecone", "FastAPI", "MCP"]),

    new ProjectData("game-design-agent", "Game Design AI Agent", "img/projects/game-design-agent.gif", `
    <div class="paragraph">
        <strong>Game Design AI Agent</strong> is a CLI-based agentic assistant for game mechanics analysis,
        using the Claude API with custom tool use over a structured knowledge base of game design patterns.
    </div>
    <div class="paragraph center">
        <a href="https://github.com/DannyIsYog/game-design-ai-agent" target="_blank"><img src="img/projects/github.png" alt="GitHub" /></a>
    </div>
    <div class="paragraph">
        Features:
        <ul>
            <li>3 custom tools: <code>search_mechanics</code>, <code>get_design_pattern</code>, <code>analyze_balance</code></li>
            <li>Agentic loop architecture with context engineering and structured prompting</li>
            <li>Output reliability testing — techniques directly from Anthropic Academy coursework</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/game-design-agent.gif" alt="Game Design AI Agent Demo" />
    </div>
    `, "#1a1a1a", false, false, false, ["Python", "Claude API", "Agentic AI", "Tool Use"]),

    new ProjectData("vibe-checker", "flake8-vibes", "img/projects/vibe-checker.gif", `
    <div class="paragraph">
        <strong>flake8-vibes</strong> is a Flake8 plugin for the emotional and spiritual correctness of your Python code.
        Unlike traditional linters that concern themselves with correctness or performance, it focuses on what really matters:
        whether your code is okay — energetically speaking.
    </div>
    <div class="paragraph center">
        <a href="https://github.com/DannyIsYog/vibe-checker" target="_blank"><img src="img/projects/github.png" alt="GitHub" /></a>
    </div>
    <div class="paragraph">
        Features:
        <ul>
            <li><strong>87 rules across 17 categories</strong> — naming crimes, boolean chaos, exception dishonesty, complexity, hardcoding, temporal risk, and more</li>
            <li>Git-aware: <code>git blame</code> tells VIB001 exactly who wrote that function on a Thursday</li>
            <li><code>vibe-check</code> CLI with per-file scores, verdicts, and a final reckoning</li>
            <li>Standard Flake8 integration — <code>flake8 --select=VIB</code> works with existing config and CI</li>
            <li>VS Code extension with inline squiggles and judgment without leaving the editor</li>
            <li>Pre-commit hook — the vibe score lives in your git history, forever</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/vibe-checker.gif" alt="vibe-check CLI demo" />
        <img class="pc-screenshot" src="img/projects/vibe-checker-vscode.gif" alt="VS Code extension demo" />
    </div>
    `, "#16a34a", false, false, false, ["Python", "Flake8", "Developer Tools", "Open Source"]),

    new ProjectData("elmo", "ELMO", "img/projects/elmo.png", `
    <div class="paragraph">
        <strong>ELMO</strong> is a social robot that plays a cooperative card game across multiple tablets —
        designed and programmed as my Master's thesis at Instituto Superior Técnico.
    </div>
    <div class="paragraph">
        Focus areas:
        <ul>
            <li>Human-Robot Interaction (HRI)</li>
            <li>UI/UX design for multi-device cooperative experiences</li>
            <li>Accessibility research and evaluation</li>
            <li>Structured user research and iterative testing</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/elmo.png" alt="ELMO Robot Screenshot" />
    </div>
    `, "#2d3748", false, false, false, ["HRI", "Research", "UI/UX", "Thesis"]),
];
