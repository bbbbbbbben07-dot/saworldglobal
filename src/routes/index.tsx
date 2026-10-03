import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Mail, MessageCircle, MessagesSquare, ShieldCheck, Truck, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-kitchen.jpg";
import vacuum from "@/assets/vacuum-bags.jpg";
import nitrile from "@/assets/nitrile-gloves.jpg";
import aprons from "@/assets/aprons.jpg";
import cling from "@/assets/cling-film.jpg";
import foil from "@/assets/aluminium-foil.jpg";
import hairnet from "@/assets/hair-nets.jpg";
import hairnetBlue from "@/assets/hair-nets-blue.jpg";
import hdpe from "@/assets/hdpe-gloves.jpg";
import nitrileBlack from "@/assets/nitrile-gloves-black.jpg";
import disposableMasks from "@/assets/face-masks-disposable.jpg";
import medicalMasks from "@/assets/medical-masks.jpg";
import faceShield from "@/assets/plastic-mouth-mask.jpg";

const TITLE = "SA WORLD GLOBAL — Food Packaging & Hygiene Supplies Malaysia";
const DESC =
  "Premium vacuum bags, gloves, aprons and food packaging supplies trusted by F&B businesses and central kitchens across Malaysia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Vacuum Bags", img: vacuum, desc: "Embossed food-grade vacuum bags that lock in freshness and extend shelf life for meats, seafood and prepped ingredients." },
  { name: "Nitrile Gloves", img: nitrile, images: [nitrile, nitrileBlack], desc: "Powder-free, latex-free nitrile gloves offering strong puncture resistance and comfortable all-day wear." },
  { name: "Disposable Aprons", img: aprons, desc: "Lightweight, waterproof disposable aprons that keep uniforms clean and support hygienic food handling." },
  { name: "Cling Film", img: cling, desc: "Clear, high-cling food wrap rolls for sealing, storing and portioning ingredients in busy kitchens." },
  { name: "Aluminium Foil", img: foil, desc: "Heavy-duty aluminium foil rolls for cooking, baking, wrapping and heat retention." },
  { name: "Disposable Hair Nets", img: hairnet, images: [hairnet, hairnetBlue], desc: "Soft, breathable non-woven hair nets that help meet food safety and hygiene requirements." },
  { name: "HDPE Gloves", img: hdpe, desc: "Economical clear HDPE gloves ideal for quick food prep, serving and frequent glove changes." },
  { name: "Disposable Face Masks (Normal / Hygiene)", img: disposableMasks, desc: "Lightweight 3-ply hygiene masks for everyday protection, helping maintain clean air and safe food handling in F&B environments." },
  { name: "Medical Face Masks", img: medicalMasks, desc: "Medical-grade surgical masks with reliable filtration, meeting the protection standards required in commercial kitchens." },
  { name: "Plastic Face Masks (Food Service)", img: faceShield, desc: "Transparent full-face shields with adjustable straps, offering clear visibility and splash protection during food handling." },
];

const nav = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground">
        SA
      </span>
      <span className="text-base font-extrabold tracking-tight text-primary sm:text-lg">SA WORLD GLOBAL</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Get a Quote
          </a>
        </nav>
        <button className="rounded-lg p-2 text-primary md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-foreground hover:bg-muted">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Trusted B2B Supplier in Malaysia
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Reliable Packaging Solutions for <span className="text-accent">Modern Kitchens</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Premium vacuum bags, gloves, aprons and food packaging supplies trusted by F&B and central kitchens across Malaysia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
              View Our Products <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-primary/20 bg-background px-7 py-3.5 font-semibold text-primary transition hover:border-accent hover:text-accent">
              Contact Us
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
            {[
              [ShieldCheck, "Food-grade quality"],
              [Truck, "Reliable delivery"],
              [Award, "Competitive pricing"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof ShieldCheck;
              return (
                <span key={t as string} className="flex items-center gap-2">
                  <I className="h-5 w-5 text-accent" /> {t as string}
                </span>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />
          <img src={hero} alt="Central kitchen staff vacuum-packing food" width={1600} height={1104} className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, compact = false }: { p: (typeof products)[number]; compact?: boolean }) {
  const images = p.images ?? [p.img];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden bg-background">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={p.name}
            loading="lazy"
            width={1024}
            height={1024}
            aria-hidden={i !== index}
            className={`aspect-square w-full object-cover transition-opacity duration-700 ease-in-out ${i === 0 ? "relative" : "absolute inset-0"} ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-0.5 pt-3">
          {images.map((_, i) => (
            <Button
              key={i}
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Show image ${i + 1} of ${p.name}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className="h-6 min-h-6 w-6 min-w-6 rounded-full bg-transparent p-0 hover:bg-transparent"
            >
              <span className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === index ? "w-4 bg-accent" : "w-1.5 bg-muted-foreground/25"}`} />
            </Button>
          ))}
        </div>
      )}
      <div className={`flex flex-1 flex-col ${compact ? "p-3 pt-3" : "p-6 pt-4"}`}>
        <h3 className={`${compact ? "text-sm" : "text-lg"} font-bold text-primary`}>{p.name}</h3>
        <p className={`${compact ? "mt-1.5 text-[11px] leading-4" : "mt-2 text-sm leading-relaxed"} flex-1 text-muted-foreground`}>{p.desc}</p>
        <span className={`${compact ? "mt-3 gap-1 px-2 py-1 text-[9px] leading-3" : "mt-5 gap-1.5 px-3 py-1 text-xs"} inline-flex w-fit items-start rounded-full bg-accent-soft font-semibold text-primary`}>
          <CheckCircle2 className={`${compact ? "mt-px h-3 w-3" : "h-3.5 w-3.5"} shrink-0 text-accent`} /> Suitable for F&B & Central Kitchens
        </span>
      </div>
    </article>
  );
}

