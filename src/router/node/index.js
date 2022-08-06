import Layout from "@/layout";
export default {
  path: "/node",
  component: Layout,
  redirect: "/node/region",
  name: "node",
  meta: { title: "点位管理", icon: "point" },
  children: [
    {
      path: "region",
      name: "Region",
      component: () => import("@/views/Nodes/region/index"),
      meta: { title: "区域管理" },
    },
    {
      path: "node",
      name: "Operation",
      component: () => import("@/views/Nodes/node/index"),
      meta: { title: "点位管理" },
    },
    {
      path: "partner",
      name: "Partner",
      component: () => import("@/views/Nodes/partner/index"),
      meta: { title: "合作商管理" },
    },
  ],
};
