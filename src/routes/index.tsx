import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Menu, X, Phone, Mail, MessageCircle, MapPin, ShieldCheck, Truck, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-kitchen.jpg";
import vacuum from "@/assets/vacuum-bags.jpg";
import nitrile from "@/assets/nitrile-gloves.jpg";
import aprons from "@/assets/aprons.jpg";
import cling from "@/assets/cling-film.jpg";
import foil from "@/assets/aluminium-foil.jpg";
import hairnet from "@/assets/hair-nets.jpg";
import hdpe from "@/assets/hdpe-gloves.jpg";

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
  { name: "Nitrile Gloves", img: nitrile, desc: "Powder-free, latex-free nitrile gloves offering strong puncture resistance and comfortable all-day wear." },
  { name: "Disposable Aprons", img: aprons, desc: "Lightweight, waterproof disposable aprons that keep uniforms clean and support hygienic food handling." },
  { name: "Cling Film", img: cling, desc: "Clear, high-cling food wrap rolls for sealing, storing and portioning ingredients in busy kitchens." },
  { name: "Aluminium Foil", img: foil, desc: "Heavy-duty aluminium foil rolls for cooking, baking, wrapping and heat retention." },
  { name: "Disposable Hair Nets", img: hairnet, desc: "Soft, breathable non-woven hair nets that help meet food safety and hygiene requirements." },
  { name: "HDPE Gloves", img: hdpe, desc: "Economical clear HDPE gloves ideal for quick food prep, serving and frequent glove changes." },
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

function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What We Supply</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-muted-foreground">Essential packaging and hygiene supplies built for the daily demands of commercial kitchens.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="overflow-hidden bg-background">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-primary">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Suitable for F&B & Central Kitchens
                </span>
              </div>
            </article>
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

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-accent focus:ring-4 focus:ring-accent/15";

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  const info = [
    [Phone, "Phone", "+60 X-XXXX XXXX"],
    [Mail, "Email", "sales@saworldglobal.com"],
    [MessageCircle, "WhatsApp", "+60 1X-XXX XXXX"],
    [MapPin, "Address", "Address to be updated, Malaysia"],
  ] as const;
  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">Tell us about your kitchen's needs and our team will get back to you with a quotation.</p>
        </div>
        <form onSubmit={onSubmit} className="mt-12 grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-10">
          <label className="grid gap-2 text-sm font-medium text-primary">Name<input required name="name" maxLength={100} className={inputCls} placeholder="Your full name" /></label>
          <label className="grid gap-2 text-sm font-medium text-primary">Company Name<input name="company" maxLength={120} className={inputCls} placeholder="Your company" /></label>
          <label className="grid gap-2 text-sm font-medium text-primary">Email<input required type="email" name="email" maxLength={255} className={inputCls} placeholder="you@company.com" /></label>
          <label className="grid gap-2 text-sm font-medium text-primary">Phone / WhatsApp<input required type="tel" name="phone" maxLength={30} className={inputCls} placeholder="+60 ..." /></label>
          <label className="grid gap-2 text-sm font-medium text-primary sm:col-span-2">Message<textarea required name="message" rows={5} maxLength={1000} className={inputCls} placeholder="Products, quantities, delivery location..." /></label>
          <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center">
            <button type="submit" className="rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
              Send Message
            </button>
            {sent && <p className="flex items-center gap-2 text-sm font-medium text-accent"><CheckCircle2 className="h-4 w-4" /> Thank you! We'll be in touch shortly.</p>}
          </div>
        </form>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {info.map(([Icon, label, val]) => (
            <div key={label} className="rounded-2xl bg-secondary p-5">
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
              <p className="mt-1 text-sm font-semibold text-primary">{val}</p>
            </div>
          ))}
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
