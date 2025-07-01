"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationItems, companyInfo } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{companyInfo.metro}</span>
              </div>
            </div>
            <div className="hidden sm:block text-xs">
              {companyInfo.workingHours}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-2xl px-3 py-2 rounded-lg">
              П
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Полиграфи</h1>
              <p className="text-xs text-gray-600">{companyInfo.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Заказать расчет</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => !item.submenu && setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className="p-2 text-gray-500"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSubmenu === item.title ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.submenu && openSubmenu === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Заказать расчет
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}