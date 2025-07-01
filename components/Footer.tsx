import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Facebook, Linkedin } from 'lucide-react';
import { companyInfo, navigationItems, socialLinks } from '@/lib/data';

const iconMap = {
  Instagram,
  MessageCircle,
  Facebook,
  Linkedin,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl px-2 py-1 rounded">
                П
              </div>
              <div>
                <h3 className="text-lg font-bold">Полиграфи</h3>
                <p className="text-sm text-gray-400">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {navigationItems
                .find(item => item.title === "Услуги")
                ?.submenu?.map((service) => (
                  <li key={service.title}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                )) || []}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navigationItems
                .filter(item => !item.submenu)
                .map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{companyInfo.phone}</p>
                  <p className="text-gray-400 text-xs">WhatsApp: {companyInfo.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{companyInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{companyInfo.address}</p>
                  <p className="text-gray-400 text-xs">{companyInfo.metro}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{companyInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">{companyInfo.experience}</div>
              <p className="text-gray-400 text-sm">опыта работы</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{companyInfo.completedProjects}</div>
              <p className="text-gray-400 text-sm">выполненных проектов</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{companyInfo.satisfiedClients}</div>
              <p className="text-gray-400 text-sm">довольных клиентов</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">24/7</div>
              <p className="text-gray-400 text-sm">поддержка клиентов</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Полиграфи. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}