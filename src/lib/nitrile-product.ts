import blue from "@/assets/nitrile-gloves.jpg";
import black from "@/assets/nitrile-gloves-black.jpg";

export const nitrileProduct = {
  name: "Nitrile Gloves",
  img: blue,
  images: [blue, black],
  imageLabels: ["Blue nitrile gloves", "Black nitrile gloves"],
  desc: "Powder-free, latex-free nitrile gloves offering strong puncture resistance and comfortable all-day wear.",
  inquiryNumber: "6012456789",
  specifications: [
    { label: "Material", value: "Nitrile" },
    { label: "Color", value: "Blue / Black" },
    { label: "Type", value: "Disposable" },
    { label: "Application", value: "F&B, central kitchens, food handling, hygiene use" },
    { label: "Features", value: "Durable, comfortable fit, suitable for commercial kitchen use" },
    { label: "Packing", value: "To be confirmed", pending: true },
  ],
};
