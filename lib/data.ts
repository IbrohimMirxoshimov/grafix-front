// Data for Grafix printing company website (Tashkent)
export const companyInfo = {
  name: "Grafix",
  tagline: "Печать тиража в день заказа",
  description:
    "Ведущая типография в Ташкенте с 2015 года. Специализируемся на срочной печати полиграфии — от визиток до каталогов. Предлагаем оперативную полиграфию на заказ по доступным ценам, без потери качества.",
  address: "Узбекистан, г. Ташкент, Улица Турккургон",
  phone: "+998 99 130-50-00",
  email: "info@grafix.uz",
  whatsapp: "+998991305000",
  workingHours: "Пн-Пт с 10:00 до 18:00",
  metro: "г. Ташкент",
  founded: "2015",
  experience: "10+ лет опыта",
  completedProjects: "345000+",
  satisfiedClients: "54000+",
  region: "Ташкент",
};

export const advantages = [
  {
    id: 1,
    title: "Печать тиража в день заказа",
    description: "Выполнение заказов любого объема за минимальные сроки",
  },
  {
    id: 2,
    title: "Собственный штат дизайнеров",
    description: "От корректировки макетов и до создания фирменного стиля",
  },
  {
    id: 3,
    title: "Оплата онлайн и безналичный расчет",
    description: "Оплатите онлайн и мы сразу же отправим заказ в печать",
  },
  {
    id: 4,
    title: "Оперативная доставка по Ташкенту",
    description: "Наши курьеры доставят заказ в любую точку Ташкента",
  },
];

export const orderMethods = [
  {
    id: 1,
    title: "Сделайте звонок",
    description: "Позвоните напрямую и получите консультацию",
    contact: "+998 99 130-50-00",
    processingTime: "Мгновенно",
    icon: "Phone",
  },
  {
    id: 2,
    title: "Заполните форму",
    description: "Заполните форму на сайте и мы перезвоним",
    processingTime: "10 мин",
    icon: "FileText",
  },
  {
    id: 3,
    title: "Отправьте письмо на e-mail",
    description: "Отправьте письмо с техническим заданием",
    contact: "info@grafix.uz",
    processingTime: "15 мин",
    icon: "Mail",
  },
  {
    id: 4,
    title: "Сделайте расчет на калькуляторе",
    description: "Рассчитайте заказ на онлайн-калькуляторе",
    processingTime: "1 мин",
    icon: "Calculator",
  },
  {
    id: 5,
    title: "Приезжайте в офис",
    description: "Личное посещение офиса",
    contact: "г. Ташкент, Улица Турккургон",
    icon: "MapPin",
  },
];

export const paymentMethods = [
  {
    id: 1,
    title: "Наличный расчёт",
    description: "Оплата в офисе при оформлении или получении заказа",
  },
  {
    id: 2,
    title: "Безналичный расчёт",
    description: "Для юридических лиц",
  },
  {
    id: 3,
    title: "Банковские карты",
    description: "Сервис приёма оплаты предоставлен PayAnyWay",
  },
];

export const deliveryInfo = {
  lightDelivery: {
    weight: "Менее 3 кг",
  },
  autoDelivery: {
    weight: "Более 5 кг",
    withinTTK: "В пределах ТТК",
    withinMKAD: "В пределах МКАД",
  },
};

export const printingTechnologies = [
  {
    id: 1,
    title: "Цифровая печать",
    description: "Для срочных заказов",
  },
  {
    id: 2,
    title: "Офсетная печать",
    description: "Для больших тиражей",
  },
  {
    id: 3,
    title: "Широкоформатная печать",
    description: "Для баннеров и плакатов",
  },
  {
    id: 4,
    title: "Шелкография",
    description: "Для нанесения на различные поверхности",
  },
];

export const promotions = [
  {
    id: 1,
    title: "СКИДКА 15% НА ПЕЧАТЬ ВИЗИТОК",
    condition: "при заказе от 1 000 штук",
    discount: "15%",
  },
];

const BASE_URL = "https://www.poligrafi.com";

