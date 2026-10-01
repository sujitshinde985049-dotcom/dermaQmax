"use client";
import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useStore } from "./store-provider";

const nav = [["Home", "/"], ["Shop", "/shop"], ["Skin Care", "/shop?category=Skin+Care"], ["Hair Care", "/shop?category=Hair+Care"], ["Sun Protection", "/shop?category=Sun+Protection"], ["Combos", "/shop?category=Combos"], ["About Us", "/about"], ["Contact", "/contact"]];
export function Header() {
  const [open, setOpen] = useState(false); const { cartCount, wishlist } = useStore();
  return <><div className="announcement"><span>FREE SHIPPING ON ORDERS ABOVE ₹499</span><span>BUY 1 GET 1 FREE – LIMITED TIME</span><span>DERMATOLOGY-INSPIRED EVERYDAY CARE</span><span>PAN INDIA DELIVERY</span></div><header className="header"><div className="shell flex h-[76px] items-center justify-between gap-4"><button className="icon-btn lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></button><Link className="brand" href="/"><strong>DermaQ <i>Max</i></strong><small>ADVANCED SKIN & SCALP SCIENCE</small></Link><nav className="hidden items-center gap-5 lg:flex">{nav.map(([label, href]) => <Link key={label} className="nav-link" href={href}>{label}</Link>)}</nav><div className="flex items-center gap-1"><Link className="icon-btn" href="/search" aria-label="Search"><Search /></Link><Link className="icon-btn hidden sm:grid" href="/account" aria-label="Account"><User /></Link><Link className="icon-btn hidden sm:grid" href="/wishlist" aria-label="Wishlist"><Heart /><span className="count-badge">{wishlist.length}</span></Link><Link className="icon-btn" href="/cart" aria-label="Cart"><ShoppingBag /><span className="count-badge">{cartCount}</span></Link></div></div></header>{open && <div className="mobile-overlay" onClick={() => setOpen(false)}><aside className="mobile-menu" onClick={(e) => e.stopPropagation()}><div className="flex items-center justify-between"><span className="text-xl font-bold text-navy">Menu</span><button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div><nav className="mt-8 grid gap-1">{nav.map(([label, href]) => <Link key={label} onClick={() => setOpen(false)} className="mobile-link" href={href}>{label}</Link>)}</nav></aside></div>}</>;
}

