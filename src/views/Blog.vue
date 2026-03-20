<template>
  <div class="blog">
    <div class="page-header">
      <div class="section-label" v-reveal>Writing</div>
      <h1 class="page-title" v-reveal data-delay="60">Blog</h1>
      <p class="page-subtitle" v-reveal data-delay="120">
        Thoughts on game design, programming, and building things.
      </p>
    </div>

    <div class="container">
      <div class="coming-soon" v-reveal>
        <div class="coming-soon-icon">
          <i class="fa fa-pencil-square-o"></i>
        </div>
        <h2>Posts coming soon</h2>
        <p>I'm working on some articles. Check back soon — or follow me on
          <a href="https://twitter.com/DannyIsYog" target="_blank">Twitter</a> for updates.</p>
      </div>

      <div class="posts-preview">
        <div class="posts-label" v-reveal>Planned topics</div>
        <div class="posts-grid">
          <article
            v-for="(post, i) in posts"
            :key="post.id"
            class="post-card post-card--preview"
            v-reveal
            :data-delay="i * 80"
          >
            <div class="post-cover" :style="{ background: 'linear-gradient(135deg, ' + post.coverColor + '33, ' + post.coverColor + '11)' }">
              <i class="fa fa-file-text-o post-cover-icon" :style="{ color: post.coverColor }"></i>
            </div>
            <div class="post-body">
              <div class="post-meta">
                <span class="post-category" :style="{ color: post.coverColor }">{{ post.category }}</span>
                <span class="post-dot">·</span>
                <span class="post-readtime">{{ post.readTime }} min read</span>
              </div>
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
            </div>
            <div class="post-soon-badge">Draft</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import blogData from "@/data/BlogData.ts";

export default Vue.extend({
  name: "Blog",
  data() {
    return { posts: blogData };
  }
});
</script>

<style scoped>
.blog {
  padding-bottom: 80px;
}

.coming-soon {
  text-align: center;
  padding: 64px 24px;
  border: 1px dashed var(--border-accent);
  border-radius: var(--radius);
  background: var(--accent-dim);
  margin-bottom: 64px;
}

.coming-soon-icon {
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 16px;
  opacity: 0.7;
}

.coming-soon h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--text);
}

.coming-soon p {
  color: var(--text-muted);
  max-width: 400px;
  margin: 0 auto;
  font-size: 0.95rem;
}

.coming-soon a {
  color: var(--accent);
}

.posts-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.post-card {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-card);
  overflow: hidden;
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.post-card--preview {
  opacity: 0.7;
}

.post-card--preview:hover {
  opacity: 0.9;
}

.post-card:hover {
  border-color: var(--border-accent);
  box-shadow: 0 12px 40px -8px rgba(0,0,0,0.4);
  transform: translateY(-3px);
}

.post-cover {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
}

.post-cover-icon {
  font-size: 2rem;
  opacity: 0.7;
}

.post-body {
  padding: 20px 24px 24px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.post-category {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.post-dot {
  color: var(--text-faint);
}

.post-readtime {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.post-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1.35;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.post-excerpt {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0;
}

.post-soon-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(0,0,0,0.4);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

@media (min-width: 640px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .posts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
