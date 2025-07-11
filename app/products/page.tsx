import { products } from '@/lib/data';
import Link from 'next/link';
import { UniversalCard } from '@/components/ui/UniversalCard';

export const metadata = {
  title: 'Продукция | Графикс Типография',
  description: 'Продукция типографии Графикс: визитки, буклеты, каталоги и другие полиграфические изделия. Быстрая и качественная печать в Ташкенте.',
  openGraph: {
    title: 'Продукция | Графикс Типография',
    description: 'Продукция типографии Графикс: визитки, буклеты, каталоги и другие полиграфические изделия. Быстрая и качественная печать в Ташкенте.',
    url: 'https://grafix.uz/products',
    type: 'website',
    images: [
      {
        url: '/og-grafix.png',
        width: 1200,
        height: 630,
        alt: 'Продукция Графикс',
      },
    ],
  },
  alternates: {
    canonical: 'https://grafix.uz/products',
  },
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Продукция</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {products.map((product) => (
          <UniversalCard
            key={product.slug}
            title={product.title}
            description={product.description}
            image={product.images[0]}
            link={`/products/${product.slug}`}
            type="product"
          />
        ))}
      </div>
    </div>
  );
} 