import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type DetailProduct = {
  name: string;
  desc: string;
  images: string[];
  imageLabels: string[];
  inquiryNumber: string;
  specifications: { label: string; value: string; pending?: boolean }[];
};

function BackToProductsLink() {
  return (
    <Link to="/" hash="products" className="group -ml-1.5 inline-flex items-center gap-1.5 rounded-full px-1.5 py-1 text-sm font-medium text-primary/65 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 motion-reduce:transition-none">
      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none" />
      <span className="underline-offset-4 group-hover:underline">Back to Products</span>
    </Link>
  );
}

function BackToProductsButton() {
  return (
    <Button asChild variant="outline" className="group h-11 rounded-full border-primary/20 px-5 text-primary transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-primary hover:shadow-soft active:translate-y-0.5 active:shadow-none motion-reduce:transform-none motion-reduce:transition-none">
      <Link to="/" hash="products">
        <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5 motion-reduce:transform-none" />
        Back to Products
      </Link>
    </Button>
  );
}

export function ProductDetail({ product }: { product: DetailProduct }) {
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    if (product.images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActiveImage((i) => (i + 1) % product.images.length), 4000);
    return () => clearInterval(timer);
  }, [product.images.length]);

  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 lg:px-8 lg:pb-16 lg:pt-10">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" hash="products" className="transition-colors hover:text-accent">Products</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-primary">{product.name}</span>
      </nav>

      <div className="mb-12 mt-5 lg:mb-14">
        <BackToProductsLink />
      </div>

      <section aria-labelledby="product-title" className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card">
            {product.images.map((src, i) => (
              <img key={src} src={src} alt={product.imageLabels[i] ?? product.name} width={1024} height={1024}
                aria-hidden={i !== activeImage}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 motion-reduce:transition-none ${i === activeImage ? "opacity-100" : "opacity-0"}`} />
            ))}
          </div>
          {product.images.length > 1 && (
            <div role="group" aria-label="Product images" className="mt-3 flex items-center justify-center gap-0.5">
              {product.images.map((_, i) => (
                <Button key={i} type="button" variant="ghost" size="icon"
                  aria-label={`Show ${product.imageLabels[i] ?? `image ${i + 1}`}`}
                  aria-current={i === activeImage ? "true" : undefined}
                  onClick={() => setActiveImage(i)}
                  className="h-8 w-8 rounded-full bg-transparent p-0 hover:bg-transparent">
                  <span className={`h-1.5 rounded-full transition-all duration-500 motion-reduce:transition-none ${i === activeImage ? "w-5 bg-accent" : "w-1.5 bg-muted-foreground/25"}`} />
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="min-w-0 pb-2">
          <h1 id="product-title" className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">{product.desc}</p>
          <span className="mt-5 inline-flex max-w-full items-start gap-2 rounded-full bg-accent-soft px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> Suitable for F&B &amp; Central Kitchens
          </span>
          <div className="mt-8 border-t border-border pt-7">
            <Button asChild size="lg" className="h-12 w-full rounded-full bg-accent px-6 text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lift active:translate-y-0.5 motion-reduce:transform-none sm:w-auto">
              <a href={`https://wa.me/${product.inquiryNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Inquire on WhatsApp
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">Ask us about sizes, colors, and packing</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="specifications-title" className="mt-14 border-t border-border pt-10 lg:mt-16">
        <h2 id="specifications-title" className="text-2xl font-bold text-primary">Product Specifications</h2>
        <dl className="mt-5 divide-y divide-border border-y border-border">
          {product.specifications.map(({ label, value, pending }) => (
            <div key={label} className="grid gap-1 px-3 py-3 odd:bg-secondary sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-4">
              <dt className="text-sm font-semibold text-primary">{label}</dt>
              <dd className={`text-sm leading-relaxed text-muted-foreground ${pending ? "italic" : ""}`}>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12">
        <BackToProductsButton />
      </div>
    </main>
  );
}