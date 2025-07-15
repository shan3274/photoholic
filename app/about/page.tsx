"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2015',
      title: 'First Camera',
      description: 'Discovered photography through street photography in New York'
    },
    {
      year: '2017',
      title: 'First Wedding',
      description: 'Shot my first wedding, finding my passion for storytelling'
    },
    {
      year: '2019',
      title: 'Recognition',
      description: 'Featured in major photography publications'
    },
    {
      year: '2021',
      title: 'Studio Launch',
      description: 'Opened dedicated studio space in Manhattan'
    },
    {
      year: '2023',
      title: 'International Work',
      description: 'Expanded to destination weddings worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-light mb-8 minimal-text">
                About Alex
              </h1>
              <div className="w-12 h-px bg-foreground mb-8"></div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                I believe in the power of authentic storytelling through imagery. My approach 
                is rooted in capturing genuine moments and emotions, creating timeless photographs 
                that speak to the heart.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Based in New York, I work with couples and brands who value artistry, 
                authenticity, and attention to detail. Every project is an opportunity 
                to create something meaningful and lasting.
              </p>
              <Button variant="outline" className="minimal-text">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Alex Rivera - Photographer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 premium-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light mb-2 minimal-text">500+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 minimal-text">8</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 minimal-text">50+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Awards</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2 minimal-text">25</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4 minimal-text">Journey</h2>
            <div className="w-12 h-px bg-foreground mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-sm font-light text-muted-foreground minimal-text">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px bg-border"></div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-light mb-2 minimal-text">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 premium-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-8 minimal-text">Philosophy</h2>
            <div className="w-12 h-px bg-foreground mx-auto mb-12"></div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              "Photography is not about the camera, it's about the connection between 
              the photographer and the subject. My goal is to create images that feel 
              timeless, authentic, and deeply personal."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}