import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light mb-6 minimal-text">Alex Rivera</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
              Visual storyteller capturing authentic moments with a timeless, editorial approach.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alex@example.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-muted-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">Work</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">Services</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">Journal</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-muted-foreground">Contact</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-light">alex@example.com</p>
              <p className="text-sm text-muted-foreground font-light">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground font-light">New York, NY</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-light minimal-text">
            © {currentYear} Alex Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}