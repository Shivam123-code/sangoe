import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

export const metadata = {
  title: 'Sangoe — Business Growth Operating System™',
  description:
    'Build a Business That Runs Without You. Sangoe helps startups, MSMEs and enterprises systemize operations, improve profitability, manage compliance and become investor & IPO ready.',
  keywords:
    'business growth, operating system, MSME, startup, compliance, IPO readiness, ERP, CRM, India',
  metadataBase: new URL('https://sangoe.in'),
  openGraph: {
    title: 'Sangoe — Business Growth Operating System™',
    description: 'One Platform To Run, Control & Scale Your Entire Business.',
    url: 'https://sangoe.in',
    siteName: 'Sangoe',
    locale: 'en_IN',
    type: 'website',
  },
  // PWA / App-like meta
  applicationName: 'Sangoe',
  appleWebApp: {
    capable: true,
    title: 'Sangoe',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
};

// Next.js 16+: viewport and themeColor must be in generateViewport
export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#7C3AED' },
      { media: '(prefers-color-scheme: dark)',  color: '#4a0e96' },
    ],
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA / mobile app manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Sangoe" />
        <meta name="msapplication-TileColor" content="#7C3AED" />
        {/* Prevent text size adjustment on orientation change */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* Mobile-only bottom tab nav — renders only on < 769px via CSS */}
        <MobileBottomNav />
      </body>
    </html>
  );
}
