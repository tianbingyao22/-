import Layout from "@/layout";
export default {
  path: "/report",
  component: Layout,
  redirect: "/report/index",
  children: [
    {
      path: "index",
      name: "Report",
      component: () => import("@/views/Report"),
      meta: { title: "对账统计", icon: "table" },
    },
  ],
};
