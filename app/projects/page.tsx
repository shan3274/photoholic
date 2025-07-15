"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, User, Camera, Video, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'event', name: 'Events' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sarah & Michael\'s Garden Wedding',
      category: 'wedding',
      type: 'photography',
      location: 'Napa Valley, CA',
      date: '2024-01-15',
      client: 'Sarah & Michael Johnson',
      description: 'A romantic garden wedding set in the heart of Napa Valley, featuring stunning vineyard views and intimate moments.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      featured: true,
      tags: ['wedding', 'garden', 'romantic', 'napa valley']
    },
    {
      id: 2,
      title: 'Corporate Leadership Portraits',
      category: 'portrait',
      type: 'photography',
      location: 'New York, NY',
      date: '2024-01-12',
      client: 'TechCorp Inc.',
      description: 'Professional headshots for the executive team of a leading technology company.',
      image: 'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      featured: false,
      tags: ['corporate', 'headshots', 'professional', 'business']
    },
    {
      id: 3,
      title: 'Spring Fashion Editorial',
      category: 'commercial',
      type: 'photography',
      location: 'Los Angeles, CA',
      date: '2024-01-10',
      client: 'Vogue Fashion',
      description: 'Editorial fashion shoot showcasing the latest spring collection in downtown LA.',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      featured: true,
      tags: ['fashion', 'editorial', 'spring', 'commercial']
    },
    {
      id: 4,
      title: 'Tech Conference 2024',
      category: 'event',
      type: 'photography',
      location: 'San Francisco, CA',
      date: '2024-01-08',
      client: 'Innovation Summit',
      description: 'Complete event coverage of the annual technology conference including keynotes and networking sessions.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      featured: false,
      tags: ['conference', 'technology', 'event', 'corporate']
    },
    {
      id: 5,
      title: 'Brand Story Documentary',
      category: 'commercial',
      type: 'video',
      location: 'Seattle, WA',
      date: '2024-01-05',
      client: 'Artisan Coffee Co.',
      description: 'A cinematic documentary showcasing the story and craftsmanship behind a local coffee roastery.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      featured: true,
      tags: ['brand', 'documentary', 'coffee', 'storytelling']
    },
    {
      id: 6,
      title: 'The Thompson Family Portrait',
      category: 'portrait',
      type: 'photography',
      location: 'Central Park, NY',
      date: '2024-01-03',
      client: 'The Thompson Family',
      description: 'Outdoor family portrait session capturing natural moments and connections.',
      image: 'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
      ],
      featured: false,
      tags: ['family', 'portrait', 'outdoor', 'natural']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore detailed case studies of my recent photography and videography work
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                      Featured
                    </Badge>
                  )}
                  {project.type === 'video' && (
                    <Badge className="absolute top-4 right-4 bg-red-500">
                      Video
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      {project.type === 'video' ? (
                        <Video className="h-4 w-4 mr-1" />
                      ) : (
                        <Camera className="h-4 w-4 mr-1" />
                      )}
                      {project.type}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(project.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    <Link href={`/projects/${project.id}`} className="flex items-center gap-2">
                      View Project Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Project Process</h2>
            <p className="text-xl text-gray-600">
              How I approach every photography and videography project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your vision, goals, and requirements through detailed consultation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Location scouting, timeline creation, and equipment preparation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                Professional shooting with attention to every detail and creative direction
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Professional editing, final delivery, and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Every project is unique, and I'm here to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/services">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}