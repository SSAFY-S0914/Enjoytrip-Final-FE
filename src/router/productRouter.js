import ProductDetailView from "@/views/product/ProductDetailView";

export default [
  {
    path: "/products/:productId",
    name: "productDetail",
    component: ProductDetailView,
  },
];
