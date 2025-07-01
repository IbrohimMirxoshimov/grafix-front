import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poligrafi - Полиграфия в Москве | Срочная печать визиток, брошюр, каталогов',
  description: 'Профессиональная полиграфия в Москве с 2005 года. Срочная печать визиток, брошюр, листовок, каталогов. Скидка 15% на визитки от 1000 шт. Доставка по Москве. Звоните: 8 (495) 789-47-35',
  keywords: 'типография москва, печать визиток, срочная печать, полиграфия на заказ, цифровая печать, офсетная печать, печать листовок, печать брошюр, печать буклетов, печать календарей, печать наклеек, дизайн полиграфии, доставка полиграфии, недорогая полиграфия',
  authors: [{ name: 'Poligrafi' }],
  creator: 'Poligrafi',
  publisher: 'Poligrafi',
  robots: 'index, follow',
  openGraph: {
    title: 'Poligrafi - Полиграфия в Москве | Срочная печать',
    description: 'Профессиональная полиграфия в Москве с 2005 года. Срочная печать визиток, брошюр, листовок, каталогов. Скидка 15% на визитки от 1000 шт.',
    url: 'https://poligrafi.com',
    siteName: 'Poligrafi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Poligrafi - Полиграфия в Москве',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poligrafi - Полиграфия в Москве',
    description: 'Профессиональная полиграфия в Москве с 2005 года. Срочная печать визиток, брошюр, листовок, каталогов.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://poligrafi.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrintingService",
              "name": "Poligrafi",
              "description": "Профессиональная полиграфия в Москве с 2005 года",
              "url": "https://poligrafi.com",
              "telephone": "+7-495-789-47-35",
              "email": "[email protected]",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Шарикоподшипниковская, д. 13, стр. 46",
                "addressLocality": "Москва",
                "postalCode": "115088",
                "addressCountry": "RU"
              },
              "openingHours": "Mo-Fr 10:00-18:00",
              "priceRange": "$$",
              "foundingDate": "2005",
              "serviceArea": {
                "@type": "City",
                "name": "Москва"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Полиграфические услуги",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Печать визиток"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Печать брошюр"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Печать листовок"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}