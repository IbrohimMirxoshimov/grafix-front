import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import React from "react";

interface UniversalCardProps {
  title: string;
  description?: string;
  image: { src: string; alt: string };
  icon?: React.ReactNode;
  features?: string[];
  deliveryTime?: string;
  urgent?: boolean;
  link: string;
  type: "service" | "product";
}

export function UniversalCard({
  title,
  description,
  image,
  icon,
  features,
  deliveryTime,
  urgent,
  link,
  type,
}: UniversalCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all rounded-xl duration-300 border shadow hover:-translate-y-1">
      <CardHeader className="pb-1 px-3 pt-3">
        <div className="relative h-36 mb-2 rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          {icon && (
            <div className="absolute top-2 left-2">
              <div className="bg-white/90 backdrop-blur-sm p-1 rounded-lg">
                {icon}
              </div>
            </div>
          )}
          {urgent && (
            <div className="absolute top-2 right-2">
              <Badge
                variant="destructive"
                className="bg-red-500 text-white px-2 py-0.5 text-xs"
              >
                Срочно
              </Badge>
            </div>
          )}
        </div>
        <h3
          className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-lg`}
        >
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        )}
      </CardHeader>

      {type === "service" && (
        <CardContent className="pt-0 px-3 pb-1">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              {deliveryTime && (
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {deliveryTime}
                </div>
              )}
            </div>
            {features && features.length > 0 && (
              <ul className="space-y-0.5">
                {features.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-sm text-gray-500">
                    +{features.length - 3} дополнительных опций
                  </li>
                )}
              </ul>
            )}
          </div>
        </CardContent>
      )}

      <CardFooter className="pt-0 px-3 pb-3">
        <Button
          asChild
          className="w-full group-hover:bg-blue-700 transition-colors py-1.5"
        >
          <Link
            href={link}
            className="flex items-center justify-center"
          >
            Подробнее
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UniversalCard;
