import UniversalDetail from "@/components/UniversalDetail";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;
  const res = await fetch(`${baseUrl}/api/services/${params.slug}`);
  if (!res.ok) return {};
  const service = await res.json();
  return {
    title: `${service.title} | Графикс Типография`,
    description: `${service.description} Закажите услугу в типографии Графикс в Ташкенте.`,
    openGraph: {
      title: `${service.title} | Графикс Типография`,
      description: `${service.description} Закажите услугу в типографии Графикс в Ташкенте.`,
      url: `https://grafix.uz/services/${service.slug}`,
      type: "article",
      images: service.images,
    },
    alternates: {
      canonical: `https://grafix.uz/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  // Service fetch
  const res = await fetch(`${baseUrl}/api/services/${params.slug}`);
  if (!res.ok) return notFound();
  const service = await res.json();

  // Related services (boshqa service'lar, faqat o'zidan tashqari)
  const allServicesRes = await fetch(`${baseUrl}/api/services`);
  const allServices = await allServicesRes.json();
  const relatedServices = allServices.filter((s: any) => s.slug !== params.slug);

  // All products
  const allProductsRes = await fetch(`${baseUrl}/api/products`);
  const allProducts = await allProductsRes.json();

  const detail = {
    title: service.title,
    images: service.images,
    description: service.description,
    features: service.features,
    deliveryTime: service.deliveryTime,
    relatedServices,
    relatedProducts: allProducts,
  };
  return <UniversalDetail {...detail} />;
}