function Products() {
  const indicatorCount = Math.ceil(products.length / 2);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const measure = () => {
      const overflowing = carousel.scrollWidth > carousel.clientWidth + 1;
      setIsOverflowing(overflowing);
      if (!overflowing) setActiveSlide(0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  const updateActiveSlide = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (maxScroll <= 0) return;
    setActiveSlide(Math.round((carousel.scrollLeft / maxScroll) * (indicatorCount - 1)));
  };

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel || !isOverflowing || indicatorCount < 2) return;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollTo({ left: maxScroll * (index / (indicatorCount - 1)), behavior: "smooth" });
    setActiveSlide(index);
  };

  return (
    <section id="products" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What We Supply</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-muted-foreground">Essential packaging and hygiene supplies built for the daily demands of commercial kitchens.</p>
        </div>
        <div className="mt-10 sm:hidden">
          <div
            ref={carouselRef}
            onScroll={updateActiveSlide}
            className={`flex gap-3 pb-4 ${isOverflowing ? "overflow-x-auto overscroll-x-contain scroll-smooth pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "overflow-x-hidden"}`}
            aria-label={isOverflowing ? "Products carousel" : "Products"}
          >
            {products.map((p) => (
              <div key={p.name} className="w-[44%] shrink-0 py-px first:pl-px">
                <ProductCard p={p} compact />
              </div>
            ))}
          </div>
          {isOverflowing && indicatorCount > 1 && <div className="mt-3 flex items-center justify-center gap-0.5" role="group" aria-label="Choose product slide">
            {Array.from({ length: indicatorCount }, (_, index) => (
              <Button
                key={index}
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`Show product slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                onClick={() => goToSlide(index)}
                className="h-7 min-h-7 w-7 min-w-7 rounded-full bg-transparent p-0 hover:bg-transparent"
              >
                <span className={`h-1.5 rounded-full transition-all duration-500 ease-out ${activeSlide === index ? "w-5 bg-accent" : "w-1.5 bg-muted-foreground/25"}`} />
              </Button>
            ))}
          </div>}
        </div>
        <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    ["Consistent", "Quality across every batch"],
    ["Competitive", "Pricing for bulk orders"],
    ["Commercial", "Kitchen-standard products"],
  ];
  return (
    <section id="about" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who We Are</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">About SA WORLD GLOBAL</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are a reliable supplier of high-quality food packaging and disposable hygiene products. We support F&B operators and central kitchens with consistent quality, competitive solutions, and products that meet commercial kitchen standards.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map(([t, d]) => (
            <div key={t} className="flex items-center gap-5 rounded-2xl bg-card p-6 shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-primary">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WECHAT_ID = "weixinhao_123";

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  const copyWeChat = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = WECHAT_ID;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 3000);
  };

  const buttons = [
    {
      label: "WhatsApp",
      detail: "+60 12-345 6789",
      href: "https://wa.me/60123456789",
      icon: MessageCircle,
    },
    {
      label: "WeChat",
      detail: WECHAT_ID,
      action: copyWeChat,
      icon: MessagesSquare,
    },
    {
      label: "Email",
      detail: "info@saworldglobal.com",
      href: "mailto:info@saworldglobal.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">Reach us on WhatsApp or WeChat, or send us an email — we'll get back to you with a quotation.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
          {buttons.map(({ label, detail, href, action, icon: Icon }) => {
            const cls =
              "flex w-full select-none flex-col items-center gap-3 rounded-3xl border border-border bg-card px-6 py-8 shadow-soft transition-all duration-150 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift active:translate-y-0.5 active:shadow-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30";
            const content = (
              <>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-150 group-active:scale-95">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="text-base font-bold text-primary">{label}</span>
                <span className={`text-sm font-medium ${copied && label === "WeChat" ? "text-accent" : "text-muted-foreground"}`}>
                  {copied && label === "WeChat" ? "WeChat ID copied!" : detail}
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`group cursor-pointer ${cls}`}>
                {content}
              </a>
            ) : (
              <button key={label} type="button" onClick={action} className={`group cursor-pointer ${cls}`}>
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row lg:px-8">
        <p className="font-bold tracking-tight">SA WORLD GLOBAL</p>
        <p className="opacity-70">© {new Date().getFullYear()} SA WORLD GLOBAL. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
