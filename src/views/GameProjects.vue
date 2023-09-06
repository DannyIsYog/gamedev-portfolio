<template>
  <div>
    <h1>Stuff</h1>

    <div style="margin-bottom: 30px;">
      The following are some of the game I've made or heavily contributed to as a Game Designer and Programmer.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There is more to see on my <a target="_blank" href="https://dannyisyog.itch.io/">Itch.io</a> page.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
