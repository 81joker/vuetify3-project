import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TeamView from "../views/TeamView";

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboardView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
