<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Fábio Sousa</strong>, a Telecommunications and Computer Engineering student, currently finishing my
      Master's degree at <a href="https://tecnico.ulisboa.pt/pt/">Instituto Superior Técnico</a>.
      <br /> During my degree I focused mainly on courses around Distributed Systems, Computer Networks and
      Cybersecurity. I have also done some courses related to Game Developement and Game Design.
      <br /> Since 2020 I have been part of <a href="https://gamedev.tecnico.ulisboa.pt/">GameDev Técnico</a>, a student
      association focused on game development. Here I have developed over 15 games with multidisciplinary teams.
      <br /> My experience regarding game development is mainly focused on Unity, C# and C++. I have done games both in
      2D and 3D, and some online and local multiplayer games.
      <br />I'm looking for a job in the games industry as a Game Designer or Programmer, so if you have any opportunity
      feel free to <router-link to="/contact">contact me</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV_FabioSousa.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>
          Check my CV</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Education</h2>

      <h3>Masters in Telecommunications and Computer Engineering - Instituto Superior Técnico</h3>
      <h4>September 2021 - November 2023</h4>

      <div>Concluded a Master's Degree in Telecommunications and Computer Engineering at
        Instituto Superior Técnico, University of Lisbon. Specialized in Distributed Systems and Cybersecurity with
        complementary courses in Game Design.</div>

      <h3>Bachelor's in Telecommunications and Computer Engineering - Instituto Superior Técnico</h3>
      <h4>September 2018 - July 2021</h4>

      <div>Concluded a Bachelor's Degree in Telecommunications and Computer Engineering at
        Instituto Superior Técnico, University of Lisbon.</div>

      <h2>Work Experience</h2>

      <h3>GameDev Técnico - President / Game Developer</h3>
      <h4>September 2020 - Present</h4>

      GameDev Técnico is an IST organization that is all about the promotion of game development. Its members
      participate in game jams, sponsored projects, full-blown releases and everything that involves developing games.
      <ul>
        <li>Game Programmer and Game Designer for 2D, 3D, online and local
          multiplayer games.</li>
        <li>Published 1 mobile game that is being used in Portuguese Public Schools as a teaching tool on
          Sustainability.</li>
        <li>Contributed to an Open Source Voxel Engine in C++.</li>
        <li>Raised more than 40.000€ to fund all the projects over 3 years.</li>
      </ul>
      <div class="tech-stack">Godot, GDScript, Unity, C#, Aseprite, Audacity, Mirror Networking</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" />
        <SkillRate name="Python" />
        <SkillRate name="C++" />
        <SkillRate name="C" />
        <SkillRate name="SQL" />
        <SkillRate name="Java" />
        <SkillRate name="Bash" />
        <div style="clear:both"></div>
      </div>

      <div class="skill-set">
        <h3>Gamedev tools</h3>
        <SkillRate name="Unity" />
        <SkillRate name="Godot" />
        <SkillRate name="Aseprite" />
        <SkillRate name="Audacity" />
        <SkillRate name="Mirror Networking" />
        <SkillRate name="Photon Networking" />
        <SkillRate name="PyGame" />
        <div style="clear:both" />
      </div>

      <div class="skill-set">
        <h3>Tools & frameworks</h3>
        <SkillRate name="PostgresSQL" />
        <SkillRate name="discord-py" />
        <SkillRate name="AWS" />
        <SkillRate name="Terraform" />
        <SkillRate name="Ansible" />
        <SkillRate name="Android Studio" />
        <SkillRate name="GNS3" />
        <SkillRate name="gRPC" />
        <div style="clear:both" />
      </div>

      <div style="clear:both" />
      <h2> Organizations </h2>
      <h3>NEETI - Núcleo de Estudantes de Engenharia de Telecomunicações e Informática - Vice President</h3>
      <h4>March 2019 - September 2023</h4>

      NEETI organizes workshops on a wide range of topics, along with cultural and recreational activities.
      <ul>
        <li>Tutored 1st years students for programming courses</li>
        <li>Organized workshops in a variety of topics</li>
      </ul>

      <h3>IEEE-IST Student Branch - Web Developer</h3>
      <h4> November 2018 - September 2021</h4>

      The IEEE IST Student Branch emphasizes creating innovative events to address gaps in academic education,
      including technical skills and internship opportunities.

      <ul>
        <li>Developed and published a website using Python Framworks (Django and Flask).</li>
        <li>Wrote tutorials on how to develop robots using Raspberry Pi Computers.</li>
      </ul>

      <h3>SET - Semana Empresarial e Tecnológica - External Relations Team Member</h3>
      <h4> October 2018 - March 2020</h4>

      SET - Instituto Superior Técnico's Business and Technological Week has the objective is to bring the academic
      and business worlds closer together

      <ul>
        <li>Contacted Companies and Speakers to participate in this event and network with university students</li>
      </ul>

      <h3>LAGE2 - Laboratório de Apoio à Gestão de Atividades Extracurriculares dos Estudantes - Events Team</h3>
      <h4> September 2018 - September 2020</h4>

      Students Group focused on organising extra-curricular events.

      <ul>
        <li>Organized Board Game Tournaments.</li>
      </ul>

      <h3>LGW - Lisbon Games Week - Logistics Team</h3>
      <h4> 2018 - 2020</h4>

      Biggest Videogame Event in Portugal

      <ul>
        <li>Visitor Information Support</li>
        <li>Support in the auditoriums, activities and workshops</li>
      </ul>

      <div style="clear:both" />

      <h2>Extra...</h2>
      <div>
        <h3>🧮 Enthusiastic about exploring the beauty of <strong>Mathematics</strong></h3>
        <div>because it's a realm where logic and creativity intertwine, much like game development</div>

        <h3>🌌 Passion for delving into the wonders of <strong>Astronomy</strong></h3>
        <div>as it unveils the mysteries of the universe and ignites a sense of cosmic curiosity and awe.</div>

        <h3>🍽️ A dedicated <strong>Food Enthusiast</strong></h3>
        <div>with an appetite for savoring the beauty of fine cuisine (and my grandmother's).</div>

        <h3>📜 Fascinated by the world of poetry</h3>
        <div>where the stylistic figures can evoke emotiones that no other form of writing can quite capture.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}

h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}

h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>