import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ProductDetail } from "@/components/product-detail";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Product not found — SA WORLD GLOBAL" }, { name: "robots", content: "noindex" }] };
    const { product } = loaderData;
    const title = `${product.name} — SA WORLD GLOBAL`;
    const description = `${product.desc} View specifications and inquire with SA WORLD GLOBAL.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: ProductNotFound,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail key={product.slug} product={product} />;
}

function ProductNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-2xl font-bold text-primary">Product not found</h1>
      <Link to="/" hash="products" className="mt-6 inline-block text-accent underline">Back to Products</Link>
    </main>
  );
}
