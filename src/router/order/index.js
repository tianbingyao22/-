import Layout from "@/layout";
export default {
  path: "/order",
  component: Layout,
  redirect: "/order/index",
  children: [
    {
      path: "index",
      name: "Order",
      component: () => import("@/views/Order"),
      meta: { title: "订单管理", icon: "table" },
    },
  ],
};
