import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import ThemeProvider from '@/components/layout/ThemeProvider';

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
        {/* Blocking script: apply saved theme BEFORE first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('sangoe-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Sangoe" />
        <meta name="msapplication-TileColor" content="#7C3AED" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
