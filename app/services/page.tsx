import { services } from "@/lib/data";
import Link from "next/link";
import { UniversalCard } from "@/components/ui/UniversalCard";
import {
  Book,
  Calendar,
  CreditCard,
  FileText,
  Monitor,
  Package,
  Paperclip,
  Tag,
  Utensils,
} from "lucide-react";

export const metadata = {
  title: "Услуги | Графикс Типография",
  description:
    "Услуги типографии Графикс: срочная печать, дизайн, брошюровка, офсетная и цифровая печать. Качественные полиграфические услуги в Ташкенте.",
  openGraph: {
    title: "Услуги | Графикс Типография",
    description:
      "Услуги типографии Графикс: срочная печать, дизайн, брошюровка, офсетная и цифровая печать. Качественные полиграфические услуги в Ташкенте.",
    url: "https://grafix.uz/services",
    type: "website",
    images: [
      {
        url: "/og-grafix.png",
        width: 1200,
        height: 630,
        alt: "Услуги Графикс",
      },
    ],
  },
  alternates: {
    canonical: "https://grafix.uz/services",
  },
};

export default function ServicesPage() {
  const iconMap = {
    CreditCard,
    FileText,
    Book,
    Calendar,
    Monitor,
    Package,
    Tag,
    Paperclip,
    Utensils,
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Услуги</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <UniversalCard
              key={service.slug}
              title={service.title}
              description={service.description}
              image={service.images[0]}
              icon={
                IconComponent ? (
                  <IconComponent className="h-6 w-6 text-blue-600" />
                ) : undefined
              }
              features={service.features}
              deliveryTime={service.deliveryTime}
              urgent={service.urgent}
              link={`/services/${service.slug}`}
              type="service"
            />
          );
        })}
      </div>
    </div>
  );
}
