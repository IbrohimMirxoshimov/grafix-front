"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { services, companyInfo } from '@/lib/data';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Спасибо за обращение!
            </h3>
            <p className="text-gray-600">
              Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-900">
          Быстрый заказ
        </CardTitle>
        <p className="text-center text-gray-600">
          Заполните форму и мы свяжемся с вами
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+998 (__) ___-__-__"
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="service">Услуга</Label>
            <Select onValueChange={(value: string) => handleInputChange('service', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Комментарий</Label>
            <Textarea
              id="message"
              placeholder="Расскажите о ваших требованиях..."
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', e.target.value)}
              rows={4}
              className="mt-1"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700" 
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Отправляем...
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="h-4 w-4 mr-2" />
                Отправить заказ
              </div>
            )}
          </Button>

          <div className="text-center space-y-2 pt-4 border-t">
            <p className="text-sm text-gray-600">Или свяжитесь напрямую:</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center text-blue-600 hover:text-blue-700 text-sm"
              >
                <Phone className="h-4 w-4 mr-1" />
                {companyInfo.phone}
              </a>
              <a 
                href="https://t.me/mediamaxuzb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700 text-sm"
              >
                <Mail className="h-4 w-4 mr-1" />
                t.me/mediamaxuzb
              </a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}