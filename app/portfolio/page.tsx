"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'editorial', label: 'Editorial' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Sarah & Michael',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Corporate Portrait',
      category: 'portrait',
      image: 'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Fashion Editorial',
      category: 'editorial',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Brand Campaign',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Engagement Session',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: true
    },
    {
      id: 6,
      title: 'Personal Branding',
      category: 'portrait',
      image: 'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: false
    },
    {
      id: 7,
      title: 'Product Photography',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: false
    },
    {
      id: 8,
      title: 'Magazine Feature',
      category: 'editorial',
      image: 'https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: true
    },
    {
      id: 9,
      title: 'Intimate Wedding',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      featured: true
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light mb-4 minimal-text">Portfolio</h1>
            <div className="w-12 h-px bg-foreground mx-auto mb-8"></div>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">
              A curated selection of work spanning weddings, portraits, and commercial projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter.id)}
                className="text-sm font-light minimal-text"
                size="sm"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <Eye className="h-5 w-5 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs uppercase tracking-wider opacity-80 minimal-text">{item.category}</p>
                  <p className="text-sm font-light">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}