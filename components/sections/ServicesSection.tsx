import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UniversalCard } from "@/components/ui/UniversalCard";
import { services } from "@/lib/data";
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
import Link from "next/link";

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

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4"
          >
            Наши услуги
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Полный спектр полиграфических услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От простых визиток до сложных полиграфических проектов — мы воплотим
            в жизнь любые ваши идеи
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <UniversalCard
                key={service.id}
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
                link={`/services/${service.id}`}
                type="service"
              />
            );
          })}
        </div>

        {/* Urgent Services Highlight */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                🚀 Срочная печать в день заказа
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Нужно срочно? Мы печатаем визитки, листовки и наклейки в день
                заказа!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter((service) => service.urgent)
                .map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl p-6 shadow-md"
                  >
                    <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-red-600 font-semibold mb-2">
                      По запросу
                    </p>
                    <p className="text-sm text-gray-600">
                      Готов: {service.deliveryTime}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Не нашли подходящую услугу?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Мы выполняем индивидуальные заказы любой сложности. Расскажите о
            вашем проекте, и мы найдем оптимальное решение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">Обсудить проект</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/portfolio">Посмотреть работы</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
