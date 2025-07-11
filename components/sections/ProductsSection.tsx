import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";
// import { products } from '@/lib/data';

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4"
          >
            Наша продукция
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Более 40 видов полиграфической продукции
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От простых визиток до сложных корпоративных проектов — полный
            каталог нашей продукции
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 border hover:border-blue-200"
            >
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  {product.images[0].src ? (
                    <img
                      style={{
                        filter: "sepia(1) saturate(1000%) hue-rotate(180deg)",
                      }}
                      src={product.images[0].src}
                      alt={product.title}
                      className="object-contain w-8 h-8 mx-auto"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-white font-bold text-sm">
                      {product.title.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {product.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Популярные категории
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Визитки и карты",
                items: ["Визитки", "Пластиковые карты", "Дисконтные карты"],
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Рекламные материалы",
                items: ["Листовки", "Флаеры", "Брошюры", "Буклеты"],
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Корпоративная продукция",
                items: ["Бланки", "Папки", "Блокноты с логотипом"],
                color: "from-green-500 to-green-600",
              },
              {
                title: "Упаковка и этикетки",
                items: ["Коробки", "Наклейки", "Этикетки", "Пакеты"],
                color: "from-orange-500 to-orange-600",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${category.color} relative`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative p-6 h-full flex items-center">
                    <h4 className="text-white font-bold text-lg">
                      {category.title}
                    </h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Нужен индивидуальный продукт?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Если вы не нашли нужный продукт в списке, мы изготовим его
            специально для вас. Обсудим все детали и предложим оптимальное
            решение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Заказать индивидуальный продукт
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Скачать каталог
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
