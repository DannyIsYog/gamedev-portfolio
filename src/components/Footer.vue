<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-name">Fábio Sousa</span>
        <span class="footer-tagline">Game Designer &amp; Programmer</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/DannyIsYog" target="_blank" rel="noopener"><i class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/f%C3%A1bio-sousa-8aa655196/" target="_blank" rel="noopener"><i class="fa fa-linkedin"></i></a>
        <a href="https://dannyisyog.itch.io/" target="_blank" rel="noopener"><i class="fa fa-gamepad"></i></a>
        <a href="https://twitter.com/DannyIsYog" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
      </div>
      <div class="footer-right">
        <a href="mailto:fabio.sousa@tecnico.ulisboa.pt">fabio.sousa@tecnico.ulisboa.pt</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Built with Vue.js</span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "Footer" });
</script>

<style scoped lang="less">
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg-surface);
  margin-top: 80px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
}

.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 1.15rem;
  transition: color 0.2s ease;
  opacity: 1;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-right a {
  font-size: 0.85rem;
  color: var(--text-muted);
  opacity: 1;
}

.footer-right a:hover {
  color: var(--accent);
}

.footer-bottom {
  text-align: center;
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  font-size: 0.75rem;
  color: var(--text-faint);
}
</style>
