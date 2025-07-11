import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CreditCard, FileText, Book, Calendar, Monitor, Package, Tag, Paperclip, Clock, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/lib/data';

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
          <Badge variant="secondary" className="mb-4">
            Наши услуги
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Полный спектр полиграфических услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От простых визиток до сложных полиграфических проектов — мы воплотим в жизнь любые ваши идеи
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardHeader className="pb-1 px-2 pt-2">
                  <div className="relative h-36 mb-2 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="bg-white/90 backdrop-blur-sm p-1 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    {service.urgent && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="destructive" className="bg-red-500 text-white px-2 py-0.5 text-xs">
                          Срочно
                        </Badge>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 px-2 pb-1">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.deliveryTime}
                      </div>
                    </div>
                    
                    <ul className="space-y-0.5">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{service.features.length - 3} дополнительных опций
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 px-2 pb-2">
                  <Button asChild className="w-full group-hover:bg-blue-700 transition-colors py-1.5">
                    <Link href={`/services/${service.id}`} className="flex items-center justify-center">
                      Подробнее
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
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
                Нужно срочно? Мы печатаем визитки, листовки и наклейки в день заказа!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter(service => service.urgent)
                .map((service) => (
                  <div key={service.id} className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                    <p className="text-red-600 font-semibold mb-2">По запросу</p>
                    <p className="text-sm text-gray-600">Готов: {service.deliveryTime}</p>
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
            Мы выполняем индивидуальные заказы любой сложности. Расскажите о вашем проекте, 
            и мы найдем оптимальное решение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/contact">
                Обсудить проект
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/portfolio">
                Посмотреть работы
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}