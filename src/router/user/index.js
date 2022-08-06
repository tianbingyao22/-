import Layout from "@/layout";
export default {
  path: "/user",
  component: Layout,
  redirect: "/user/index",
  name: "user",
  meta: { title: "人员管理", icon: "staff" },
  children: [
    {
      path: "index",
      name: "Index",
      component: () => import("@/views/User/Userindex"),
      meta: { title: "人员列表" },
    },
    {
      path: "user-task/stats",
      name: "Stats",
      component: () => import("@/views/User/User-task-stats"),
      meta: { title: "人效统计" },
    },
    {
      path: "user-work",
      name: "Work",
      component: () => import("@/views//User/User-work"),
      meta: { title: "工作量列表" },
    },
  ],
};
