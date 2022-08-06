import Layout from "@/layout";
export default {
  path: "/vm",
  component: Layout,
  redirect: "/vm/index",
  name: "vm",
  meta: { title: "设备管理", icon: "equipment" },
  children: [
    {
      path: "index",
      name: "Index",
      component: () => import("@/views/VM/index/index"),
      meta: { title: "设备管理" },
    },
    {
      path: "status",
      name: "Status",
      component: () => import("@/views/VM/status/index"),
      meta: { title: "设备状态" },
    },
    {
      path: "type",
      name: "Type",
      component: () => import("@/views/VM/type/index"),
      meta: { title: "设备类型管理" },
    },
  ],
};
