<template>
  <div class="about">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <div
          class="hero-bg-photo"
          :style="{ opacity: heroBgOpacity, transform: 'translateY(' + heroBgTranslate + 'px)' }"
        ></div>
        <div class="hero-bg-overlay"></div>
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-dots"></div>
      </div>

      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            Open to opportunities
          </div>

          <h1 class="hero-name">
            <span class="hero-hi">Hey, I'm</span>
            Fábio Sousa
          </h1>

          <p class="hero-subtitle">Game Developer <span class="hero-amp">&amp;</span> AI Engineer</p>

          <p class="hero-bio">
            I build games and AI-powered tools — from one-button mobile puzzles to production micro-SaaS products.
            Currently working as Developer Relations Engineer at Heroic Labs, based in Lisbon.
          </p>

          <div class="hero-actions">
            <router-link to="/game-projects" class="btn btn-primary">
              View My Games <i class="fa fa-gamepad"></i>
            </router-link>
            <a href="d/CV_FabioSousa.pdf" target="_blank" class="btn btn-outline">
              Download CV <i class="fa fa-download"></i>
            </a>
          </div>

          <div class="hero-social">
            <a href="https://github.com/DannyIsYog" target="_blank" rel="noopener"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/f%C3%A1bio-sousa-8aa655196/" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a>
            <a href="https://dannyisyog.itch.io/" target="_blank" rel="noopener"><i class="fa fa-gamepad"></i></a>
            <a href="https://twitter.com/DannyIsYog" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
          </div>
        </div>

        <!-- Right visual -->
        <div class="hero-visual">
          <div class="hv-ring hv-ring-outer"></div>
          <div class="hv-ring hv-ring-inner"></div>
          <div class="hv-avatar">
            <img src="img/avatar.png" alt="Fábio Sousa" />
          </div>

          <!-- Floating stat cards -->
          <div class="hv-card hv-card-games">
            <i class="fa fa-gamepad hv-card-icon"></i>
            <div>
              <div class="hv-card-num">19+</div>
              <div class="hv-card-label">Games shipped</div>
            </div>
          </div>

          <div class="hv-card hv-card-os">
            <i class="fa fa-flag hv-card-icon"></i>
            <div>
              <div class="hv-card-num">Gamescom</div>
              <div class="hv-card-label">🇵🇹 Pavilion Organizer</div>
            </div>
          </div>

          <div class="hv-card hv-card-jams">
            <i class="fa fa-users hv-card-icon"></i>
            <div>
              <div class="hv-card-num">600k+</div>
              <div class="hv-card-label">Users reached</div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-scroll">
        <span>Scroll to explore</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- About section -->
    <section class="section-about container">
      <div class="about-grid">

        <!-- Featured project card -->
        <div class="about-featured" v-reveal v-if="mainFeatured" @click="openProject(mainFeatured)">
          <div class="af-label">
            <i class="fa fa-star"></i> Featured Project
          </div>
          <div class="af-image" :style="{ backgroundImage: 'url(' + mainFeatured.iconUrl + ')' }">
            <div class="af-image-overlay"></div>
          </div>
          <div class="af-body">
            <div class="af-tags">
              <span v-for="tag in mainFeatured.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <h3 class="af-title">{{ mainFeatured.name }}</h3>
            <p class="af-desc">RAG-powered documentation assistant — ingests Nakama docs into Pinecone, answers queries with Claude, and exposes everything as MCP tools.</p>
            <div class="af-cta">
              View project <i class="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div class="about-text">
          <div class="section-label" v-reveal>About me</div>
          <h2 class="about-heading" v-reveal data-delay="80">
            Turning ideas into interactive experiences
          </h2>
          <p v-reveal data-delay="140">
            I'm a Software Engineer, Game Developer, and AI builder. Since 2020 I've been part of
            <a href="https://gamedev.tecnico.ulisboa.pt/" target="_blank">GameDev Técnico</a>,
            where I shipped 19+ games across game jams and sponsored projects — including a sustainability education
            game deployed in Portuguese public schools.
          </p>
          <p v-reveal data-delay="180">
            I also work at the intersection of AI and developer tools: I've shipped production Claude-powered applications,
            an MCP server assessed for enterprise deployment, and a RAG documentation system — all while serving as
            Developer Relations Engineer at Heroic Labs.
          </p>

          <div class="about-stats" v-reveal data-delay="220">
            <div class="stat">
              <span class="stat-number">19+</span>
              <span class="stat-label">Games shipped</span>
            </div>
            <div class="stat">
              <span class="stat-number">4</span>
              <span class="stat-label">AI tools shipped</span>
            </div>
            <div class="stat">
              <span class="stat-number">40k€</span>
              <span class="stat-label">Funds raised</span>
            </div>
            <div class="stat">
              <span class="stat-number">600k+</span>
              <span class="stat-label">Users reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured work preview -->
    <section class="section-work">
      <div class="container">
        <div class="work-header">
          <div>
            <div class="section-label" v-reveal>Selected work</div>
            <h2 class="section-heading" v-reveal data-delay="60">Some of my games</h2>
          </div>
          <router-link to="/game-projects" class="btn btn-outline" v-reveal data-delay="120">
            View all <i class="fa fa-arrow-right"></i>
          </router-link>
        </div>

        <div class="work-grid">
          <div
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            class="work-card"
            @click="openProject(project)"
            v-reveal
            :data-delay="i * 80"
          >
            <div class="work-card-image" :style="{ backgroundImage: 'url(' + project.iconUrl + ')' }"></div>
            <div class="work-card-overlay"></div>
            <div class="work-card-footer" :style="{ background: 'linear-gradient(135deg, ' + project.accentColor + 'dd, ' + project.accentColor + '88)' }">
              <span class="work-card-title">{{ project.name }}</span>
              <div class="work-card-tags">
                <span v-for="tag in (project.tags || []).slice(0, 2)" :key="tag" class="card-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProjectDetailsOverlay
      v-on:close="showPopup = false"
      :visible="showPopup"
      :title="popupTitle"
      :htmlContent="popupContent"
      :color="popupColor"
      :iconUrl="popupIconUrl"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";
