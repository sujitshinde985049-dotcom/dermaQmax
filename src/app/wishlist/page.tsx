"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/components/store-provider";
export default function WishlistPage(){const {wishlist}=useStore();const saved=products.filter(p=>wishlist.includes(p.id));return <section className="section"><div className="shell"><p className="eyebrow">Saved for later</p><h1 className="mt-2 text-4xl font-bold text-navy">Your wishlist</h1>{saved.length?<div className="product-grid mt-8">{saved.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty mt-8"><Heart className="mx-auto text-aqua" size={42}/><h2 className="mt-4 text-2xl font-bold text-navy">Nothing saved yet</h2><p className="mt-2 text-muted">Tap the heart on a product to keep it here.</p><Link className="btn-primary mt-6" href="/shop">Explore products</Link></div>}</div></section>}

