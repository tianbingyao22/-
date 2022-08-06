import Layout from "@/layout";
export default {
  path: "/policy",
  component: Layout,
  redirect: "/policy/index",
  children: [
    {
      path: "index",
      name: "Policy",
      component: () => import("@/views/Policy"),
      meta: { title: "策略管理", icon: "strategy" },
    },
  ],
};