export const products = [
  { title: "POS материалы", image: `${BASE_URL}/upload/uf/07f/pos.svg` },
  { title: "Листовки", image: `${BASE_URL}/upload/uf/f4b/listovki.svg` },
  { title: "Брошюры", image: `${BASE_URL}/upload/uf/002/broshur.svg` },
  { title: "Блокноты", image: `${BASE_URL}/upload/uf/69d/bloknot.svg` },
  { title: "Визитки", image: `${BASE_URL}/upload/uf/78f/vizitki.svg` },
  { title: "Буклеты", image: `${BASE_URL}/upload/uf/293/buklet.svg` },
  {
    title: "Меню для ресторанов",
    image: `${BASE_URL}/upload/uf/358/menu.svg`,
  },
  {
    title: "Дипломы и сертификаты",
    image: `${BASE_URL}/upload/uf/2bb/diplom.svg`,
  },
  { title: "Календари", image: `${BASE_URL}/upload/uf/ced/calenda.svg` },
  { title: "Каталоги", image: `${BASE_URL}/upload/uf/b9b/catalog.svg` },
  { title: "Книги", image: `${BASE_URL}/upload/uf/9c1/book.svg` },
  {
    title: "Наклейки, стикеры",
    image: `${BASE_URL}/upload/uf/b0d/naklej.svg`,
  },
  { title: "Открытки", image: `${BASE_URL}/upload/uf/74b/postcard.svg` },
  { title: "Пакеты", image: `${BASE_URL}/upload/uf/a85/paket.svg` },
  { title: "Папки", image: `${BASE_URL}/upload/uf/ba9/papki.svg` },
  {
    title: "Плакаты и постеры",
    image: `${BASE_URL}/upload/uf/5dd/plakat.svg`,
  },
];

export const servicesOffered = [
  "Брошюровка",
  "Вырубка",
  "Дизайн меню для ресторанов и кафе",
  "Дизайн полиграфии",
  "Интерьерная печать",
  "Ламинирование",
  "Офсетная печать",
  "Печать баннеров",
  "Печать большого тиража",
  "Печать на самоклеящейся пленке",
  "Твердый переплет книг",
  "Тиснение",
  "Цифровая печать",
  "Шелкография",
  "Широкоформатная печать",
];

