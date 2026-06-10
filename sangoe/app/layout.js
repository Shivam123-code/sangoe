import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
