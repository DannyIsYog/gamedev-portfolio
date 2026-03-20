<template>
  <div class="game-projects">
    <div class="page-header">
      <div class="section-label" v-reveal>Portfolio</div>
      <h1 class="page-title" v-reveal data-delay="60">Game Projects</h1>
      <p class="page-subtitle" v-reveal data-delay="120">
        Games I've designed and built — from game jams to shipped products.
        More on my <a href="https://dannyisyog.itch.io/" target="_blank">Itch.io</a> page.
      </p>
    </div>

    <div class="container">
      <ProjectsList :projects="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: { ProjectsList },
  data() {
    return { projects: gameProjectsData };
  }
});
</script>

<style scoped>
.game-projects {
  padding-bottom: 80px;
}
</style>