export const services = [
  {
    id: 1,
    title: "Визитки",
    description: "Профессиональные визитки различных форматов и материалов",
    icon: "CreditCard",
    features: [
      "Различные материалы",
      "Глянцевая/матовая ламинация",
      "Тиснение",
      "Скругленные углы",
    ],
    deliveryTime: "1 день",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
    urgent: true,
  },
  {
    id: 2,
    title: "Листовки и флаеры",
    description: "Яркие рекламные материалы для продвижения вашего бизнеса",
    icon: "FileText",
    features: [
      "Цветная печать",
      "Различные форматы",
      "Плотная бумага",
      "Быстрый тираж",
    ],
    deliveryTime: "1 день",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
    urgent: true,
  },
  {
    id: 3,
    title: "Брошюры и каталоги",
    description: "Качественные брошюры для презентации товаров и услуг",
    icon: "Book",
    features: [
      "Профессиональная верстка",
      "Качественная бумага",
      "Различные форматы",
      "Сшивка на скобу/пружину",
    ],
    deliveryTime: "2-3 дня",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 4,
    title: "Календари",
    description: "Настенные и настольные календари с вашим дизайном",
    icon: "Calendar",
    features: [
      "Настенные/настольные",
      "Ламинация",
      "Пружина",
      "Индивидуальный дизайн",
    ],
    deliveryTime: "3-5 дней",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    id: 5,
    title: "Баннеры и вывески",
    description: "Широкоформатная печать для наружной рекламы",
    icon: "Monitor",
    features: ["Баннерная ткань", "Пленка", "Интерьерная печать", "Ламинация"],
    deliveryTime: "2-3 дня",
    image:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=400&q=80",
  },
  {
    id: 6,
    title: "Упаковка",
    description: "Дизайн и печать упаковочных материалов",
    icon: "Package",
    features: ["Коробки", "Пакеты", "Этикетки", "Индивидуальный дизайн"],
    deliveryTime: "3-5 дней",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
  },
  {
    id: 7,
    title: "Наклейки и этикетки",
    description: "Самоклеящиеся материалы любых размеров и форм",
    icon: "Tag",
    features: [
      "Различные материалы",
      "Фигурная вырубка",
      "Ламинация",
      "Индивидуальные размеры",
    ],
    deliveryTime: "1-2 дня",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    urgent: true,
  },
  {
    id: 8,
    title: "Канцелярия",
    description: "Фирменная канцелярия для вашего офиса",
    icon: "Paperclip",
    features: ["Бланки", "Папки", "Блокноты", "Ручки с логотипом"],
    deliveryTime: "2-4 дня",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    id: 9,
    title: "Меню для ресторанов",
    description: "Профессиональные меню для кафе и ресторанов",
    icon: "Utensils",
    features: [
      "Влагостойкие материалы",
      "Ламинация",
      "Различные размеры",
      "Индивидуальный дизайн",
    ],
    deliveryTime: "2-3 дня",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  },
  {
    id: 10,
    title: "Пластиковые карты",
    description: "Дисконтные и подарочные карты из пластика",
    icon: "CreditCard",
    features: ["Пластик 0.76мм", "Печать Silk", "Штрих-код", "Магнитная лента"],
    deliveryTime: "5-7 дней",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "Ресторан «Ташкент»",
    category: "Меню и листовки",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    description: "Дизайн и печать меню, листовок для ресторана узбекской кухни",
  },
  {
    id: 2,
    title: "IT компания «TechUz»",
    category: "Корпоративная айдентика",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80",
    description: "Визитки, бланки, презентационные материалы",
  },
  {
    id: 3,
    title: "Медицинский центр «Здоровье»",
    category: "Информационные материалы",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    description: "Брошюры, информационные стенды, календари",
  },
  {
    id: 4,
    title: "Свадебное агентство «Россошь»",
    category: "Приглашения",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "Эксклюзивные свадебные приглашения с золотым тиснением",
  },
  {
    id: 5,
    title: "Сеть магазинов «Исмалова»",
    category: "Рекламные материалы",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    description: "Листовки, баннеры, наклейки для сети магазинов",
  },
  {
    id: 6,
    title: "Образовательный центр «Знание»",
    category: "Учебные материалы",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    description: "Учебные пособия, сертификаты, дипломы",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Дилмурод Каримов",
    company: "Ресторан «Ташкент»",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    text: "Отличное качество печати и быстрое выполнение заказа. Меню получились очень красивыми! Работаем уже 3 года.",
    rating: 5,
  },
  {
    id: 2,
    name: "Дилноза Ташматова",
    company: "IT компания «TechUz»",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=100&q=80",
    text: "Профессиональный подход к работе. Помогли с дизайном корпоративной айдентики. Печать визиток в день заказа — это просто фантастика!",
    rating: 5,
  },
  {
    id: 3,
    name: "Бобур Рахимов",
    company: "Медицинский центр «Здоровье»",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "Сотрудничаем уже 5 лет. Всегда качественно и в срок. Собственные дизайнеры — это большой плюс. Рекомендую!",
    rating: 5,
  },
];

export const faqItems = [
  {
    id: 1,
    question: "Чем отличается ваша типография от других в Ташкенте?",
    answer:
      "Наша типография специализируется на срочной печати полиграфии — от визиток до каталогов. Мы предлагаем оперативную полиграфию на заказ по доступным ценам, без потери качества. Работаем с 2015 года и имеем собственный штат дизайнеров.",
  },
  {
    id: 2,
    question: "Можно ли у вас заказать печать полиграфии в сжатые сроки?",
    answer:
      "Да, срочная печать — одно из наших приоритетных направлений. Мы понимаем важность времени и предлагаем услуги оперативной полиграфии с готовностью за несколько часов. Печать тиража в день заказа - наше главное преимущество.",
  },
  {
    id: 3,
    question: "Какие виды продукции вы печатаете на заказ?",
    answer:
      "Типография «Grafix» выполняет печать листовок, буклетов, брошюр, упаковки и другой полиграфии на заказ. Работы подбираются индивидуально под ваш бизнес. Полный список включает более 40 видов продукции.",
  },
  {
    id: 4,
    question: "Какие технологии используются для оперативной полиграфии?",
    answer:
      "Мы применяем цифровую печать — идеальное решение для срочной полиграфии в Ташкенте. Такой подход позволяет быстро запустить тираж с минимальными затратами. Также используем офсетную печать для больших тиражей.",
  },
  {
    id: 5,
    question: "Можно ли у вас заказать полиграфию недорого?",
    answer:
      "Да, у нас действует прозрачная система расчета. Предлагаем услуги печати по конкурентным ценам — это отличное решение, если нужна недорогая полиграфия в Ташкенте. Есть система скидок для постоянных клиентов.",
  },
  {
    id: 6,
    question: "Где можно посмотреть цены на печать?",
    answer:
      "Цены указаны на сайте в соответствующем разделе. Вы также можете отправить запрос на расчет, и мы подберем оптимальный вариант по срокам и бюджету. Есть онлайн-калькулятор для быстрого расчета.",
  },
  {
    id: 7,
    question: "Предоставляете ли вы услуги дизайна?",
    answer:
      "Да, у нас есть собственный штат дизайнеров. Мы можем создать дизайн с нуля или доработать ваши материалы - от корректировки макетов до создания фирменного стиля.",
  },
  {
    id: 8,
    question: "Какие способы оплаты вы принимаете?",
    answer:
      "Мы принимаем наличный расчет в офисе, безналичный расчет для юридических лиц и оплату банковскими картами через PayAnyWay. Также есть возможность онлайн-оплаты.",
  },
  {
    id: 9,
    question: "Как осуществляется доставка по Ташкенту?",
    answer:
      "Наши курьеры доставят заказ в любую точку Ташкента. Стоимость доставки: менее 3 кг - 450 сум, автомобильная доставка в пределах ТТК - 1500 сум, в пределах МКАД - 2000 сум.",
  },
  {
    id: 10,
    question: "Можно ли заказать пробную печать?",
    answer:
      "Конечно! Мы можем сделать пробный оттиск перед запуском основного тиража для вашего одобрения. Это особенно важно для сложных проектов с особыми требованиями к цвету.",
  },
];

