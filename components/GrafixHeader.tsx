'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Menu, X } from 'lucide-react'

const BASE_URL = 'https://www.grafix.uz'

export default function GrafixHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <a href="tel:+998991305000" className="hover:text-blue-200">
                +998 99 130-50-00
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <a href="mailto:info@grafix.uz" className="hover:text-blue-200">
                info@grafix.uz
              </a>
            </div>
          </div>
          <div className="text-sm">
            Пн-Пт с 10:00 до 18:00
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Grafix</h1>
              <p className="text-sm text-gray-600">Типография</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
              Продукция
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
              Услуги
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
              Портфолио
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
              Отзывы
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Контакты
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://web.whatsapp.com/send?phone=998991305000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Заказать звонок
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#products" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Продукция
              </Link>
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                href="#portfolio" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Портфолио
              </Link>
              <Link 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <a
                  href="https://web.whatsapp.com/send?phone=998991305000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  WhatsApp
                </a>
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Заказать звонок
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}