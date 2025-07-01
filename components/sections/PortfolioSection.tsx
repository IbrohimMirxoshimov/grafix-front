import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioItems } from '@/lib/data';

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">
            Наши работы
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Портфолио выполненных проектов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите на примеры наших работ и убедитесь в качестве нашей полиграфии
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{item.description}</p>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-gray-900"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Все проекты', 'Корпоративная айдентика', 'Меню и листовки', 'Информационные материалы', 'Приглашения', 'Рекламные материалы', 'Учебные материалы'].map((category) => (
            <Button
              key={category}
              variant={category === 'Все проекты' ? 'default' : 'outline'}
              className={`${
                category === 'Все проекты' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Хотите увидеть больше работ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              У нас есть еще множество успешных проектов. Посетите полную галерею наших работ 
              или свяжитесь с нами для обсуждения вашего проекта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/portfolio" className="flex items-center">
                  Все работы
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Обсудить проект
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}