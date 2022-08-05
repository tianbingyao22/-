import Layout from "@/layout";
export default {
  path: "/sku",
  component: Layout,
  redirect: "/sku/sku-class",
  name: "Sku",
  meta: { title: "商品管理", icon: "el-icon-s-help" },
  children: [
    {
      path: "sku-class",
      name: "Sku-class",
      component: () => import("@/views/Sku/Class"),
      meta: { title: "商品类型", icon: "table" },
    },
    {
      path: "sku",
      name: "Skus",
      component: () => import("@/views/Sku/Skus"),
      meta: { title: "商品管理", icon: "tree" },
    },
  ],
};
