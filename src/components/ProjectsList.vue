<template>
  <div>
    <!-- Featured project -->
    <div v-if="featuredProject" class="featured-card" @click="showDetails(featuredProject)" v-reveal>
      <div class="featured-image" :style="{ backgroundImage: 'url(' + featuredProject.iconUrl + ')' }">
        <div class="featured-overlay"></div>
      </div>
      <div class="featured-content">
        <div class="section-label">Featured</div>
        <h2 class="featured-title">{{ featuredProject.name }}</h2>
        <div class="featured-tags">
          <span v-for="tag in featuredProject.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button class="btn btn-primary featured-cta">
          View Project <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="projects-grid">
      <div
        v-for="(project, i) in regularProjects"
        :key="project.id"
        class="project-card"
        :class="{ 'wide': project.isWide, 'high': project.isHigh }"
        @click="showDetails(project)"
        v-reveal
        :data-delay="(i % 3) * 80"
      >
        <div class="card-image" :style="{ backgroundImage: 'url(' + project.iconUrl + ')' }"></div>
        <div class="card-overlay">
          <div class="card-overlay-inner">
            <i class="fa fa-expand"></i>
            <span>View Project</span>
          </div>
        </div>
        <div class="card-footer" :style="{ background: 'linear-gradient(to right, ' + project.accentColor + 'ee, ' + project.accentColor + '99)' }">
          <span class="card-title">{{ project.name }}</span>
          <div class="card-tags" v-if="project.tags && project.tags.length">
            <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="card-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

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
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: { ProjectDetailsOverlay },
  props: { projects: Array },
  data() {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      popupIconUrl: ""
    };
  },
  computed: {
    featuredProject(): ProjectData | null {
      return (this.projects as ProjectData[]).find(p => p.isFeatured) || null;
    },
    regularProjects(): ProjectData[] {
      return (this.projects as ProjectData[]).filter(p => !p.isFeatured);
    }
  },
  methods: {
    showDetails(item: ProjectData) {
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
/* Featured card */
.featured-card {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  border: 1px solid var(--border);
  margin-bottom: 40px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  min-height: 380px;
  position: relative;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.featured-card:hover {
  box-shadow: 0 24px 64px -12px var(--accent-glow);
  transform: translateY(-3px);
}

.featured-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-image {
  transform: scale(1.03);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(7,9,15,0.95) 40%, rgba(7,9,15,0.4) 100%);
}

.featured-content {
  position: relative;
  z-index: 2;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  max-width: 480px;
}

.featured-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.featured-cta {
  margin-top: 8px;
  align-self: flex-start;
}

/* Projects grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.project-card {
  height: 280px;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.project-card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 16px 48px -8px rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}

.card-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .card-image {
  transform: scale(1.06);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(7, 9, 15, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.project-card:hover .card-overlay {
  background: rgba(7, 9, 15, 0.5);
}

.card-overlay-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card-overlay-inner i {
  font-size: 1.4rem;
}

.project-card:hover .card-overlay-inner {
  opacity: 1;
  transform: translateY(0);
}

.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.card-title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-tags {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.card-tag {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 99px;
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.15);
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .featured-card {
    grid-template-columns: 1fr;
    min-height: 440px;
  }

  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
  }

  .project-card.wide {
    grid-column: span 2;
  }

  .project-card.high {
    grid-row: span 2;
  }
}
</style>