import otherProjectsData from "@/data/OtherProjectsData.ts";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "About",
  components: { ProjectDetailsOverlay },
  data() {
    return {
      projects: [...gameProjectsData, ...otherProjectsData],
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      popupIconUrl: "",
      heroBgOpacity: 1,
      heroBgTranslate: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onHeroScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onHeroScroll);
  },
  computed: {
    mainFeatured(): ProjectData | null {
      return (this.projects as ProjectData[]).find(p => p.isFeatured) || null;
    },
    featuredProjects(): ProjectData[] {
      return (this.projects as ProjectData[]).slice(0, 3);
    }
  },
  methods: {
    onHeroScroll() {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      this.heroBgOpacity = Math.max(0, 1 - scrollY / (heroHeight * 0.6));
      this.heroBgTranslate = scrollY * 0.35;
    },
    openProject(item: ProjectData) {
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.popupIconUrl = item.iconUrl;
      this.showPopup = true;
      window.scrollTo(0, 0);
    }
  }
});
</script>

<style scoped>
/* ---- Hero ---- */
.hero {
  position: relative;
  min-height: calc(100vh - var(--nav-h));
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 80px 24px 120px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-bg-photo {
  position: absolute;
  inset: -20% 0 0 0;
  background-image: url('/img/hero-bg.jpg');
  background-size: cover;
  background-position: center 30%;
  will-change: transform, opacity;
  pointer-events: none;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(7, 9, 15, 0.45) 0%,
    rgba(7, 9, 15, 0.72) 60%,
    rgba(7, 9, 15, 1) 100%
  );
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
  pointer-events: none;
}

.hero-glow-1 {
  width: 600px;
  height: 600px;
  background: rgba(129, 140, 248, 0.15);
  top: -100px;
  left: -100px;
  animation: float1 12s ease-in-out infinite;
}

.hero-glow-2 {
  width: 500px;
  height: 500px;
  background: rgba(34, 211, 238, 0.08);
  bottom: -80px;
  right: -80px;
  animation: float2 16s ease-in-out infinite;
}

.hero-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0);
  background-size: 40px 40px;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 30px) scale(0.95); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 20px) scale(0.95); }
  66% { transform: translate(20px, -30px) scale(1.05); }
}

/* Two-column hero inner */
.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

.hero-content {
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* ---- Hero visual (right side) ---- */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 340px;
  margin: 0 auto;
  animation: heroIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hv-avatar {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--border-accent);
  position: relative;
  z-index: 2;
  background: var(--bg-card);
}

.hv-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hv-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border-accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hv-ring-inner {
  width: 260px;
  height: 260px;
  opacity: 0.5;
  animation: spin 18s linear infinite;
  background: conic-gradient(from 0deg, transparent 85%, var(--accent) 100%);
}

