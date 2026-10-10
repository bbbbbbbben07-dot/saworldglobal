import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Mail, Menu, MessageCircle, MessagesSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMark from "@/assets/sa-logo-mark.png.asset.json";
import { siteContact } from "@/lib/contact";

const nav = [
  { label: "Home", hash: "home" },
  { label: "Products", hash: "products" },
  { label: "About Us", hash: "about" },
  { label: "Contact", hash: "contact" },
];

function Logo() {
  return (
    <Link to="/" hash="home" className="flex items-center gap-3">
      <span className="grid h-10 w-11 place-items-center rounded-xl bg-primary p-2">
        <img src={logoMark.url} alt="SA WORLD GLOBAL logo" className="h-full w-full object-contain" />
      </span>
      <span className="text-base font-extrabold tracking-tight text-primary sm:text-lg">SA WORLD GLOBAL</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </Link>
          ))}
          <Button asChild className="h-auto rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-none transition hover:bg-primary/90">
            <a href={siteContact.whatsappUrl} target="_blank" rel="noopener noreferrer">Get a Quote</a>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="rounded-lg p-2 text-primary md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.hash} to="/" hash={n.hash} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-foreground hover:bg-muted">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const [copyStatus, setCopyStatus] = useState("");
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);
  const copyWeChat = async () => {
    try {
      await navigator.clipboard.writeText(siteContact.wechatId);
      setCopyStatus("WeChat ID copied!");
    } catch {
      setCopyStatus(`WeChat ID: ${siteContact.wechatId}`);
    }
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus(""), 3000);
  };
  const linkClass = "inline-flex min-h-9 items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  return (
    <footer className="bg-primary pb-6 pt-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" hash="home" className="text-lg font-bold transition-colors hover:text-accent">SA WORLD GLOBAL</Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/70">Reliable packaging and hygiene supplies for F&B and central kitchens in Malaysia.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="mb-2 text-sm font-semibold">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-5 lg:max-w-48">
              {nav.map((n) => <li key={n.hash}><Link to="/" hash={n.hash} className={linkClass}>{n.label}</Link></li>)}
            </ul>
          </nav>
          <div className="min-w-0">
            <h2 className="mb-2 text-sm font-semibold">Contact Us</h2>
            <ul>
              <li><a href={siteContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={linkClass}><MessageCircle className="h-4 w-4 shrink-0 text-accent" /><span>WhatsApp: {siteContact.whatsappDisplay}</span></a></li>
              <li><Button variant="ghost" onClick={copyWeChat} className={`h-auto justify-start rounded-sm p-0 font-normal hover:bg-transparent ${linkClass}`} aria-label={`Copy WeChat ID ${siteContact.wechatId}`}><MessagesSquare className="h-4 w-4 shrink-0 text-accent" /><span>WeChat: {siteContact.wechatId}</span></Button></li>
              <li><a href={`mailto:${siteContact.email}`} className={linkClass}><Mail className="h-4 w-4 shrink-0 text-accent" /><span className="break-all">{siteContact.email}</span></a></li>
            </ul>
            <p role="status" className="min-h-5 text-xs text-accent">{copyStatus}</p>
          </div>
        </div>
        <div className="mt-6 border-t border-primary-foreground/15 pt-5 pr-16 text-xs leading-relaxed text-primary-foreground/60">
          © {new Date().getFullYear()} SA WORLD GLOBAL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={siteContact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition-all duration-200 ease-out hover:-translate-y-1 hover:brightness-105 active:translate-y-0.5 active:shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
    >
      <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" className="h-7 w-7">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5.1-3.9-10.8-6.7z" />
      </svg>
    </a>
  );
}

