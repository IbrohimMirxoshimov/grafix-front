import { services } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) {
    return NextResponse.json({ error: 'Service not found' }, { status: 404 });
  }
  return NextResponse.json(service);
} 