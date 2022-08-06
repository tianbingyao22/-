import Layout from "@/layout";
export default {
  path: "/task",
  component: Layout,
  redirect: "/task/business",
  name: "task",
  meta: { title: "工单管理", icon: "workorder" },
  children: [
    {
      path: "business",
      name: "Business",
      component: () => import("@/views/TASK/business"),
      meta: { title: "运营工单" },
    },
    {
      path: "operation",
      name: "Operation",
      component: () => import("@/views/TASK/operation/index"),
      meta: { title: "运维工单"},
    },
  ],
};
