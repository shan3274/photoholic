"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      event: 'Wedding Photography',
      rating: 5,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Alex exceeded all of our expectations! From the initial consultation to the final gallery delivery, everything was perfect. The photos captured our special day beautifully and we couldn\'t be happier with the results.',
      featured: true
    },
    {
      id: 2,
      name: 'Jennifer Martinez',
      event: 'Portrait Session',
      rating: 5,
      image: 'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Professional, creative, and so easy to work with! Alex made me feel comfortable throughout the entire session and the headshots turned out amazing. I\'ve already booked my next session.',
      featured: false
    },
    {
      id: 3,
      name: 'David Chen',
      event: 'Commercial Photography',
      rating: 5,
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Alex delivered exactly what we needed for our product launch. The attention to detail and creative vision helped showcase our brand perfectly. Highly recommend for any commercial work!',
      featured: true
    },
    {
      id: 4,
      name: 'Emily & James Wilson',
      event: 'Engagement Photos',
      rating: 5,
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Our engagement photos are absolutely stunning! Alex captured our love story perfectly and made the whole experience fun and memorable. We can\'t wait to work with him again for our wedding!',
      featured: false
    },
    {
      id: 5,
      name: 'Rachel Thompson',
      event: 'Family Portrait',
      rating: 5,
      image: 'https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Alex was incredible with our kids! He made them laugh and feel comfortable, resulting in the most natural and beautiful family photos we\'ve ever had. The whole experience was wonderful.',
      featured: true
    },
    {
      id: 6,
      name: 'Mark Rodriguez',
      event: 'Corporate Event',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      review: 'Alex covered our annual conference and did an outstanding job. He was professional, unobtrusive, and captured all the key moments perfectly. The photos were delivered promptly and exceeded our expectations.',
      featured: false
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it - hear what my clients have to say about their experience
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="h-16 w-16 text-gray-400" />
              </div>
              
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].event}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real reviews from real clients who trusted me with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.event}</div>
                    </div>
                    {testimonial.featured && (
                      <Badge variant="secondary" className="ml-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{testimonial.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Satisfaction</h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-gray-300">Repeat Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-gray-300">Referral Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Review Highlights</h2>
            <p className="text-xl text-gray-600">
              What clients love most about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Exceptional Quality</h3>
              <p className="text-gray-600">
                "The photos are absolutely stunning and exceeded all expectations. Alex's attention to detail is incredible."
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <p className="text-gray-600">
                "Alex was professional, punctual, and made everyone feel comfortable. The entire process was seamless."
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Great Experience</h3>
              <p className="text-gray-600">
                "Working with Alex was a joy from start to finish. Highly recommended for any photography needs."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join My Happy Clients?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create beautiful memories together. Book your session today and experience the same exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Book Your Session
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