import React from "react";
import Link from "next/link";

type ImageObj = { src: string; alt: string };

type RelatedItem = { title: string; slug: string; images: ImageObj[] };

type UniversalDetailProps = {
  title: string;
  images: ImageObj[];
  description?: string;
  features?: string[];
  deliveryTime?: string;
  relatedProducts?: RelatedItem[];
  relatedServices?: RelatedItem[];
};

export default function UniversalDetail({
  title,
  images,
  description,
  features,
  deliveryTime,
  relatedProducts = [],
  relatedServices = [],
}: UniversalDetailProps) {
  return (
    <div className="max-w-2xl mx-auto py-10">
      {/* Image Gallery */}
      <div className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || title}
              className="h-56 w-56 object-cover rounded-lg border shadow-sm flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {description && <p className="mb-4 text-gray-700">{description}</p>}
      {deliveryTime && (
        <div className="mb-2 text-sm text-gray-500">
          Срок изготовления: {deliveryTime}
        </div>
      )}
      {features && features.length > 0 && (
        <ul className="list-disc pl-5 text-gray-600 mb-6">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Другие продукты</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="block bg-white rounded-lg border shadow hover:shadow-lg transition overflow-hidden min-w-[160px] max-w-[180px]"
              >
                <img
                  src={item.images[0]?.src}
                  alt={item.images[0]?.alt || item.title}
                  className="h-28 w-full object-cover"
                />
                <div className="p-2">
                  <div className="font-medium text-gray-900 text-sm">
                    {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Все услуги</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="block bg-white rounded-lg border shadow hover:shadow-lg transition overflow-hidden min-w-[160px] max-w-[180px]"
              >
                <img
                  src={item.images[0]?.src}
                  alt={item.images[0]?.alt || item.title}
                  className="h-28 w-full object-cover"
                />
                <div className="p-2">
                  <div className="font-medium text-gray-900 text-sm">
                    {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
