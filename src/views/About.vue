<template>
  <div style="margin-bottom: 80px;">
    <h1>Hey!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Fábio Sousa</strong>, a Software Engineer and Game Designer.<br />
        I'm on the final stages of finishing my Master's degree in Telecommunications and Computer Engineering
      </div>

      <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">these games</router-link>, on
        <router-link to="/other-projects">these non-game projects</router-link>, and took part in <router-link
          to="/resume">these extra-curricular acitvities</router-link> as well.
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