<template>
  <div class="skill-tag">{{ name }}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SkillRate",
  props: { name: String }
});
</script>

<style scoped lang="less">
.skill-tag {
  display: inline-block;
  padding: 5px 12px;
  margin: 4px;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(129, 140, 248, 0.08);
  color: var(--accent);
  border: 1px solid rgba(129, 140, 248, 0.2);
  letter-spacing: 0.02em;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.skill-tag:hover {
  background: rgba(129, 140, 248, 0.16);
  border-color: rgba(129, 140, 248, 0.4);
}
</style>
