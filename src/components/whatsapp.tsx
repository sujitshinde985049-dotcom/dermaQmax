import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
export function WhatsApp() { if (!siteConfig.whatsapp) return null; return <a className="whatsapp" href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a> }
