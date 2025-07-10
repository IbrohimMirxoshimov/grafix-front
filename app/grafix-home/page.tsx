'use client'

import { useState } from 'react'

export const BASE_URL = 'https://www.poligrafi.com'

export default function GrafixHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePortfolio, setActivePortfolio] = useState(0)

  // JSON data embedded (in a real app, this would be imported)
  const companyInfo = {
    name: "Типография Grafix",
    phone: "+998 99 130-50-00",
    email: "t.me/mediamaxuzb",
    address: "г. Ташкент, Улица Турккургон",
    workingHours: "Пн-Пт с 10:00 до 18:00"
  }

  const advantages = [
    {
      title: "Печать тиража в день заказа",
      description: "Выполнение заказов любого объема за минимальные сроки",
      icon: `${BASE_URL}/upload/iblock/6fe/6fe13d04c02716ecaa0a54049bf2af90.svg`
    },
    {
      title: "Собственный штат дизайнеров",
      description: "От корректировки макетов и до создания фирменного стиля",
      icon: `${BASE_URL}/upload/iblock/ce2/ce297d06bb428b3b5a2bdb4a1ad8427c.svg`
    },
    {
      title: "Оплата онлайн и безналичный расчет",
      description: "Оплатите онлайн и мы сразу же отправим заказ в печать",
      icon: `${BASE_URL}/upload/iblock/ffa/ffa7bf4009d3f3998b27fb80ea562633.svg`
    },
    {
      title: "Оперативная доставка по Ташкенту",
      description: "Наши курьеры доставят заказ в любую точку Ташкента",
      icon: `${BASE_URL}/upload/iblock/49c/49c2b76fdff7581cd4150ae1cc9555c7.svg`
    }
  ]

  const products = [
    { title: "POS материалы", image: `${BASE_URL}/upload/uf/07f/pos.svg` },
    { title: "Листовки", image: `${BASE_URL}/upload/uf/f4b/listovki.svg` },
    { title: "Брошюры", image: `${BASE_URL}/upload/uf/002/broshur.svg` },
    { title: "Блокноты", image: `${BASE_URL}/upload/uf/69d/bloknot.svg` },
    { title: "Визитки", image: `${BASE_URL}/upload/uf/78f/vizitki.svg` },
    { title: "Буклеты", image: `${BASE_URL}/upload/uf/293/buklet.svg` },
    { title: "Меню для ресторанов", image: `${BASE_URL}/upload/uf/358/menu.svg` },
    { title: "Дипломы и сертификаты", image: `${BASE_URL}/upload/uf/2bb/diplom.svg` },
    { title: "Календари", image: `${BASE_URL}/upload/uf/ced/calenda.svg` },
    { title: "Каталоги", image: `${BASE_URL}/upload/uf/b9b/catalog.svg` },
    { title: "Книги", image: `${BASE_URL}/upload/uf/9c1/book.svg` },
    { title: "Наклейки, стикеры", image: `${BASE_URL}/upload/uf/b0d/naklej.svg` },
    { title: "Открытки", image: `${BASE_URL}/upload/uf/74b/postcard.svg` },
    { title: "Пакеты", image: `${BASE_URL}/upload/uf/a85/paket.svg` },
    { title: "Папки", image: `${BASE_URL}/upload/uf/ba9/papki.svg` },
    { title: "Плакаты и постеры", image: `${BASE_URL}/upload/uf/5dd/plakat.svg` }
  ]

  const portfolioCategories = [
    {
      title: "Листовки",
      examples: [
        `${BASE_URL}/upload/resize_cache//779/270_270_2/Листовки_listovki-7.jpg`,
        `${BASE_URL}/upload/resize_cache//f21/270_270_2/Листовки_listovki-5.jpg`,
        `${BASE_URL}/upload/resize_cache//a73/270_270_2/Листовки_listovki-4.jpg`,
        `${BASE_URL}/upload/resize_cache//436/270_270_2/Листовки_listovki-3.jpg`
      ]
    },
    {
      title: "Брошюры",
      examples: [
        `${BASE_URL}/upload/resize_cache//5ef/270_270_2/Брошюры_broshura-0349.jpg`,
        `${BASE_URL}/upload/resize_cache//ec6/270_270_2/Брошюры_broshura-0346.jpg`,
        `${BASE_URL}/upload/resize_cache//778/270_270_2/Брошюры_broshura-0333.jpg`,
        `${BASE_URL}/upload/resize_cache//406/270_270_2/Брошюры_broshura-0045.jpg`
      ]
    },
    {
      title: "Визитки", 
      examples: [
        `${BASE_URL}/upload/resize_cache//e2d/270_270_2/Визитки_shelk_pt_1.jpg`,
        `${BASE_URL}/upload/resize_cache//23a/270_270_2/Визитки_shelko-11-big.jpg`,
        `${BASE_URL}/upload/resize_cache//824/270_270_2/Визитки_vizitka-shelkographiya-1.jpg`,
        `${BASE_URL}/upload/resize_cache//181/270_270_2/Визитки_vizitka-shelkographiya-3.jpg`
      ]
    }
  ]

  const testimonials = [
    {
      name: "Фарида Каримова",
      date: "28.02.2025",
      text: "Типография помогла нам с будущим супругом симпатично оформить приглашения на свадьбу, вовремя получить весь тираж и хорошо сэкономить на печати. Получились действительно запоминающиеся мини-открытки с внятно поданной информацией о предстоящем торжестве."
    },
    {
      name: "Бобур Рахимов",
      date: "12.03.2025",
      text: "После сотрудничества с типографией наша компания обзавелась фирменными пакетами с логотипом. Такая упаковочная продукция, выдержанная в сдержанном цветовом оформлении, позволяет презентовать образцы нашей продукции деловым партнерам и создавать промо-акции с раздачей приятных подарков."
    },
    {
      name: "Дилдора Тошматова",
      date: "25.01.2023", 
      text: "Обратилась в типографию, чтобы напечатать черно-белые листовки с уже готовым оформлением. Была приятно удивлена стоимостью услуги и высоким качеством исполнения. Листовки приятно держать в руках и предлагать их потенциальным клиентам."
    }
  ]

  const faqData = [
    {
      question: "Чем отличается ваша типография от других в Ташкенте?",
      answer: "Наша типография специализируется на срочной печати полиграфии — от визиток до каталогов. Мы предлагаем оперативную полиграфию на заказ по доступным ценам, без потери качества."
    },
    {
      question: "Можно ли у вас заказать печать полиграфии в сжатые сроки?",
      answer: "Да, срочная печать — одно из наших приоритетных направлений. Мы понимаем важность времени и предлагаем услуги оперативной полиграфии с готовностью за несколько часов."
    },
    {
      question: "Какие виды продукции вы печатаете на заказ?",
      answer: "Типография «Grafix» выполняет печать листовок, буклетов, брошюр, упаковки и другой полиграфии на заказ. Работы подбираются индивидуально под ваш бизнес."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top contact bar */}
        <div className="bg-blue-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>📞 {companyInfo.phone}</span>
              <span>✉️ {companyInfo.email}</span>
            </div>
            <div className="text-sm">{companyInfo.workingHours}</div>
          </div>
        </div>

        {/* Main header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Grafix</h1>
                <p className="text-sm text-gray-600">Типография</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">Продукция</a>
              <a href="#advantages" className="text-gray-700 hover:text-blue-600 font-medium">Преимущества</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Портфолио</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://web.whatsapp.com/send?phone=998991305000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Заказать звонок
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t">
              <nav className="flex flex-col gap-4">
                <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Продукция</a>
                <a href="#advantages" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Преимущества</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Портфолио</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Контакты</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Типография <span className="text-yellow-300">Grafix</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Печать тиража в день заказа
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Типография полного цикла «Grafix» оказывает полиграфические услуги в Ташкенте по низким ценам
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Позвонить: {companyInfo.phone}
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=998991305000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Promotion Banner */}
        <div 
          className="relative bg-cover bg-center py-16"
          style={{
            backgroundImage: `url(${BASE_URL}/upload/iblock/e04/33333.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-300">
              СКИДКА 15%
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              НА ПЕЧАТЬ ВИЗИТОК
            </h3>
            <p className="text-lg mb-8 text-gray-200">
              Скидка действует при заказе от 1 000 штук
            </p>
            <a
              href="#contact"
              className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Заказать со скидкой
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-blue-900 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">20+</div>
                <div className="text-lg text-blue-200">лет на рынке печати</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">345,000+</div>
                <div className="text-lg text-blue-200">выполненных заказов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">54,000+</div>
                <div className="text-lg text-blue-200">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Преимущества нашей компании
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={advantage.icon} alt={advantage.title} className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Наша продукция
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <div key={index} className="text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <img src={product.image} alt={product.title} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Примеры работ
          </h2>
          
          {/* Portfolio Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-4">
              {portfolioCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActivePortfolio(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activePortfolio === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioCategories[activePortfolio].examples.map((image, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={image} alt={`Example ${index + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Отзывы наших клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-gray-800">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Свяжитесь с нами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">📞</span>
                  <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-yellow-300">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">✉️</span>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-yellow-300">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">📍</span>
                  <span>{companyInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-300">🕒</span>
                  <span>{companyInfo.workingHours}</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://web.whatsapp.com/send?phone=998991305000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 rounded-lg text-gray-800"
                  required
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 rounded-lg text-gray-800"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg text-gray-800"
                />
                <textarea
                  placeholder="Комментарий"
                  rows={4}
                  className="w-full p-3 rounded-lg text-gray-800"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <h3 className="text-xl font-bold">Grafix</h3>
            </div>
            <p className="text-gray-400 mb-4">
              © Grafix.uz, 2015-2025. Все права защищены.
            </p>
            <div className="flex justify-center gap-6">
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white">
                {companyInfo.phone}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-white">
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}