export const navigationItems = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Продукция",
    href: "/products",
    submenu: [
      { title: "Визитки", href: "/products/business-cards" },
      { title: "Листовки", href: "/products/flyers" },
      { title: "Брошюры", href: "/products/brochures" },
      { title: "Календари", href: "/products/calendars" },
      { title: "Баннеры", href: "/products/banners" },
      { title: "Упаковка", href: "/products/packaging" },
      { title: "Наклейки", href: "/products/stickers" },
      { title: "Меню", href: "/products/menu" },
    ],
  },
  {
    title: "Услуги",
    href: "/services",
    submenu: [
      { title: "Цифровая печать", href: "/services/digital-print" },
      { title: "Офсетная печать", href: "/services/offset-print" },
      { title: "Широкоформатная печать", href: "/services/large-format" },
      { title: "Дизайн полиграфии", href: "/services/design" },
      { title: "Брошюровка", href: "/services/binding" },
      { title: "Ламинирование", href: "/services/lamination" },
    ],
  },
  {
    title: "Цены",
    href: "/prices",
  },
  {
    title: "Портфолио",
    href: "/portfolio",
  },
  {
    title: "О компании",
    href: "/about",
  },
  {
    title: "Контакты",
    href: "/contact",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/grafix_tashkent",
    icon: "Instagram",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/998901234567",
    icon: "MessageCircle",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/grafix.tashkent",
    icon: "Facebook",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/grafix-tashkent",
    icon: "Linkedin",
  },
];

export const seoKeywords = [
  "типография ташкент",
  "печать визиток",
  "срочная печать",
  "полиграфия на заказ",
  "цифровая печать",
  "офсетная печать",
  "печать листовок",
  "печать брошюр",
  "печать буклетов",
  "печать календарей",
  "печать наклеек",
  "дизайн полиграфии",
  "доставка полиграфии",
  "недорогая полиграфия",
  "полиграфия ташкент",
  "типография ойбек",
  "срочная полиграфия ташкент",
];

export const blogPosts = [
  {
    id: 1,
    title: "Тренды в дизайне полиграфии 2024",
    excerpt:
      "Рассматриваем актуальные тенденции в дизайне полиграфической продукции на текущий год",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
    date: "15 марта 2024",
    readTime: "5 мин",
    category: "Дизайн",
  },
  {
    id: 2,
    title: "Офсетная vs Цифровая печать: как выбрать?",
    excerpt:
      "Подробное сравнение технологий печати и рекомендации по выбору для разных задач",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    date: "10 марта 2024",
    readTime: "7 мин",
    category: "Технологии",
  },
  {
    id: 3,
    title: "Как подготовить макет для печати",
    excerpt: "Практические советы по подготовке файлов для качественной печати",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
    date: "5 марта 2024",
    readTime: "6 мин",
    category: "Полиграфия",
  },
];
