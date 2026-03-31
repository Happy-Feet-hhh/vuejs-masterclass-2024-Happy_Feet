import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView,
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      // 动态路由：/projects/{id}
      path: "/projects/:id",
      name: "SingleProject",
      component: () => import("@/views/SingleProjectView.vue"),
    },
  ],
});

export default router;
