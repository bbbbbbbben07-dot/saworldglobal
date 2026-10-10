import vacuum from "@/assets/vacuum-bags.jpg";
import aprons from "@/assets/aprons.jpg";
import cling from "@/assets/cling-film.jpg";
import foil from "@/assets/aluminium-foil.jpg";
import hairnet from "@/assets/hair-nets.jpg";
import hairnetBlue from "@/assets/hair-nets-blue.jpg";
import hdpe from "@/assets/hdpe-gloves.jpg";
import disposableMasks from "@/assets/face-masks-disposable.jpg";
import medicalMasks from "@/assets/medical-masks.jpg";
import faceShield from "@/assets/plastic-mouth-mask.jpg";
import { nitrileProduct } from "@/lib/nitrile-product";
import { siteContact } from "@/lib/contact";

const INQUIRY = siteContact.whatsappNumber;

type Row = { label: string; value: string; pending?: boolean };
const spec = (material: string, color: string, type: string, application: string, features: string, extra: [string, string][]): Row[] => [
  { label: "Material", value: material },
  { label: "Color", value: color },
  { label: "Type", value: type },
  { label: "Application", value: application },
  { label: "Features", value: features },
  ...extra.map(([label, value]) => ({ label, value })),
];

export type CatalogProduct = {
  slug: string;
  name: string;
  img: string;
  images?: string[];
  imageLabels?: string[];
  desc: string;
  inquiryNumber: string;
  specifications: { label: string; value: string; pending?: boolean }[];
};

export const products: CatalogProduct[] = [
  {
    slug: "vacuum-bags", name: "Vacuum Bags", img: vacuum, inquiryNumber: INQUIRY,
    desc: "Embossed food-grade vacuum bags that lock in freshness and extend shelf life for meats, seafood and prepped ingredients.",
    specifications: spec("Food-grade PA/PE multi-layer film", "Clear", "Embossed and flat vacuum sealer bags", "Meat, seafood, prepped ingredients, sous vide, cold storage", "Strong seal, puncture resistant, extends shelf life", [["Sizes", "Various sizes available (please enquire)"], ["Packing", "100 pcs per pack"], ["Carton", "Carton quantity depends on size"]]),
  },
  { slug: "nitrile-gloves", ...nitrileProduct },
  {
    slug: "disposable-aprons", name: "Disposable Aprons", img: aprons, inquiryNumber: INQUIRY,
    desc: "Lightweight, waterproof disposable aprons that keep uniforms clean and support hygienic food handling.",
    specifications: spec("PE (polyethylene)", "White / Clear", "Disposable", "Food preparation, central kitchens, cleaning, hygiene use", "Lightweight, waterproof, single-use for hygiene", [["Product Size", "Length: 1400 mm · Width: 800 mm · Thickness: 0.03 mm"], ["Packing", "100 pcs per pack"], ["Carton", "1 carton = 10 packs"]]),
  },
  {
    slug: "cling-film", name: "Cling Film", img: cling, inquiryNumber: INQUIRY,
    desc: "Clear, high-cling food wrap rolls for sealing, storing and portioning ingredients in busy kitchens.",
    specifications: spec("Food-grade PE / PVC film", "Clear", "Roll with dispenser box", "Wrapping, storing and portioning food in F&B and central kitchens", "High cling, stretchable, keeps food fresh, with sliding cutter", [["Available Sizes", "300mm x 800g (approx. 200m) · 450mm x 1.3kg (approx. 200m) · 450mm x 2.5kg (approx. 480m)"], ["Carton", "1 carton = 6 rolls"]]),
  },
  {
    slug: "aluminium-foil", name: "Aluminium Foil", img: foil, inquiryNumber: INQUIRY,
    desc: "Heavy-duty aluminium foil rolls for cooking, baking, wrapping and heat retention.",
    specifications: spec("Food-grade aluminium", "Silver", "Roll", "Cooking, baking, grilling, wrapping and heat retention", "Heavy-duty, heat resistant, moisture barrier, with cutter", [["Width", "18 inch (450mm)"], ["Weight", "1kg per roll"], ["Thickness", "18 micron (0.018mm)"], ["Length", "Approx. 45–50m per roll"], ["Packing", "6 rolls = 1 carton"]]),
  },
  {
    slug: "disposable-hair-nets", name: "Disposable Hair Nets", img: hairnet, images: [hairnet, hairnetBlue],
    imageLabels: ["White disposable hair nets", "Blue disposable hair nets"], inquiryNumber: INQUIRY,
    desc: "Soft, breathable non-woven hair nets that help meet food safety and hygiene requirements.",
    specifications: spec("Non-woven polypropylene", "White / Blue", "Disposable, elastic edge", "Food handling, central kitchens, food processing, hygiene use", "Soft, breathable, comfortable fit", [["Packing", "100 pcs per pack"], ["Carton", "1 carton = 10 packs"]]),
  },
  {
    slug: "hdpe-gloves", name: "HDPE Gloves", img: hdpe, inquiryNumber: INQUIRY,
    desc: "Economical clear HDPE gloves ideal for quick food prep, serving and frequent glove changes.",
    specifications: spec("HDPE (high-density polyethylene)", "Clear", "Disposable", "Food prep, serving counters, quick handling tasks", "Economical, lightweight, easy to change frequently", [["Size", "Free size"], ["Packing", "100 pcs per box"], ["Carton", "1 carton = 50 boxes"]]),
  },
  {
    slug: "disposable-face-masks", name: "Disposable Face Masks (Normal / Hygiene)", img: disposableMasks, inquiryNumber: INQUIRY,
    desc: "Lightweight 3-ply hygiene masks for everyday protection, helping maintain clean air and safe food handling in F&B environments.",
    specifications: spec("3-ply non-woven fabric", "Blue", "Disposable, ear-loop", "F&B outlets, central kitchens, food handling, daily hygiene use", "Lightweight, breathable, comfortable all-day wear", [["Packing", "100 pcs per box"]]),
  },
  {
    slug: "medical-face-masks", name: "Medical Face Masks", img: medicalMasks, inquiryNumber: INQUIRY,
    desc: "Medical-grade surgical masks with reliable filtration, meeting the protection standards required in commercial kitchens.",
    specifications: spec("3-ply non-woven with melt-blown filter", "Green", "Disposable, ear-loop", "Commercial kitchens, food processing, hygiene-sensitive areas", "High filtration, adjustable nose wire, fluid resistant", [["Packing", "100 pcs per box"]]),
  },
  {
    slug: "plastic-face-masks", name: "Transparent Plastic Face Mask", img: faceShield, inquiryNumber: INQUIRY,
    desc: "Transparent plastic face mask designed for food handling, covering the mouth and lower face to support hygiene in F&B and central kitchen environments.",
    specifications: spec("Clear PET / PC with plastic frame", "Transparent / White", "Reusable mouth shield", "Food service counters, buffets, food handling, kitchen use", "Clear visibility, splash protection, adjustable strap", [["Size", "140mm (L) x 60mm (H)"], ["Design", "Open bottom, anti-fog shield"], ["Packing", "Individually wrapped / sealed"], ["Box", "10 pcs per box"], ["Carton", "1 carton = 20 boxes"]]),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
