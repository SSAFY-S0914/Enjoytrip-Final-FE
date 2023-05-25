import ProductDetailView from "@/views/product/ProductDetailView";

export default [
  {
    path: "/products/:contentId",
    name: "productDetail",
    component: ProductDetailView,
  },
];
