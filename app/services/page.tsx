"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Users, Camera, Video, Building, Star, Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage with engagement sessions',
      features: [
        'Pre-wedding consultation',
        'Engagement session included',
        'Full day coverage (8-10 hours)',
        '500+ edited high-resolution images',
        'Online gallery for sharing',
        'USB with all images',
        'Print release included'
      ],
      packages: [
        { name: 'Essential', price: '$2,500', duration: '6 hours' },
        { name: 'Premium', price: '$3,500', duration: '8 hours' },
        { name: 'Luxury', price: '$5,000', duration: '10 hours + engagement' }
      ],
      popular: true
    },
    {
      icon: Users,
      title: 'Portrait Photography',
      description: 'Professional headshots, family, and personal branding photos',
      features: [
        'Studio or location shoot',
        'Wardrobe consultation',
        'Professional lighting setup',
        '50+ edited images',
        'Multiple outfit changes',
        'Online gallery',
        'Print options available'
      ],
      packages: [
        { name: 'Individual', price: '$300', duration: '1 hour' },
        { name: 'Family', price: '$500', duration: '2 hours' },
        { name: 'Corporate', price: '$800', duration: '3 hours' }
      ],
      popular: false
    },
    {
      icon: Building,
      title: 'Commercial Photography',
      description: 'Product, corporate, and brand photography for businesses',
      features: [
        'Product photography',
        'Corporate events',
        'Brand lifestyle shots',
        'Commercial usage rights',
        'Fast turnaround',
        'High-resolution files',
        'Retouching included'
      ],
      packages: [
        { name: 'Basic', price: '$800', duration: 'Half day' },
        { name: 'Standard', price: '$1,500', duration: 'Full day' },
        { name: 'Premium', price: '$2,500', duration: 'Multi-day' }
      ],
      popular: false
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Cinematic videos for weddings, events, and commercial use',
      features: [
        'Cinematic storytelling',
        'Professional equipment',
        'Drone footage available',
        'Color grading',
        'Music licensing',
        'Multiple format delivery',
        'Social media cuts'
      ],
      packages: [
        { name: 'Highlights', price: '$1,500', duration: '3-5 minutes' },
        { name: 'Documentary', price: '$2,500', duration: '10-15 minutes' },
        { name: 'Full Feature', price: '$4,000', duration: '30+ minutes' }
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: 'Additional Hour', price: '$200' },
    { name: 'Second Photographer', price: '$500' },
    { name: 'Drone Coverage', price: '$300' },
    { name: 'Same Day Edit', price: '$400' },
    { name: 'Photo Booth', price: '$600' },
    { name: 'Rehearsal Dinner', price: '$800' }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photography Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional photography and videography packages tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden ${service.popular ? 'ring-2 ring-yellow-400' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-black">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <service.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Packages */}
                    <div>
                      <h4 className="font-semibold mb-3">Packages:</h4>
                      <div className="space-y-3">
                        {service.packages.map((pkg, pkgIndex) => (
                          <div key={pkgIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium">{pkg.name}</div>
                              <div className="text-sm text-gray-600">{pkg.duration}</div>
                            </div>
                            <div className="text-lg font-bold">{pkg.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      Book This Service
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-On Services</h2>
            <p className="text-xl text-gray-600">
              Enhance your photography experience with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center p-6">
                <h3 className="font-semibold text-lg mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-gray-900">{addon.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to book your photography session
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Discuss your vision, needs, and preferences</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Planning & Preparation</h3>
              <p className="text-gray-600">Location scouting, timeline creation, and setup</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">The Photography Session</h3>
              <p className="text-gray-600">Professional shooting with attention to every detail</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Editing & Delivery</h3>
              <p className="text-gray-600">Professional editing and online gallery delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">
                I recommend booking 3-6 months in advance for weddings and 2-4 weeks for other sessions. 
                However, I can often accommodate shorter notice depending on availability.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">What happens if it rains on my wedding day?</h3>
              <p className="text-gray-600">
                I always have backup plans for indoor ceremonies and creative solutions for rainy weather. 
                Some of my most dramatic shots have been captured in challenging weather conditions!
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">How long does it take to receive my photos?</h3>
              <p className="text-gray-600">
                Portrait sessions: 1-2 weeks. Wedding photography: 4-6 weeks. 
                I provide a sneak peek gallery within 24-48 hours for weddings.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I purchase additional prints?</h3>
              <p className="text-gray-600">
                Yes! I offer professional printing services with various options including canvas, 
                metal prints, and traditional photo books. All packages include print release.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Session?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Contact Me Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}