"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const instagramVideos = [
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      poster: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      title: 'Wedding Moments',
      category: 'Wedding'
    },
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      poster: 'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      title: 'Portrait Session',
      category: 'Portrait'
    },
    {
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      poster: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      title: 'Fashion Editorial',
      category: 'Fashion'
    }
  ];

  const featuredWork = [
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      title: 'Sarah & Michael',
      category: 'Wedding'
    },
    {
      src: 'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      title: 'Corporate Portraits',
      category: 'Business'
    },
    {
      src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      title: 'Editorial Fashion',
      category: 'Fashion'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % instagramVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo && isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideo, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = !isMuted;
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Instagram Videos */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/3888252/3888252-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-0" />
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 minimal-text">
            Alex Rivera
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 opacity-90 minimal-text">
            Visual Storyteller
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 minimal-text"
          >
            <Link href="/portfolio" className="flex items-center gap-2">
              View Work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Minimal Stats */}
      <section className="py-24 premium-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2 minimal-text">500+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Sessions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2 minimal-text">8</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2 minimal-text">50+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Awards</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light mb-2 minimal-text">1000+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-4 minimal-text">Selected Work</h2>
            <div className="w-12 h-px bg-foreground mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {featuredWork.map((work, index) => (
              <div key={index} className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs uppercase tracking-wider opacity-80">{work.category}</p>
                  <p className="text-sm font-light">{work.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="minimal-text">
              <Link href="/portfolio" className="flex items-center gap-2">
                View All Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 premium-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-light mb-4 minimal-text">Services</h2>
              <div className="w-12 h-px bg-foreground mx-auto mb-8"></div>
              <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                Specializing in wedding photography, intimate portraits, and commercial work 
                with a focus on authentic storytelling and timeless aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-lg font-light mb-4 minimal-text">Weddings</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Intimate documentation of your most important day with an unobtrusive, 
                  editorial approach.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-light mb-4 minimal-text">Portraits</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Personal and professional portraits that capture authentic character 
                  and natural beauty.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-light mb-4 minimal-text">Commercial</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Brand storytelling through carefully crafted imagery for businesses 
                  and publications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-8 minimal-text">
            Let's Create Something Beautiful
          </h2>
          <div className="w-12 h-px bg-foreground mx-auto mb-12"></div>
          <Button size="lg" className="minimal-text">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}