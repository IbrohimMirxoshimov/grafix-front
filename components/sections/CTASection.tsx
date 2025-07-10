import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import YandexMap from '@/components/YandexMap';
import { companyInfo } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Свяжитесь с нами сегодня и получите качественную полиграфию в срок
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Company Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Наш офис
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адрес</h4>
                    <p className="text-blue-100">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Телефон</h4>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="https://t.me/mediamaxuzb"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      t.me/mediamaxuzb
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Режим работы</h4>
                    <p className="text-blue-100">{companyInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Почему выбирают нас
              </h3>
              
              <ul className="space-y-4">
                {[
                  'Опыт работы с 2015 года',
                  'Современное оборудование',
                  'Собственная дизайн-студия',
                  'Быстрые сроки выполнения',
                  'Гарантия качества',
                  'Доставка по Ташкенту'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Как нас найти
              </h3>
              <YandexMap className="h-48" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}