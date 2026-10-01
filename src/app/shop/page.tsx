import type { Metadata } from "next";
import { ShopClient } from "./shop-client";
export const metadata: Metadata = { title: "Shop", description: "Shop DermaQ Max skin, scalp, sun and lip care." };
export default function ShopPage() { return <><section className="page-hero"><div className="shell"><p className="eyebrow text-aqua">Complete collection</p><h1>Shop science-led care</h1><p>Targeted everyday essentials, made for comfortable routines and the Indian climate.</p></div></section><ShopClient/></>; }

