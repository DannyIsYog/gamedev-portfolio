<template>
  <div class="other-projects">
    <div class="page-header">
      <div class="section-label" v-reveal>Portfolio</div>
      <h1 class="page-title" v-reveal data-delay="60">Other Projects</h1>
      <p class="page-subtitle" v-reveal data-delay="120">
        Side projects, tools, and experiments outside of game development.
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
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: { ProjectsList },
  data() {
    return { projects: otherProjectsData };
  }
});
</script>

<style scoped>
.other-projects {
  padding-bottom: 80px;
}
</style>
