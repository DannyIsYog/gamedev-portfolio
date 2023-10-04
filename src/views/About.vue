<template>
  <div style="margin-bottom: 80px;">
    <h1>Hey!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Fábio Sousa</strong>, a Software Engineer and Game Designer.<br />
        I'm on the final stages of finishing my Master's degree in Telecommunications and Computer Engineering
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">these games</router-link> and took
        part in <router-link to="/resume">these extra-curricular acitvities</router-link> as well.
      </div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a Game Designer or Game
        Programmer. You can reach me at <a href="fabio.sousa@tecnico.ulisboa.pt">fabio.sousa@tecnico.ulisboa.pt</a> or
        <router-link to="/contact">through here
        </router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" />
    </div>

    <div style="clear:both"></div>

    <h1>My Games</h1>

    <div style="margin-bottom: 30px;">
      The following are some of the game I've made or heavily contributed to as a Game Designer and Programmer.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There is more to see on my <a target="_blank" href="https://dannyisyog.itch.io/">Itch.io</a> page.
    </div>


  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>

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