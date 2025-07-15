import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Rivera Photography - Professional Photographer & Videographer',
  description: 'Award-winning photographer specializing in weddings, portraits, and commercial photography. Capturing life\'s precious moments with artistic vision and professional expertise.',
  keywords: 'photography, wedding photographer, portrait photographer, commercial photography, videography, New York photographer',
  authors: [{ name: 'Alex Rivera' }],
  openGraph: {
    title: 'Alex Rivera Photography',
    description: 'Professional photographer capturing life\'s precious moments',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}