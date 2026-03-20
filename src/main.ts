import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Scroll reveal directive
Vue.directive('reveal', {
  inserted(el: HTMLElement) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';

    const delay = el.dataset.delay || '0';
    el.style.transitionDelay = delay + 'ms';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
