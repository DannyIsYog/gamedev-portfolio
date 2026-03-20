<template>
  <header class="header" :class="{ 'scrolled': scrolled }">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <span class="logo-name">Fábio Sousa</span>
        <span class="logo-dot"></span>
      </router-link>

      <nav class="nav" :class="{ 'open': menuOpen }">
        <router-link to="/" exact @click.native="close">About</router-link>
        <router-link to="/game-projects" @click.native="close">Game Projects</router-link>
        <router-link to="/other-projects" @click.native="close">Other Projects</router-link>
        <router-link to="/blog" @click.native="close">Blog</router-link>
        <router-link to="/resume" @click.native="close">Resume</router-link>
        <router-link to="/contact" @click.native="close" class="nav-contact">Contact</router-link>
      </nav>

      <button class="hamburger" :class="{ 'active': menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      scrolled: false,
      menuOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 20;
    },
    close() {
      this.menuOpen = false;
    }
  }
});
</script>

<style scoped lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  background: rgba(7, 9, 15, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.header.scrolled {
  background: rgba(7, 9, 15, 0.92);
  border-bottom-color: var(--border);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  opacity: 1;
  flex-shrink: 0;
}

.logo-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text);
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.logo:hover .logo-name {
  color: var(--accent);
}

.logo-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

/* Nav */
.nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav a {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
  opacity: 1;
  text-decoration: none;
}

.nav a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  opacity: 1;
}

.nav a.router-link-active,
.nav a.router-link-exact-active {
  color: var(--accent);
  background: var(--accent-dim);
}

.nav-contact {
  background: var(--accent-dim) !important;
  color: var(--accent) !important;
  border: 1px solid var(--border-accent) !important;
  margin-left: 8px;
}

.nav-contact:hover {
  background: var(--accent) !important;
  color: #fff !important;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius-sm);
  transition: background 0.2s ease;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.06);
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    background: rgba(7, 9, 15, 0.98);
    backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    gap: 4px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav a {
    padding: 12px 16px;
    font-size: 1rem;
  }

  .nav-contact {
    margin-left: 0 !important;
    margin-top: 8px;
    text-align: center;
  }
}
</style>
