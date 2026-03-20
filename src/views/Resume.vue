<template>
  <div class="resume">
    <div class="page-header">
      <div class="section-label" v-reveal>Background</div>
      <h1 class="page-title" v-reveal data-delay="60">Resume</h1>
      <p class="page-subtitle" v-reveal data-delay="120">
        My experience, education, and skills.
      </p>
      <div v-reveal data-delay="180" style="margin-top: 20px;">
        <a class="btn btn-primary" href="d/CV_FabioSousa.pdf" target="_blank">
          <i class="fa fa-download"></i> Download CV
        </a>
      </div>
    </div>

    <div class="resume-layout container">
      <!-- Left column -->
      <div class="resume-main">

        <section class="resume-section" v-reveal>
          <h2 class="resume-section-title"><i class="fa fa-graduation-cap"></i> Education</h2>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">MSc Telecommunications &amp; Informatics Engineering</h3>
              <div class="timeline-org"><a href="https://tecnico.ulisboa.pt/pt/" target="_blank">Instituto Superior Técnico, University of Lisbon</a></div>
              <div class="timeline-date">September 2021 — November 2023</div>
              <p class="timeline-desc">Focus: Distributed Systems, Cybersecurity. Electives: Game Design, Deep Learning.</p>
              <p class="timeline-desc">Thesis: Designed and programmed <strong>ELMO</strong> — a social robot playing a cooperative card game across multiple tablets, combining Human-Robot Interaction, UI/UX Design, accessibility, and user research.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">BSc Telecommunications &amp; Informatics Engineering</h3>
              <div class="timeline-org"><a href="https://tecnico.ulisboa.pt/pt/" target="_blank">Instituto Superior Técnico, University of Lisbon</a></div>
              <div class="timeline-date">September 2018 — July 2021</div>
              <p class="timeline-desc">Active involvement in extracurriculars, hackathons, game jams, and voluntary work.</p>
            </div>
          </div>
        </section>

        <section class="resume-section" v-reveal>
          <h2 class="resume-section-title"><i class="fa fa-briefcase"></i> Experience</h2>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Developer Relations Engineer</h3>
              <div class="timeline-org"><a href="https://heroiclabs.com/" target="_blank">Heroic Labs</a> — Remote, based at Unicorn Factory, Lisbon</div>
              <div class="timeline-date">June 2024 — Present</div>
              <ul class="timeline-list">
                <li>Restructured technical documentation for Nakama, Hiro, and Satori using the Diátaxis framework, improving content architecture for thousands of game studios globally — including full docs and development for the Godot SDK.</li>
                <li>Authored the complete Heroic Cloud documentation suite from scratch after immersing in the platform, segmenting six distinct user types, and mining support tickets for non-obvious pain points.</li>
                <li>Designed and built developer-facing tools and utilities that reduced onboarding friction and shortened time-to-integration for new studios adopting Nakama.</li>
                <li>Represented Heroic Labs at Gamescom 2024 and DevGAMM, running live technical demos and developer sessions with prospective studio customers.</li>
                <li>Built a Nakama MCP Server in Go enabling AI assistants to interact with live backends via natural language — self-initiated, demonstrated to leadership, currently assessed for official customer deployment.</li>
                <li>Designed and built Haru, a RAG-powered documentation assistant using Pinecone + Voyage AI + Claude API, exposed as an MCP server for Claude Desktop and Cursor.</li>
              </ul>
              <div class="timeline-stack">
                <span class="tag">Go</span>
                <span class="tag">Python</span>
                <span class="tag">Claude API</span>
                <span class="tag">MCP</span>
                <span class="tag">RAG</span>
                <span class="tag">Diátaxis</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">President &amp; Lead Developer</h3>
              <div class="timeline-org"><a href="https://gamedev.tecnico.ulisboa.pt/" target="_blank">GameDev Técnico</a> — Student Association, IST</div>
              <div class="timeline-date">September 2020 — September 2024</div>
              <ul class="timeline-list">
                <li>Founded Portugal's most active university game development community from zero — grew to 20+ active members, established governance, mentorship programs, and secured €40,000+ through grants and institutional partnerships.</li>
                <li>Organised and delivered 15+ developer events (game jams, workshops, knowledge-sharing sessions).</li>
                <li>Mentored 20+ junior developers through hands-on project work, code review, and technical guidance.</li>
                <li>Core contributor to CUBOS., an MIT-licensed open-source voxel engine in C++20 (100+ stars, 42 forks): designed and implemented the Input System and Entity-Component System (ECS).</li>
                <li>Developed and published Quinta do Vale for the Portuguese Government — a sustainability education mobile game deployed in Portuguese public schools, projected to reach 600k+ users by 2026.</li>
                <li>Personally shipped 19+ games across game jams and independent projects on itch.io.</li>
              </ul>
              <div class="timeline-stack">
                <span class="tag">Unity</span>
                <span class="tag">Godot</span>
                <span class="tag">C#</span>
                <span class="tag">C++</span>
                <span class="tag">GDScript</span>
                <span class="tag">Mirror Networking</span>
              </div>
            </div>
          </div>
        </section>

        <section class="resume-section" v-reveal>
          <h2 class="resume-section-title"><i class="fa fa-users"></i> Organizations</h2>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Head of Partnerships — APVP</h3>
              <div class="timeline-org">Portuguese Game Dev Association (Part-time)</div>
              <div class="timeline-date">February 2024 — Present</div>
              <ul class="timeline-list">
                <li>Organised the first Portuguese Pavilion in the B2B area at Gamescom 2024, coordinating 10+ studios and institutional partners across logistics, branding, and event scheduling.</li>
                <li>Manage internationalisation strategy and coordinate member participation in global events (Gamescom, DevGAMM, GDC).</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Vice President — NEETI</h3>
              <div class="timeline-date">March 2019 — September 2023</div>
              <ul class="timeline-list">
                <li>Tutored 1st year students for programming courses.</li>
                <li>Organised workshops in a variety of topics.</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Web Developer — IEEE-IST Student Branch</h3>
              <div class="timeline-date">November 2018 — September 2021</div>
              <ul class="timeline-list">
                <li>Developed and published a website using Django and Flask.</li>
                <li>Wrote tutorials on robot development with Raspberry Pi.</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Logistics — Lisbon Games Week</h3>
              <div class="timeline-date">2018 — 2020</div>
              <p class="timeline-desc">Biggest videogame event in Portugal.</p>
            </div>
          </div>
        </section>

        <section class="resume-section" v-reveal>
          <h2 class="resume-section-title"><i class="fa fa-trophy"></i> Events &amp; Recognition</h2>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Spotlight Awards 2025 — Person of the Year Finalist</h3>
              <div class="timeline-date">2025</div>
              <p class="timeline-desc">Top 4 nominees at Portugal's premier game industry recognition awards by Game Dev Lisbon.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Gamescom 2024</h3>
              <div class="timeline-date">2024</div>
              <p class="timeline-desc">Organised the Portuguese Pavilion (B2B); ran Heroic Labs live technical demos and developer sessions with prospective studio customers.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">DevGAMM Lisbon 2023</h3>
              <div class="timeline-date">2023</div>
              <p class="timeline-desc">Showcased CUBOS. open-source voxel engine to industry professionals.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-body">
              <h3 class="timeline-title">Best Game Award — Global Game Jam 2023</h3>
              <div class="timeline-date">2023</div>
              <p class="timeline-desc">Judged by Funcom representatives at the Técnico/Belas-Artes site.</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Right column: skills -->
      <aside class="resume-aside">
        <section class="skill-section" v-reveal>
          <h2 class="resume-section-title">Programming</h2>
          <div class="skill-group">
            <SkillRate name="Python" />
            <SkillRate name="C#" />
            <SkillRate name="C++" />
            <SkillRate name="TypeScript" />
            <SkillRate name="Go" />
            <SkillRate name="GDScript" />
            <SkillRate name="SQL" />
            <SkillRate name="C" />
            <SkillRate name="Bash" />
          </div>
        </section>

        <section class="skill-section" v-reveal data-delay="60">
          <h2 class="resume-section-title">AI &amp; Agentic</h2>
          <div class="skill-group">
            <SkillRate name="Claude API" />
            <SkillRate name="MCP Protocol" />
            <SkillRate name="RAG Pipelines" />
            <SkillRate name="Prompt Engineering" />
            <SkillRate name="Pinecone" />
            <SkillRate name="Voyage AI" />
          </div>
        </section>

        <section class="skill-section" v-reveal data-delay="80">
          <h2 class="resume-section-title">Game Dev</h2>
          <div class="skill-group">
            <SkillRate name="Unity" />
            <SkillRate name="Godot" />
            <SkillRate name="Unreal Engine 5" />
            <SkillRate name="Mirror Networking" />
            <SkillRate name="Photon Networking" />
            <SkillRate name="Aseprite" />
            <SkillRate name="PyGame" />
          </div>
        </section>

        <section class="skill-section" v-reveal data-delay="120">
          <h2 class="resume-section-title">Web &amp; SaaS</h2>
          <div class="skill-group">
            <SkillRate name="Next.js" />
            <SkillRate name="FastAPI" />
            <SkillRate name="Hono" />
            <SkillRate name="Stripe" />
            <SkillRate name="PostgreSQL" />
            <SkillRate name="Docker" />
          </div>
        </section>

        <section class="skill-section" v-reveal data-delay="140">
          <h2 class="resume-section-title">Tools &amp; Platforms</h2>
          <div class="skill-group">
            <SkillRate name="AWS" />
            <SkillRate name="Vercel" />
            <SkillRate name="Railway" />
            <SkillRate name="Terraform" />
            <SkillRate name="Ansible" />
            <SkillRate name="gRPC" />
          </div>
        </section>

        <section class="skill-section" v-reveal data-delay="160">
          <h2 class="resume-section-title">Languages</h2>
          <div class="interests">
            <div class="interest-item">
              <span class="interest-icon">🇵🇹</span>
              <span>Portuguese — Native</span>
            </div>
            <div class="interest-item">
              <span class="interest-icon">🇬🇧</span>
              <span>English — Fluent</span>
            </div>
            <div class="interest-item">
              <span class="interest-icon">🇯🇵</span>
              <span>Japanese — Beginner</span>
            </div>
          </div>
        </section>

        <section class="skill-section" v-reveal data-delay="200">
          <h2 class="resume-section-title">Interests</h2>
          <div class="interests">
            <div class="interest-item">
              <span class="interest-icon">🧮</span>
              <span>Mathematics</span>
            </div>
            <div class="interest-item">
              <span class="interest-icon">🌌</span>
              <span>Astronomy</span>
            </div>
            <div class="interest-item">
              <span class="interest-icon">🍽️</span>
              <span>Food &amp; Cuisine</span>
            </div>
            <div class="interest-item">
              <span class="interest-icon">📜</span>
              <span>Poetry</span>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";
