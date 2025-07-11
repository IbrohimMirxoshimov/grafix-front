import UniversalDetail from "@/components/UniversalDetail";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/products/${params.slug}`);
  if (!res.ok) return {};
  const product = await res.json();
  return {
    title: `${product.title} | Графикс Типография`,
    description: `Печать и изготовление: ${product.title}. Закажите в типографии Графикс в Ташкенте. Качественно, быстро, доступно!`,
    openGraph: {
      title: `${product.title} | Графикс Типография`,
      description: `Печать и изготовление: ${product.title}. Закажите в типографии Графикс в Ташкенте. Качественно, быстро, доступно!`,
      url: `https://grafix.uz/products/${product.slug}`,
      type: "article",
      images: product.images,
    },
    alternates: {
      canonical: `https://grafix.uz/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  // Product fetch
  const res = await fetch(`${baseUrl}/api/products/${params.slug}`);
  if (!res.ok) return notFound();
  const product = await res.json();

  // Related products (boshqa productlar, faqat o'zidan tashqari)
  const allProductsRes = await fetch(`${baseUrl}/api/products`);
  const allProducts = await allProductsRes.json();
  const relatedProducts = allProducts.filter((p: any) => p.slug !== params.slug);

  // All services
  const allServicesRes = await fetch(`${baseUrl}/api/services`);
  const allServices = await allServicesRes.json();

  const detail = {
    title: product.title,
    images: product.images,
    description: product.description,
    features: product.features,
    deliveryTime: product.deliveryTime,
    relatedProducts,
    relatedServices: allServices,
  };
  return <UniversalDetail {...detail} />;
}
