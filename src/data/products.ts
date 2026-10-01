export type Product = {
  id: string; slug: string; sku: string; name: string; category: string; subcategory: string;
  shortDescription: string; description: string; price: number; mrp: number; discount: number; size: string;
  images: string[]; ingredients: string[]; benefits: string[]; features: string[]; howToUse: string[];
  whoCanUse: string; stock: number; rating: number; reviewCount: number; featured: boolean; bestSeller: boolean;
  newArrival: boolean; claims: string[]; concerns: string[]; seoTitle: string; seoDescription: string;
};

// Claims are intentionally explicit per product. Verify substantiation before enabling additional claims.
export const products: Product[] = [
  {
    id: "dq-sun-50", slug: "sunscreen-spf-50", sku: "DQMAX-SUN-50", name: "Sunscreen Aqua Gel SPF 50+ PA++++", category: "Sun Protection", subcategory: "Sunscreen",
    shortDescription: "Weightless broad-spectrum daily sun care", description: "A lightweight aqua-gel sunscreen designed for comfortable everyday protection in warm, humid conditions.", price: 600, mrp: 600, discount: 0, size: "50 ml",
    images: ["/images/products/sunscreen/placeholder.svg"], ingredients: ["Niacinamide", "Hyaluronic Acid", "Vitamin E", "Cica Extract"], benefits: ["Helps protect from sun damage", "Hydrates and soothes skin", "Non-greasy", "Lightweight", "No white cast"], features: ["UVA", "UVB", "IR", "Blue Light"], howToUse: ["Apply generously to face, neck and exposed skin 15 minutes before sun exposure.", "Reapply every two hours and after swimming, sweating or towel drying."], whoCanUse: "Adults looking for lightweight daily sun protection. Patch test before first use.", stock: 120, rating: 4.8, reviewCount: 0, featured: true, bestSeller: true, newArrival: false, claims: ["SPF 50+ PA++++", "Broad Spectrum"], concerns: ["Sun Protection", "Oily Skin"], seoTitle: "Sunscreen Aqua Gel SPF 50+ | DermaQ Max", seoDescription: "Lightweight SPF 50+ PA++++ aqua gel sunscreen for everyday use in the Indian climate."
  },
  {
    id: "dq-shampoo-200", slug: "anti-dandruff-shampoo", sku: "DQMAX-ADS-200", name: "Anti-Dandruff Shampoo", category: "Hair Care", subcategory: "Scalp Care",
    shortDescription: "Advanced everyday scalp-cleansing care", description: "A gentle cosmetic scalp-care shampoo that helps reduce visible flakes, cleanse excess oil and comfort an itchy-feeling scalp.", price: 499, mrp: 549, discount: 9, size: "200 ml",
    images: ["/images/products/anti-dandruff-shampoo/placeholder.svg"], ingredients: ["Piroctone Olamine", "Aloe Vera", "Tea Tree Oil", "Zinc PCA"], benefits: ["Helps reduce visible dandruff", "Cleanses scalp gently", "Helps soothe itchy and flaky scalp", "Controls excess oil", "Supports scalp health"], features: ["Scalp-first care", "Gentle cleansing"], howToUse: ["Apply to wet hair and scalp.", "Massage gently, leave for 2–3 minutes and rinse well.", "Use 2–3 times weekly or as needed."], whoCanUse: "Adults with oily or flake-prone scalps seeking cosmetic scalp care.", stock: 86, rating: 4.7, reviewCount: 0, featured: true, bestSeller: true, newArrival: false, claims: [], concerns: ["Dandruff", "Itchy Scalp", "Oily Scalp"], seoTitle: "Anti-Dandruff Shampoo | DermaQ Max", seoDescription: "Gentle cosmetic scalp care with Piroctone Olamine, Aloe Vera, Tea Tree Oil and Zinc PCA."
  },
  {
    id: "dq-cleanser-100", slug: "gentle-foaming-face-wash", sku: "DQMAX-GFW-100", name: "Gentle Foaming Face Wash", category: "Skin Care", subcategory: "Face Wash",
    shortDescription: "Non-drying daily skin cleanser", description: "A soft foaming cleanser that lifts impurities and excess oil without leaving skin feeling tight.", price: 399, mrp: 449, discount: 11, size: "100 ml",
    images: ["/images/products/face-wash/placeholder.svg"], ingredients: ["Niacinamide", "Hyaluronic Acid", "Aloe Vera"], benefits: ["Deep cleanses impurities", "Controls excess oil", "Hydrates and soothes", "Non-drying", "pH balanced"], features: ["Foam pump", "Clear overcap"], howToUse: ["Dispense 1–2 pumps onto damp skin.", "Massage gently and rinse thoroughly."], whoCanUse: "Most skin types seeking a comfortable daily cleanse.", stock: 94, rating: 4.6, reviewCount: 0, featured: true, bestSeller: false, newArrival: true, claims: ["pH Balanced"], concerns: ["Oily Skin", "Dry Skin"], seoTitle: "Gentle Foaming Face Wash | DermaQ Max", seoDescription: "Daily non-drying foaming cleanser with Niacinamide, Hyaluronic Acid and Aloe Vera."
  },
  {
    id: "dq-moist-50", slug: "barrier-repair-moisturizer", sku: "DQMAX-BRM-50", name: "Barrier Repair Moisturizer", category: "Skin Care", subcategory: "Moisturizer",
    shortDescription: "Deep hydration without heaviness", description: "A lightweight daily moisturizer formulated to support the skin barrier and soothe dry, uncomfortable skin.", price: 499, mrp: 549, discount: 9, size: "50 g",
    images: ["/images/products/moisturizer/placeholder.svg"], ingredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide", "Cica Extract"], benefits: ["Deep hydration", "Supports skin barrier", "Lightweight", "Non-greasy", "Soothes skin"], features: ["Daily hydration", "Comfort-first texture"], howToUse: ["Apply a small amount to clean face and neck.", "Use morning and evening."], whoCanUse: "All skin types, especially dry or barrier-stressed skin.", stock: 72, rating: 4.8, reviewCount: 0, featured: true, bestSeller: true, newArrival: false, claims: [], concerns: ["Dry Skin", "Skin Barrier"], seoTitle: "Barrier Repair Moisturizer | DermaQ Max", seoDescription: "Lightweight moisturizer with Ceramides, Hyaluronic Acid, Niacinamide and Cica Extract."
  },
  {
    id: "dq-lip-45", slug: "spf-30-lip-balm", sku: "DQMAX-LIP-45", name: "Lip Defense SPF 30", category: "Lip Care", subcategory: "Lip Balm",
    shortDescription: "Comforting non-sticky daily lip care", description: "A lightweight balm that moisturizes lips and helps protect them from everyday UV exposure.", price: 249, mrp: 299, discount: 17, size: "4.5 g",
    images: ["/images/products/lip-balm/placeholder.svg"], ingredients: ["Vitamin E", "Shea Butter", "Natural Waxes", "Jojoba Oil"], benefits: ["Moisturizes lips", "Helps protect lips from UV exposure", "Non-sticky", "Lightweight"], features: ["Pocket friendly", "Everyday wear"], howToUse: ["Glide evenly over clean lips.", "Reapply throughout the day as needed."], whoCanUse: "Adults seeking moisturising daily lip care with UV protection.", stock: 140, rating: 4.5, reviewCount: 0, featured: true, bestSeller: false, newArrival: true, claims: ["SPF 30"], concerns: ["Lip Care", "Dry Skin"], seoTitle: "Lip Defense SPF 30 Lip Balm | DermaQ Max", seoDescription: "Non-sticky SPF 30 lip balm with Vitamin E, Shea Butter and Jojoba Oil."
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const formatPrice = (price: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

