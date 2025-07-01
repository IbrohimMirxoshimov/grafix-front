'use client';

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Users,
  Printer,
  Palette,
  Truck,
  CreditCard,
  FileText,
  Package,
  Award,
  Eye,
  MessageCircle,
  Calculator,
  Building,
  Zap,
  Shield,
  ArrowRight,
  Menu,
  X,
  Calendar,
  Bookmark,
  Gift,
  Image,
  Layers,
  Tag,
  Folder,
  Book,
  ShoppingBag,
  Scissors,
  Stamp,
  PaintBucket,
  Monitor,
  Banknote,
  Car,
  Home,
  ChevronDown,
  Plus,
  Minus,
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { icon: FileText, title: 'Визитки', description: 'Скидка 15% от 1000 шт.' },
    {
      icon: Book,
      title: 'Брошюры',
      description: 'Качественная печать любого формата',
    },
    {
      icon: Award,
      title: 'Дипломы и сертификаты',
      description: 'На премиум бумаге',
    },
    {
      icon: Eye,
      title: 'Листовки',
      description: 'Эффективные рекламные материалы',
    },
    { icon: Palette, title: 'Каталоги', description: 'Полноцветная печать' },
    { icon: Package, title: 'Коробки', description: 'Упаковочные материалы' },
    {
      icon: Calendar,
      title: 'Календари',
      description: 'Корпоративные и настенные',
    },
    {
      icon: Bookmark,
      title: 'Буклеты',
      description: 'Информационные материалы',
    },
    {
      icon: Gift,
      title: 'Открытки',
      description: 'Поздравительные и рекламные',
    },
    {
      icon: Image,
      title: 'Плакаты и постеры',
      description: 'Широкоформатная печать',
    },
    { icon: Layers, title: 'Блокноты', description: 'С логотипом и без' },
    {
      icon: Tag,
      title: 'Наклейки, стикеры',
      description: 'Любые формы и размеры',
    },
    { icon: Folder, title: 'Папки', description: 'Корпоративные папки' },
    {
      icon: ShoppingBag,
      title: 'Пакеты',
      description: 'Брендированные пакеты',
    },
    {
      icon: CreditCard,
      title: 'Пластиковые карты',
      description: 'Дисконтные карты',
    },
    {
      icon: FileText,
      title: 'Меню для ресторанов',
      description: 'Дизайн и печать',
    },
  ];

  const services = [
    {
      icon: Printer,
      title: 'Цифровая печать',
      description: 'Для срочных заказов и малых тиражей',
    },
    {
      icon: Layers,
      title: 'Офсетная печать',
      description: 'Для больших тиражей',
    },
    {
      icon: Monitor,
      title: 'Широкоформатная печать',
      description: 'Баннеры и плакаты',
    },
    {
      icon: PaintBucket,
      title: 'Шелкография',
      description: 'Нанесение на различные поверхности',
    },
    {
      icon: Palette,
      title: 'Дизайн полиграфии',
      description: 'От макета до готового изделия',
    },
    {
      icon: Scissors,
      title: 'Брошюровка',
      description: 'Различные виды переплета',
    },
    {
      icon: Stamp,
      title: 'Тиснение',
      description: 'Золотое и серебряное тиснение',
    },
    {
      icon: Shield,
      title: 'Ламинирование',
      description: 'Защита и улучшение внешнего вида',
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Печать в день заказа',
      description: 'Выполняем заказы любого объема за минимальные сроки',
    },
    {
      icon: Users,
      title: 'Собственный штат дизайнеров',
      description: 'От корректировки макетов до создания фирменного стиля',
    },
    {
      icon: CreditCard,
      title: 'Онлайн оплата',
      description: 'Оплачивайте онлайн и мы отправим заказ в печать',
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставляем заказы по всей Москве',
    },
  ];

  const orderMethods = [
    {
      icon: Phone,
      title: 'Сделайте звонок',
      description: 'Позвоните напрямую и получите консультацию',
      contact: '8 (495) 789-47-35',
      time: 'Мгновенно',
    },
    {
      icon: MessageCircle,
      title: 'Заполните форму',
      description: 'Заполните форму на сайте и мы перезвоним',
      time: '10 мин',
    },
    {
      icon: Mail,
      title: 'Отправьте email',
      description: 'Отправьте письмо с техническим заданием',
      contact: '[email protected]',
      time: '15 мин',
    },
    {
      icon: Calculator,
      title: 'Онлайн калькулятор',
      description: 'Рассчитайте заказ на онлайн-калькуляторе',
      time: '1 мин',
    },
    {
      icon: Building,
      title: 'Приезжайте в офис',
      description: 'Личное посещение офиса',
      contact: 'м. Волгоградский Проспект',
      time: 'В рабочее время',
    },
  ];

  const paymentMethods = [
    {
      icon: Banknote,
      title: 'Наличный расчёт',
      description: 'Оплата в офисе при оформлении или получении заказа',
    },
    {
      icon: CreditCard,
      title: 'Банковские карты',
      description: 'Сервис приёма оплаты предоставлен PayAnyWay',
    },
    {
      icon: Building,
      title: 'Безналичный расчёт',
      description: 'Для юридических лиц',
    },
  ];

  const deliveryOptions = [
    {
      icon: Package,
      title: 'Лёгкие заказы (до 3 кг)',
      price: '450 руб.',
      description: 'Курьерская доставка по Москве',
    },
    {
      icon: Car,
      title: 'В пределах ТТК',
      price: '1 500 руб.',
      description: 'Автомобильная доставка (более 5 кг)',
    },
    {
      icon: Truck,
      title: 'В пределах МКАД',
      price: '2 000 руб.',
      description: 'Автомобильная доставка (более 5 кг)',
    },
    {
      icon: Home,
      title: 'Самовывоз',
      price: 'Бесплатно',
      description: 'Из нашего офиса',
    },
  ];

  const faqs = [
    {
      question: 'Чем отличается ваша типография от других в Москве?',
      answer:
        'Наша типография специализируется на срочной печати полиграфии — от визиток до каталогов. Мы предлагаем оперативную полиграфию на заказ по доступным ценам, без потери качества.',
    },
    {
      question: 'Можно ли у вас заказать печать полиграфии в сжатые сроки?',
      answer:
        'Да, срочная печать — одно из наших приоритетных направлений. Мы понимаем важность времени и предлагаем услуги оперативной полиграфии с готовностью за несколько часов.',
    },
    {
      question: 'Какие виды продукции вы печатаете на заказ?',
      answer:
        'Типография «Полиграфи» выполняет печать листовок, буклетов, брошюр, упаковки и другой полиграфии на заказ. Работы подбираются индивидуально под ваш бизнес.',
    },
    {
      question: 'Какие технологии используются для оперативной полиграфии?',
      answer:
        'Мы применяем цифровую печать — идеальное решение для срочной полиграфии в Москве. Такой подход позволяет быстро запустить тираж с минимальными затратами.',
    },
    {
      question: 'Можно ли у вас заказать полиграфию недорого?',
      answer:
        'Да, у нас действует прозрачная система расчета. Предлагаем услуги печати по конкурентным ценам — это отличное решение, если нужна недорогая полиграфия в Москве.',
    },
    {
      question: 'Где можно посмотреть цены на печать?',
      answer:
        'Цены указаны на сайте в соответствующем разделе. Вы также можете отправить запрос на расчет, и мы подберем оптимальный вариант по срокам и бюджету.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Printer className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Poligrafi
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#products"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Продукция
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#advantages"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Преимущества
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+74957894735"
                className="text-blue-600 font-semibold"
              >
                8 (495) 789-47-35
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Заказать звонок
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#products"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Продукция
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Услуги
              </a>
              <a
                href="#advantages"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Преимущества
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Контакты
              </a>
              <a
                href="tel:+74957894735"
                className="block px-3 py-2 text-blue-600 font-semibold"
              >
                8 (495) 789-47-35
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Полиграфия в Москве
              <span className="block text-blue-600">от профессионалов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Срочная печать визиток, брошюр, каталогов и другой полиграфии с
              2005 года. Собственное производство, быстрые сроки, доступные
              цены.
            </p>

            {/* Special Offer */}
            <div className="bg-orange-100/70 backdrop-blur-sm border border-orange-200/50 rounded-xl p-4 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center">
                <Star className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-orange-800 font-semibold">
                  СКИДКА 15% НА ВИЗИТКИ от 1000 шт.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                Рассчитать заказ
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Посмотреть примеры
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2005</div>
                <div className="text-gray-600">год основания</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">прием заказов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">в срок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный каталог полиграфической продукции для любых задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современные технологии печати и полиграфические услуги
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-teal-100 rounded-lg p-3 w-fit mb-4 group-hover:bg-teal-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 flex items-center text-teal-600 font-medium group-hover:translate-x-2 transition-transform">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        id="advantages"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Профессиональный подход к каждому заказу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-blue-100">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Order Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Способы заказа
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите удобный для вас способ оформления заказа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {orderMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {method.description}
                  </p>
                  {method.contact && (
                    <p className="text-blue-600 font-semibold mb-2 text-sm">
                      {method.contact}
                    </p>
                  )}
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {method.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment & Delivery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Способы оплаты
              </h2>
              <div className="space-y-6">
                {paymentMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-lg p-3 mr-4">
                          <IconComponent className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {method.title}
                          </h3>
                          <p className="text-gray-600">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Options */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Доставка
              </h2>
              <div className="space-y-6">
                {deliveryOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="bg-purple-100 rounded-lg p-3 mr-4">
                            <IconComponent className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {option.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {option.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">
                            {option.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Наш офис
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Адрес:</p>
                      <p className="text-gray-600">
                        115088, Россия, г. Москва, ул. Шарикоподшипниковская, д.
                        13, стр. 46
                      </p>
                      <p className="text-sm text-gray-500">
                        м. Волгоградский Проспект / МЦК "Дубровка"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Телефон:</p>
                      <a
                        href="tel:+74957894735"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        8 (495) 789-47-35
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">WhatsApp:</p>
                      <a
                        href="https://wa.me/79150678261"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +7 915 067-82-61
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Email:</p>
                      <a
                        href="mailto:[email protected]"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        [email protected]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Режим работы:</p>
                      <p className="text-gray-600">Пн-Пт с 10:00 до 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Быстрый заказ
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Услуга
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm">
                      <option>Выберите услугу</option>
                      <option>Визитки</option>
                      <option>Брошюры</option>
                      <option>Листовки</option>
                      <option>Каталоги</option>
                      <option>Календари</option>
                      <option>Буклеты</option>
                      <option>Открытки</option>
                      <option>Плакаты</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Комментарий
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Опишите ваш заказ"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Отправить заказ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Printer className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Poligrafi</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональная полиграфия в Москве с 2005 года
              </p>
              <div className="text-sm text-gray-400">
                <p>Работаем с физическими и юридическими лицами</p>
                <p>Специализация: срочная печать полиграфии</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Визитки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Брошюры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Листовки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Каталоги
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Календари
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Наклейки
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Цифровая печать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Офсетная печать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Широкоформатная печать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Дизайн полиграфии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Брошюровка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ламинирование
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>8 (495) 789-47-35</p>
                <p>WhatsApp: +7 915 067-82-61</p>
                <p>[email protected]</p>
                <p>Пн-Пт с 10:00 до 18:00</p>
                <p className="text-sm">м. Волгоградский Проспект</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                &copy; 2025 Poligrafi. Все права защищены.
              </p>
              <div className="mt-4 md:mt-0 text-sm text-gray-400">
                <span>
                  Типография в Москве • Срочная печать • Полиграфия на заказ
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
