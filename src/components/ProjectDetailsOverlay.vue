<template>
  <div class="overlay-root">
    <transition name="modal">
      <div v-if="visible" class="modal-wrap">
        <div class="modal-backdrop" @click="$emit('close')"></div>
        <div class="modal-dialog">
          <div class="modal-header" :style="{ backgroundImage: iconUrl ? 'url(' + iconUrl + ')' : 'none', backgroundColor: color }">
            <div class="modal-header-overlay" :style="{ background: 'linear-gradient(to top, ' + color + 'ff 0%, ' + color + '88 50%, transparent 100%)' }"></div>
            <h2 class="modal-title">{{ title }}</h2>
            <button class="modal-close" @click="$emit('close')" aria-label="Close">
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-content" v-html="htmlContent" @click="onContentClick"></div>
            <div class="modal-actions">
              <button class="btn btn-outline" @click="$emit('close')">
                <i class="fa fa-chevron-left"></i> Back to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="lightbox">
      <div v-if="lightboxSrc" class="lightbox" @click="lightboxSrc = ''">
        <img :src="lightboxSrc" class="lightbox-img" alt="Full size" @click.stop />
        <button class="lightbox-close" @click="lightboxSrc = ''" aria-label="Close">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
    iconUrl: { type: String, default: "" },
  },
  data() {
    return { lightboxSrc: "" };
  },
  watch: {
    visible(val: boolean) {
      if (!val) this.lightboxSrc = "";
    }
  },
  methods: {
    onContentClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" && !target.getAttribute("src")?.includes("badge-color") && !target.getAttribute("src")?.includes("github.png")) {
        this.lightboxSrc = (target as HTMLImageElement).src;
      }
    }
  }
});
</script>

<style scoped>
.overlay-root {
  display: contents;
}

.modal-wrap {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 16px 40px;
  overflow-y: auto;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
}

.modal-dialog {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8);
}

.modal-header {
  padding: 28px 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  min-height: 200px;
  background-size: cover;
  background-position: center;
}

.modal-header-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.modal-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
}

.modal-close {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  position: relative;
  z-index: 1;
  align-self: flex-start;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.modal-body {
  padding: 0;
  background: var(--bg-surface);
}

.modal-content {
  padding: 32px;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.modal-actions {
  padding: 0 32px 28px;
  display: flex;
  justify-content: flex-start;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal-dialog,
.modal-leave-active .modal-dialog {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-dialog {
  transform: translateY(20px) scale(0.97);
  opacity: 0;
}

.modal-leave-active .modal-dialog {
  transform: translateY(10px);
  opacity: 0;
}
</style>

<style>
/* Global styles for v-html modal content */
.modal-content .paragraph {
  margin: 16px 0;
}

.modal-content .center {
  text-align: center;
}

.modal-content iframe.youtube {
  width: 100%;
  min-height: 300px;
  border-radius: 8px;
}

.modal-content .phone-screenshot {
  width: 100%;
  border-radius: 8px;
}

.modal-content .pc-screenshot {
  width: 100%;
  border-radius: 8px;
}

.modal-content a {
  color: var(--accent);
  text-decoration: underline;
  opacity: 1;
}

.modal-content a:hover {
  opacity: 0.75;
}

.modal-content ul {
  padding-left: 20px;
}

.modal-content li {
  margin: 6px 0;
}

.modal-content img[src*="badge-color.svg"] {
  height: 40px;
}

.modal-content img[src*="github.png"] {
  height: 48px;
}

@media (min-width: 640px) {
  .modal-content iframe.youtube {
    height: 400px;
  }

  .modal-content .phone-screenshot {
    margin: 8px;
    width: 260px;
  }

  .modal-content .pc-screenshot {
    margin: 8px;
    width: calc(50% - 16px);
    max-width: 520px;
  }
}

.modal-content .pc-screenshot,
.modal-content .phone-screenshot {
  cursor: zoom-in;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.modal-content .pc-screenshot:hover,
.modal-content .phone-screenshot:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: zoom-out;
}

.lightbox-img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.8);
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.lightbox-close:hover {
  background: rgba(255,255,255,0.3);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-enter,
.lightbox-leave-active {
  opacity: 0;
}
</style>
