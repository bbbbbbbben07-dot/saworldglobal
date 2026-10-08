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

const INQUIRY = "6012456789";
const packing = { label: "Packing", value: "To be confirmed", pending: true };

const spec = (material: string, color: string, type: string, application: string, features: string) => [
  { label: "Material", value: material },
  { label: "Color", value: color },
  { label: "Type", value: type },
  { label: "Application", value: application },
  { label: "Features", value: features },
  packing,
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
    specifications: spec("Food-grade PA/PE multi-layer film", "Clear", "Embossed vacuum sealer bags", "Meat, seafood, prepped ingredients, sous vide, cold storage", "Strong seal, puncture resistant, extends shelf life"),
  },
  { slug: "nitrile-gloves", ...nitrileProduct },
  {
    slug: "disposable-aprons", name: "Disposable Aprons", img: aprons, inquiryNumber: INQUIRY,
    desc: "Lightweight, waterproof disposable aprons that keep uniforms clean and support hygienic food handling.",
    specifications: spec("PE (polyethylene)", "White / Clear", "Disposable", "Food preparation, central kitchens, cleaning, hygiene use", "Lightweight, waterproof, single-use for hygiene"),
  },
  {
    slug: "cling-film", name: "Cling Film", img: cling, inquiryNumber: INQUIRY,
    desc: "Clear, high-cling food wrap rolls for sealing, storing and portioning ingredients in busy kitchens.",
    specifications: spec("Food-grade PE / PVC film", "Clear", "Roll with dispenser box", "Wrapping, storing and portioning food in F&B and central kitchens", "High cling, stretchable, keeps food fresh"),
  },
  {
    slug: "aluminium-foil", name: "Aluminium Foil", img: foil, inquiryNumber: INQUIRY,
    desc: "Heavy-duty aluminium foil rolls for cooking, baking, wrapping and heat retention.",
    specifications: spec("Food-grade aluminium", "Silver", "Roll", "Cooking, baking, grilling, wrapping and heat retention", "Heavy-duty, heat resistant, moisture barrier"),
  },
  {
    slug: "disposable-hair-nets", name: "Disposable Hair Nets", img: hairnet, images: [hairnet, hairnetBlue],
    imageLabels: ["White disposable hair nets", "Blue disposable hair nets"], inquiryNumber: INQUIRY,
    desc: "Soft, breathable non-woven hair nets that help meet food safety and hygiene requirements.",
    specifications: spec("Non-woven polypropylene", "White / Blue", "Disposable, elastic edge", "Food handling, central kitchens, food processing, hygiene use", "Soft, breathable, comfortable fit"),
  },
  {
    slug: "hdpe-gloves", name: "HDPE Gloves", img: hdpe, inquiryNumber: INQUIRY,
    desc: "Economical clear HDPE gloves ideal for quick food prep, serving and frequent glove changes.",
    specifications: spec("HDPE (high-density polyethylene)", "Clear", "Disposable", "Food prep, serving counters, quick handling tasks", "Economical, lightweight, easy to change frequently"),
  },
  {
    slug: "disposable-face-masks", name: "Disposable Face Masks (Normal / Hygiene)", img: disposableMasks, inquiryNumber: INQUIRY,
    desc: "Lightweight 3-ply hygiene masks for everyday protection, helping maintain clean air and safe food handling in F&B environments.",
    specifications: spec("3-ply non-woven fabric", "Blue", "Disposable, ear-loop", "F&B outlets, central kitchens, food handling, daily hygiene use", "Lightweight, breathable, comfortable all-day wear"),
  },
  {
    slug: "medical-face-masks", name: "Medical Face Masks", img: medicalMasks, inquiryNumber: INQUIRY,
    desc: "Medical-grade surgical masks with reliable filtration, meeting the protection standards required in commercial kitchens.",
    specifications: spec("3-ply non-woven with melt-blown filter", "Green", "Disposable, ear-loop", "Commercial kitchens, food processing, hygiene-sensitive areas", "High filtration, adjustable nose wire, fluid resistant"),
  },
  {
    slug: "plastic-face-masks", name: "Plastic Face Masks (Food Service)", img: faceShield, inquiryNumber: INQUIRY,
    desc: "Transparent full-face shields with adjustable straps, offering clear visibility and splash protection during food handling.",
    specifications: spec("Clear PET / PC with plastic frame", "Transparent / White", "Reusable mouth shield", "Food service counters, buffets, food handling, kitchen use", "Clear visibility, splash protection, adjustable strap"),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
