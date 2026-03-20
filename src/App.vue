<template>
  <div id="app">
    <Header />
    <main class="main">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});
</script>

<style lang="less">
@import './css/projects.less';
@import './css/variables.less';

:root {
  --bg-base:       #07090f;
  --bg-surface:    #0a1018;
  --bg-card:       #0d1525;
  --bg-card-hover: #132040;
  --accent:        #3d8be8;
  --accent-dim:    rgba(61, 139, 232, 0.10);
  --accent-glow:   rgba(61, 139, 232, 0.24);
  --text:          #e2e8f0;
  --text-muted:    #7a95b8;
  --text-faint:    #2d4060;
  --border:        rgba(255, 255, 255, 0.05);
  --border-accent: rgba(61, 139, 232, 0.22);
  --nav-h:         72px;
  --radius:        12px;
  --radius-sm:     8px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-base);
  scroll-behavior: smooth;
}

#app {
  background-color: var(--bg-base);
  color: var(--text);
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  line-height: 1.7;
  min-height: 100vh;
}

h1, h2, h3, h4, h5 {
  font-family: 'Space Grotesk', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  line-height: 1.15;
  color: var(--text);
  margin: 0;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

a:hover {
  opacity: 0.8;
}

.main {
  padding-top: var(--nav-h);
  min-height: calc(100vh - var(--nav-h));
}

/* ---- Shared containers ---- */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.page-header {
  padding: 72px 24px 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 560px;
}

/* ---- Buttons ---- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
  outline: none;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: #5ea8f5;
  opacity: 1;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px var(--accent-glow);
}

.btn-outline {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-accent);
}

.btn-outline:hover {
  background: var(--accent-dim);
  border-color: var(--accent);
  opacity: 1;
  transform: translateY(-1px);
}

/* ---- Tag chips ---- */
.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid var(--border-accent);
  letter-spacing: 0.02em;
}

/* ---- Section labels ---- */
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 16px;
}

/* ---- Divider ---- */
.divider {
  height: 1px;
  background: var(--border);
  margin: 0;
}

/* ---- Page transitions ---- */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