export default Vue.extend({
  name: "Resume",
  components: { SkillRate }
});
</script>

<style scoped>
.resume {
  padding-bottom: 80px;
}

.resume-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  padding-bottom: 40px;
}

/* Section titles */
.resume-section-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.resume-section-title i {
  color: var(--accent);
}

.resume-section {
  margin-bottom: 48px;
}

/* Timeline */
.timeline-item {
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 0 20px;
  margin-bottom: 32px;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: -32px;
  width: 1px;
  background: var(--border);
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  background: var(--bg-base);
  margin-top: 3px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline-body {
  padding-bottom: 8px;
}

.timeline-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.timeline-org {
  margin-bottom: 4px;
}

.timeline-org a {
  color: var(--accent);
  font-size: 0.875rem;
}

.timeline-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 12px;
  font-style: italic;
}

.timeline-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0 0 12px;
  line-height: 1.65;
}

.timeline-list {
  margin: 0 0 12px;
  padding-left: 20px;
}

.timeline-list li {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin: 6px 0;
  line-height: 1.6;
}

.timeline-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

/* Skills aside */
.skill-section {
  margin-bottom: 36px;
}

.skill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}

/* Interests */
.interests {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.interest-icon {
  font-size: 1.1rem;
}

@media (min-width: 960px) {
  .resume-layout {
    grid-template-columns: 1fr 300px;
    align-items: start;
  }
}
</style>
