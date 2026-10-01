"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { offers, siteConfig } from "@/config/site";
import { products } from "@/data/products";

type CartItem = { productId: string; quantity: number };
type Store = {
  cart: CartItem[]; wishlist: string[]; cartCount: number; subtotal: number; discount: number; shipping: number; total: number; coupon: string;
  addToCart: (id: string, quantity?: number) => void; removeFromCart: (id: string) => void; setQuantity: (id: string, quantity: number) => void;
  toggleWishlist: (id: string) => void; applyCoupon: (code: string) => boolean; clearCart: () => void;
};

const StoreContext = createContext<Store | null>(null);
const read = <T,>(key: string, fallback: T): T => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [coupon, setCoupon] = useState("");
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState("");
  // Hydrate browser-only commerce state after the server render.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setCart(read("dq-cart", [])); setWishlist(read("dq-wishlist", [])); setCoupon(read("dq-coupon", "")); setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem("dq-cart", JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) localStorage.setItem("dq-wishlist", JSON.stringify(wishlist)); }, [wishlist, ready]);
  useEffect(() => { if (toast) { const timer = setTimeout(() => setToast(""), 2200); return () => clearTimeout(timer); } }, [toast]);

  const addToCart = (id: string, quantity = 1) => { setCart((items) => { const found = items.find((i) => i.productId === id); return found ? items.map((i) => i.productId === id ? { ...i, quantity: i.quantity + quantity } : i) : [...items, { productId: id, quantity }]; }); setToast("Added to cart"); };
  const removeFromCart = (id: string) => { setCart((items) => items.filter((i) => i.productId !== id)); setToast("Removed from cart"); };
  const setQuantity = (id: string, quantity: number) => quantity < 1 ? removeFromCart(id) : setCart((items) => items.map((i) => i.productId === id ? { ...i, quantity } : i));
  const toggleWishlist = (id: string) => { setWishlist((items) => { const exists = items.includes(id); setToast(exists ? "Removed from wishlist" : "Added to wishlist"); return exists ? items.filter((x) => x !== id) : [...items, id]; }); };
  const applyCoupon = (code: string) => { const valid = offers.coupons.some((c) => c.active && c.code === code.trim().toUpperCase()); if (valid) { setCoupon(code.trim().toUpperCase()); localStorage.setItem("dq-coupon", JSON.stringify(code.trim().toUpperCase())); setToast("Coupon applied"); } else setToast("Coupon invalid"); return valid; };
  const subtotal = cart.reduce((sum, item) => { const product = products.find((p) => p.id === item.productId); if (!product) return sum; const units = offers.bogo.active && offers.bogo.productIds.includes(product.id) ? item.quantity - Math.floor(item.quantity / offers.bogo.quantity) : item.quantity; return sum + product.price * units; }, 0);
  const discount = coupon === "DERMAQ10" ? Math.round(subtotal * .1) : 0;
  const shipping = subtotal === 0 || subtotal >= siteConfig.shipping.freeAbove ? 0 : siteConfig.shipping.standard;
  const value = { cart, wishlist, cartCount: cart.reduce((a, b) => a + b.quantity, 0), subtotal, discount, shipping, total: subtotal - discount + shipping, coupon, addToCart, removeFromCart, setQuantity, toggleWishlist, applyCoupon, clearCart: () => setCart([]) };
  return <StoreContext.Provider value={value}>{children}{toast && <div className="toast" role="status">{toast}</div>}</StoreContext.Provider>;
}
export const useStore = () => { const store = useContext(StoreContext); if (!store) throw new Error("useStore requires StoreProvider"); return store; };