.hv-ring-outer {
  width: 320px;
  height: 320px;
  opacity: 0.2;
  animation: spin 30s linear infinite reverse;
  background: conic-gradient(from 90deg, transparent 85%, var(--cyan) 100%);
}

@keyframes spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Floating stat cards */
.hv-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: rgba(13, 17, 23, 0.88);
  border: 1px solid var(--border-accent);
  backdrop-filter: blur(12px);
  z-index: 4;
  white-space: nowrap;
}

.hv-card-icon {
  font-size: 1.1rem;
  color: var(--accent);
  flex-shrink: 0;
}

.hv-card-num {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.1;
}

.hv-card-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  line-height: 1.2;
}

.hv-card-games {
  top: 10px;
  right: -10px;
  animation: floatCard1 6s ease-in-out infinite;
}

.hv-card-os {
  bottom: 30px;
  right: -20px;
  animation: floatCard2 7s ease-in-out infinite 1s;
}

.hv-card-jams {
  bottom: 10px;
  left: -10px;
  animation: floatCard3 5.5s ease-in-out infinite 0.5s;
}

@keyframes floatCard1 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes floatCard2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes floatCard3 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr auto;
    gap: 64px;
  }

  .hero-visual {
    width: 380px;
    height: 380px;
    margin: 0;
  }

  .hv-avatar {
    width: 250px;
    height: 250px;
  }

  .hv-ring-inner  { width: 295px; height: 295px; }
  .hv-ring-outer  { width: 360px; height: 360px; }
}

@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 99px;
  border: 1px solid var(--border-accent);
  background: var(--accent-dim);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 28px;
  letter-spacing: 0.02em;
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.hero-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.3); }
  50% { box-shadow: 0 0 0 5px rgba(74, 222, 128, 0.1); }
}

.hero-name {
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 20px;
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.hero-hi {
  display: block;
  font-size: 0.5em;
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: 0;
  margin-bottom: 4px;
}

.hero-subtitle {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 20px;
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hero-amp {
  color: var(--accent);
}

.hero-bio {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 500px;
  line-height: 1.7;
  margin-bottom: 36px;
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}

.hero-social {
  display: flex;
  gap: 16px;
  animation: heroIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
}

.hero-social a {
  color: var(--text-muted);
  font-size: 1.2rem;
  opacity: 1;
  transition: color 0.2s ease, transform 0.2s ease;
}

.hero-social a:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-faint);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: heroIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--border-accent), transparent);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(1.1); }
}

/* ---- About section ---- */
.section-about {
  padding: 100px 24px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: start;
}

/* ---- Featured project card (left column) ---- */
.about-featured {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-card);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  position: sticky;
  top: calc(var(--nav-h) + 24px);
}

.about-featured:hover {
  border-color: var(--border-accent);
  box-shadow: 0 20px 60px -12px var(--accent-glow);
  transform: translateY(-3px);
}

.af-label {
  padding: 12px 16px;
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 6px;
}

.af-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;
}

.about-featured:hover .af-image {
  transform: scale(1.03);
}

.af-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(17, 24, 39, 0.7) 0%, transparent 60%);
}

.af-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.af-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.af-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.af-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.af-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  margin-top: 4px;
  transition: gap 0.2s ease;
}

.about-featured:hover .af-cta {
  gap: 10px;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-heading {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.about-text p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.75;
  margin: 0;
}

.about-text a {
  color: var(--accent);
}

.about-stats {
  display: flex;
  gap: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  margin-top: 8px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ---- Work section ---- */
.section-work {
  padding: 0 0 80px;
  background: linear-gradient(to bottom, transparent, var(--bg-surface) 30%, var(--bg-surface) 70%, transparent);
}

.section-work .container {
  padding-top: 64px;
  padding-bottom: 64px;
}

.work-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.section-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 8px;
}

.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.work-card {
  height: 260px;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--border);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.work-card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 20px 60px -10px rgba(0,0,0,0.6);
  transform: translateY(-4px);
}

.work-card-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.work-card:hover .work-card-image {
  transform: scale(1.05);
}

.work-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(7,9,15,0.7) 0%, transparent 60%);
}

.work-card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.work-card-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 0.95rem;
}

.work-card-tags {
  display: flex;
  gap: 6px;
}

.card-tag {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 99px;
  background: rgba(0,0,0,0.35);
  color: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.15);
}

@media (min-width: 640px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 860px) {
  .about-grid {
    grid-template-columns: 340px 1fr;
    gap: 56px;
  }
}

@media (min-width: 960px) {
  .work-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
