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
const specs = (rows: [string, string][]) => [
  ...rows.map(([label, value]) => ({ label, value })),
  { label: "Application", value: "F&B, central kitchens, food handling, hygiene use" },
  { label: "Packing", value: "To be confirmed", pending: true },
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
    specifications: specs([["Material", "Food-grade PA/PE"], ["Type", "Embossed vacuum bags"], ["Features", "Strong seal, extends freshness, suitable for commercial kitchen use"]]),
  },
  { slug: "nitrile-gloves", ...nitrileProduct },
  {
    slug: "disposable-aprons", name: "Disposable Aprons", img: aprons, inquiryNumber: INQUIRY,
    desc: "Lightweight, waterproof disposable aprons that keep uniforms clean and support hygienic food handling.",
    specifications: specs([["Material", "PE (polyethylene)"], ["Color", "White / Transparent"], ["Type", "Disposable"], ["Features", "Lightweight, waterproof, suitable for commercial kitchen use"]]),
  },
  {
    slug: "cling-film", name: "Cling Film", img: cling, inquiryNumber: INQUIRY,
    desc: "Clear, high-cling food wrap rolls for sealing, storing and portioning ingredients in busy kitchens.",
    specifications: specs([["Material", "Food-grade PE"], ["Type", "Cling film rolls"], ["Features", "High cling, clear wrap, suitable for commercial kitchen use"]]),
  },
  {
    slug: "aluminium-foil", name: "Aluminium Foil", img: foil, inquiryNumber: INQUIRY,
    desc: "Heavy-duty aluminium foil rolls for cooking, baking, wrapping and heat retention.",
    specifications: specs([["Material", "Aluminium"], ["Type", "Heavy-duty foil rolls"], ["Features", "Heat resistant, durable, suitable for commercial kitchen use"]]),
  },
  {
    slug: "disposable-hair-nets", name: "Disposable Hair Nets", img: hairnet, images: [hairnet, hairnetBlue],
    imageLabels: ["White disposable hair nets", "Blue disposable hair nets"], inquiryNumber: INQUIRY,
    desc: "Soft, breathable non-woven hair nets that help meet food safety and hygiene requirements.",
    specifications: specs([["Material", "Non-woven fabric"], ["Color", "White / Blue"], ["Type", "Disposable"], ["Features", "Soft, breathable, suitable for commercial kitchen use"]]),
  },
  {
    slug: "hdpe-gloves", name: "HDPE Gloves", img: hdpe, inquiryNumber: INQUIRY,
    desc: "Economical clear HDPE gloves ideal for quick food prep, serving and frequent glove changes.",
    specifications: specs([["Material", "HDPE"], ["Color", "Clear"], ["Type", "Disposable"], ["Features", "Economical, easy to wear, suitable for commercial kitchen use"]]),
  },
  {
    slug: "disposable-face-masks", name: "Disposable Face Masks (Normal / Hygiene)", img: disposableMasks, inquiryNumber: INQUIRY,
    desc: "Lightweight 3-ply hygiene masks for everyday protection, helping maintain clean air and safe food handling in F&B environments.",
    specifications: specs([["Material", "3-ply non-woven"], ["Color", "Blue"], ["Type", "Disposable"], ["Features", "Lightweight, comfortable, suitable for commercial kitchen use"]]),
  },
  {
    slug: "medical-face-masks", name: "Medical Face Masks", img: medicalMasks, inquiryNumber: INQUIRY,
    desc: "Medical-grade surgical masks with reliable filtration, meeting the protection standards required in commercial kitchens.",
    specifications: specs([["Material", "3-ply non-woven"], ["Color", "Green"], ["Type", "Disposable, medical grade"], ["Features", "Reliable filtration, comfortable fit, suitable for commercial kitchen use"]]),
  },
  {
    slug: "plastic-face-masks", name: "Plastic Face Masks (Food Service)", img: faceShield, inquiryNumber: INQUIRY,
    desc: "Transparent full-face shields with adjustable straps, offering clear visibility and splash protection during food handling.",
    specifications: specs([["Material", "Transparent PET"], ["Color", "Clear"], ["Type", "Reusable / Disposable"], ["Features", "Clear visibility, splash protection, suitable for commercial kitchen use"]]),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
