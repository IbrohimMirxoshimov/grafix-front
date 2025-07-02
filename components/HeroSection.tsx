const BASE_URL = 'https://www.poligrafi.com'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      {/* Hero Content */}
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
              href="tel:+998991305000"
              className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Позвонить: +998 99 130-50-00
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
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                20+
              </div>
              <div className="text-lg text-blue-200">
                лет на рынке печати
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                345,000+
              </div>
              <div className="text-lg text-blue-200">
                выполненных заказов
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                54,000+
              </div>
              <div className="text-lg text-blue-200">
                довольных клиентов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}