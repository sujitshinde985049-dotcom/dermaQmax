export const siteConfig = {
  name: "DermaQ Max",
  tagline: "Advanced Skin & Scalp Science",
  description: "Premium science-led everyday skincare and scalp care for Indian consumers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
  },
  shipping: { freeAbove: 499, standard: 49 },
};

export const offers = {
  coupons: [{ code: "DERMAQ10", type: "percentage" as const, value: 10, active: true }],
  bogo: { active: true, productIds: ["dq-sun-50"], quantity: 2, chargedQuantity: 1 },
};

export const claimFlags = { dermatologicallyTested: false };

