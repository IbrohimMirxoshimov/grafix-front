'use client';

import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';

interface YandexMapProps {
  className?: string;
}

export default function YandexMap({ className = '' }: YandexMapProps) {
  const coordinates = [41.33898, 69.265815]; // Grafix office coordinates

  return (
    <div className={`w-full h-64 rounded-lg overflow-hidden ${className}`}>
      <YMaps>
        <Map
          defaultState={{
            center: coordinates,
            zoom: 15,
          }}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={coordinates}
            properties={{
              balloonContent: `
                <div style="padding: 10px;">
                  <h3 style="margin: 0 0 5px 0; font-weight: bold;">Grafix</h3>
                  <p style="margin: 0 0 5px 0;">Улица Турккургон</p>
                  <p style="margin: 0 0 5px 0;">Ташкент, Узбекистан</p>
                  <p style="margin: 0;">+998 99 130-50-00</p>
                </div>
              `,
            }}
            options={{
              preset: 'islands#blueStretchyIcon',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}