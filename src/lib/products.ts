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
  { label: "Application", value: "Suitable for F&B and central kitchens" },
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
    specifications: specs([["Sizes", "Various sizes available (please enquire)"], ["Types", "Embossed and Flat vacuum bags"], ["Packing", "100 pcs per pack"], ["Carton", "1 carton quantity depends on size"]]),
  },
  { slug: "nitrile-gloves", ...nitrileProduct },
  {
    slug: "disposable-aprons", name: "Disposable Aprons", img: aprons, inquiryNumber: INQUIRY,
    desc: "Lightweight, waterproof disposable aprons that keep uniforms clean and support hygienic food handling.",
    specifications: specs([["Packing", "100 pcs per pack"], ["Carton", "1 carton = 10 packs"]]),
  },
  {
    slug: "cling-film", name: "Cling Film", img: cling, inquiryNumber: INQUIRY,
    desc: "Clear, high-cling food wrap rolls for sealing, storing and portioning ingredients in busy kitchens.",
    specifications: specs([["Available sizes", "300mm x 800g (Approx. 200m) / 450mm x 1.3kg (Approx. 200m) / 450mm x 2.5kg (Approx. 480m)"], ["Carton", "1 carton = 6 rolls"]]),
  },
  {
    slug: "aluminium-foil", name: "Aluminium Foil", img: foil, inquiryNumber: INQUIRY,
    desc: "Heavy-duty aluminium foil rolls for cooking, baking, wrapping and heat retention.",
    specifications: specs([["Width", "18 inch (450mm)"], ["Weight", "1kg per roll"], ["Thickness", "18 micron (0.018mm)"], ["Length", "Approx. 45–50m per roll"], ["Packing", "6 rolls = 1 carton"]]),
  },
  {
    slug: "disposable-hair-nets", name: "Disposable Hair Nets", img: hairnet, images: [hairnet, hairnetBlue],
    imageLabels: ["White disposable hair nets", "Blue disposable hair nets"], inquiryNumber: INQUIRY,
    desc: "Soft, breathable non-woven hair nets that help meet food safety and hygiene requirements.",
    specifications: specs([["Packing", "100 pcs per pack"], ["Carton", "1 carton = 10 packs"]]),
  },
  {
    slug: "hdpe-gloves", name: "HDPE Gloves", img: hdpe, inquiryNumber: INQUIRY,
    desc: "Economical clear HDPE gloves ideal for quick food prep, serving and frequent glove changes.",
    specifications: specs([["Size", "Free size"], ["Packing", "100 pcs per box"], ["Carton", "1 carton = 50 boxes"]]),
  },
  {
    slug: "disposable-face-masks", name: "Disposable Face Masks (Normal / Hygiene)", img: disposableMasks, inquiryNumber: INQUIRY,
    desc: "Lightweight 3-ply hygiene masks for everyday protection, helping maintain clean air and safe food handling in F&B environments.",
    specifications: specs([["Packing", "100 pcs per box"]]),
  },
  {
    slug: "medical-face-masks", name: "Medical Face Masks", img: medicalMasks, inquiryNumber: INQUIRY,
    desc: "Medical-grade surgical masks with reliable filtration, meeting the protection standards required in commercial kitchens.",
    specifications: specs([["Packing", "100 pcs per box"]]),
  },
  {
    slug: "plastic-face-masks", name: "Plastic Face Masks (Food Service)", img: faceShield, inquiryNumber: INQUIRY,
    desc: "Transparent full-face shields with adjustable straps, offering clear visibility and splash protection during food handling.",
    specifications: specs([["Size", "140mm (Length) x 60mm (Height)"], ["Design", "Open bottom, anti-fog shield"], ["Packing", "Individually wrapped/sealed"], ["Box", "10 pcs per box"], ["Carton", "1 carton = 20 boxes"]]),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
