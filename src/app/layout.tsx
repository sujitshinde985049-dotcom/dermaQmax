import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";
import { StoreProvider } from "@/components/store-provider";
import { WhatsApp } from "@/components/whatsapp";
import { siteConfig } from "@/config/site";
const manrope = Manrope({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: "DermaQ Max | Advanced Skin & Scalp Science", template: "%s | DermaQ Max" }, description: siteConfig.description, alternates: { canonical: "/" }, openGraph: { type: "website", title: "DermaQ Max", description: siteConfig.description, siteName: "DermaQ Max" }, twitter: { card: "summary", title: "DermaQ Max", description: siteConfig.description }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={manrope.className}><StoreProvider><Header/><main>{children}</main><Newsletter/><Footer/><WhatsApp/></StoreProvider></body></html>; }

