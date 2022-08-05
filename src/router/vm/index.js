import Layout from "@/layout";
export default {
  path: "/vm",
  component: Layout,
  redirect: "/vm/index",
  name: "vm",
  meta: { title: "设备管理", icon: "el-icon-s-help" },
  children: [
    {
      path: "index",
      name: "Index",
      component: () => import("@/views/VM/index/index"),
      meta: { title: "设备管理", icon: "table" },
    },
    {
      path: "status",
      name: "Status",
      component: () => import("@/views/VM/status/index"),
      meta: { title: "设备状态", icon: "tree" },
    },
    {
      path: "type",
      name: "Type",
      component: () => import("@/views/VM/type/index"),
      meta: { title: "设备类型管理", icon: "tree" },
    },
  ],
};
