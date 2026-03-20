<template>
  <div class="contact">
    <div class="page-header">
      <div class="section-label" v-reveal>Get in touch</div>
      <h1 class="page-title" v-reveal data-delay="60">Let's talk</h1>
      <p class="page-subtitle" v-reveal data-delay="120">
        Open to game design and programming opportunities.
        Also happy to chat about games, math, or astronomy.
      </p>
    </div>

    <div class="container">
      <div class="contact-grid">
        <div class="contact-links" v-reveal data-delay="80">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :target="link.href.startsWith('http') ? '_blank' : undefined"
            rel="noopener"
            class="contact-card"
          >
            <div class="contact-icon" :style="{ background: link.color + '22', color: link.color, borderColor: link.color + '44' }">
              <i :class="'fa fa-' + link.icon + ' fa-lg'"></i>
            </div>
            <div class="contact-info">
              <div class="contact-label">{{ link.label }}</div>
              <div class="contact-value">{{ link.value }}</div>
            </div>
            <i class="fa fa-external-link contact-arrow"></i>
          </a>
        </div>

        <div class="contact-cta" v-reveal data-delay="160">
          <div class="cta-box">
            <div class="cta-icon">
              <i class="fa fa-envelope-o"></i>
            </div>
            <h2 class="cta-title">Looking for a game developer?</h2>
            <p class="cta-desc">
              I'm actively seeking opportunities as a Game Designer or Game Programmer.
              Whether it's a full-time role, contract, or game jam collaboration — let's build something fun.
            </p>
            <a href="mailto:fabio.sousa@tecnico.ulisboa.pt" class="btn btn-primary">
              Send me an email <i class="fa fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Contact",
  data() {
    return {
      links: [
        { label: "Email", value: "fabio.sousa@tecnico.ulisboa.pt", href: "mailto:fabio.sousa@tecnico.ulisboa.pt", icon: "envelope-o", color: "#3d8be8" },
        { label: "GitHub", value: "github.com/DannyIsYog", href: "https://github.com/DannyIsYog", icon: "github", color: "#e2e8f0" },
        { label: "LinkedIn", value: "linkedin.com/in/fabio-sousa", href: "https://www.linkedin.com/in/f%C3%A1bio-sousa-8aa655196/", icon: "linkedin", color: "#0a66c2" },
        { label: "Itch.io", value: "dannyisyog.itch.io", href: "https://dannyisyog.itch.io/", icon: "gamepad", color: "#fa5c5c" },
        { label: "Twitter", value: "twitter.com/DannyIsYog", href: "https://twitter.com/DannyIsYog", icon: "twitter", color: "#1d9bf0" },
      ]
    };
  }
});
</script>

<style scoped>
.contact {
  padding-bottom: 80px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-card);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  opacity: 1;
  text-decoration: none;
  color: var(--text);
}

.contact-card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 8px 32px -8px rgba(0,0,0,0.4);
  transform: translateY(-2px);
  opacity: 1;
}

.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.1rem;
}

.contact-info {
  flex: 1;
  min-width: 0;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-value {
  font-size: 0.9rem;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-arrow {
  color: var(--text-faint);
  font-size: 0.85rem;
  flex-shrink: 0;
}

/* CTA box */
.cta-box {
  padding: 40px;
  border-radius: var(--radius);
  border: 1px solid var(--border-accent);
  background: linear-gradient(135deg, var(--accent-dim) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cta-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius);
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: var(--accent);
}

.cta-title {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.cta-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
}

@media (min-width: 960px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
</style>
