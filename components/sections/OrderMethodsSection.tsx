import { Phone, FileText, Mail, Calculator, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { orderMethods } from '@/lib/data';

const iconMap = {
  Phone,
  FileText,
  Mail,
  Calculator,
  MapPin
};

export default function OrderMethodsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Способы заказа
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Как сделать заказ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите удобный для вас способ оформления заказа
          </p>
        </div>

        {/* Order Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {orderMethods.map((method) => {
            const IconComponent = iconMap[method.icon as keyof typeof iconMap];
            
            return (
              <Card key={method.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {method.description}
                  </p>

                  {method.contact && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-blue-600">
                        {method.contact}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-green-600">
                      {method.processingTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Любой способ заказа — быстрый результат
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Независимо от выбранного способа заказа, мы гарантируем оперативную обработку 
              и качественное выполнение всех работ
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">10 мин</div>
                <div className="text-sm text-blue-100">Средняя обработка заявки</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">1 день</div>
                <div className="text-sm text-blue-100">Срочная печать</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm text-blue-100">Гарантия качества</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}