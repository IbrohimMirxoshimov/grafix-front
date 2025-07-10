import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://grafix.uz'),
  title: 'Grafix - Полиграфия в Ташкенте | Печать визиток, брошюр, листовок',
  description: 'Профессиональная полиграфия в Ташкенте с 2015 года. Качественная печать визиток, брошюр, листовок, баннеров. Быстрое выполнение заказов. Собственная дизайн-студия. Звоните: +998 99 130-50-00',
  keywords: 'полиграфия ташкент, печать визиток, типография ташкент, печать листовок, брошюры, дизайн печать, граффикс, grafix, цифровая печать, офсетная печать, календари, баннеры, упаковка, наклейки',
  authors: [{ name: 'Grafix' }],
  creator: 'Grafix',
  publisher: 'Grafix',
  robots: 'index, follow',
  openGraph: {
    title: 'Grafix - Полиграфия в Ташкенте | Печать визиток, брошюр',
    description: 'Профессиональная полиграфия в Ташкенте с 2015 года. Качественная печать визиток, брошюр, листовок, баннеров. Быстрое выполнение заказов.',
    url: 'https://grafix.uz',
    siteName: 'Grafix',
    images: [
      {
        url: '/og-grafix.png',
        width: 1200,
        height: 630,
        alt: 'Grafix - Полиграфия в Ташкенте',
      },
    ],
    locale: 'ru_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grafix - Полиграфия в Ташкенте',
    description: 'Профессиональная полиграфия в Ташкенте с 2015 года. Качественная печать визиток, брошюр, листовок, баннеров.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://grafix.uz',
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
              "name": "Grafix",
              "description": "Профессиональная полиграфия в Ташкенте с 2015 года",
              "url": "https://grafix.uz",
              "telephone": "+998-99-130-50-00",
              "email": "info@grafix.uz",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Улица Турккургон",
                "addressLocality": "Ташкент",
                "postalCode": "100000",
                "addressCountry": "UZ"
              },
              "openingHours": "Mo-Fr 10:00-18:00",
              "priceRange": "$$",
              "foundingDate": "2015",
              "serviceArea": {
                "@type": "City",
                "name": "Ташкент"
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
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Широкоформатная печать"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Дизайн услуги"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "1021"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}