import Image from "next/image";
export function ProductArt({ src, name, priority = false }: { src: string; name: string; priority?: boolean }) {
  return <div className="product-art"><div className="art-orbit" /><Image src={src} alt={`${name} packaging placeholder`} fill sizes="(max-width: 768px) 80vw, 420px" priority={priority} className="object-contain p-8" /></div>;
}

