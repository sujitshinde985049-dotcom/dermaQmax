"use client";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { ProductArt } from "./product-art";
import { useStore } from "./store-provider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  return <article className="product-card group">
    <div className="relative"><Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}><ProductArt src={product.images[0]} name={product.name} /></Link><button className="icon-btn absolute right-3 top-3" onClick={() => toggleWishlist(product.id)} aria-label="Toggle wishlist"><Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} /></button>{product.discount > 0 && <span className="badge absolute left-3 top-3">{product.discount}% OFF</span>}</div>
    <div className="p-5"><p className="eyebrow">{product.category} · {product.size}</p><Link href={`/products/${product.slug}`}><h3 className="mt-2 text-lg font-semibold text-navy group-hover:text-blue">{product.name}</h3></Link><p className="mt-2 line-clamp-2 text-sm text-muted">{product.shortDescription}</p><div className="mt-3 flex items-center gap-1 text-sm"><Star size={15} fill="currentColor" className="text-blue" /> {product.rating} <span className="text-muted">(new)</span></div><div className="mt-4 flex items-end justify-between"><div><strong className="text-xl text-navy">{formatPrice(product.price)}</strong>{product.mrp > product.price && <del className="ml-2 text-sm text-muted">{formatPrice(product.mrp)}</del>}</div></div><div className="mt-4 grid grid-cols-2 gap-2"><button className="btn-secondary" onClick={() => addToCart(product.id)}><ShoppingBag size={17} /> Add</button><Link className="btn-primary" href={`/products/${product.slug}`}>Buy now</Link></div></div>
  </article>;
}

