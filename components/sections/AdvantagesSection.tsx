import { CheckCircle, Zap, Users, CreditCard, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { advantages } from '@/lib/data';

const iconMap = {
  1: Zap,
  2: Users, 
  3: CreditCard,
  4: Truck
};

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Наши преимущества
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Типография «Полиграфи» — ваш надежный партнер в мире полиграфии
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => {
            const IconComponent = iconMap[advantage.id as keyof typeof iconMap];
            
            return (
              <Card key={advantage.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>

                  <div className="mt-6 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-green-600">Гарантировано</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Убедитесь в качестве наших услуг
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Мы предлагаем пробную печать, чтобы вы могли оценить качество до основного тиража
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Заказать пробную печать
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}