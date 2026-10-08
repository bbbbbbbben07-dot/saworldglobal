import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/components/product-detail";
import { nitrileProduct } from "@/lib/nitrile-product";

const title = "Nitrile Gloves — SA WORLD GLOBAL";
const description = "Blue and black disposable nitrile gloves for F&B, central kitchens and food handling. View product specifications and inquire with SA WORLD GLOBAL.";

export const Route = createFileRoute("/products/nitrile-gloves")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NitrileGlovesPage,
});

function NitrileGlovesPage() {
  return <ProductDetail product={nitrileProduct} />;
}