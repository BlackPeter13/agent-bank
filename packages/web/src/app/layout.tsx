import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { TRPCProvider } from '@/providers/trpc-provider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from '@/components/ui/sonner';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '0 Finance - AI-powered finance, on autopilot',
  description:
    'Stop doing finance manually. Forward invoices and receipts, approve payments, and automate bank transfers with an AI that asks before executing. Install the agent-bank CLI and connect via MCP.',
  keywords: [
    'ai finance',
    'agent banking',
    'finance automation',
    'invoices',
    'expense tracking',
    'bank transfers',
    'approvals',
    'mcp',
    'cli',
    'agent-bank',
    'open banking',
    'treasury',
  ],
  authors: [{ name: '0 Finance' }],
  creator: '0 Finance',
  publisher: '0 Finance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Zero Finance',
  },
  icons: {
    icon: '/new-logo-bluer.png',
    apple: [
      { url: '/new-logo-bluer.png', sizes: '180x180' },
      { url: '/new-logo-bluer.png', sizes: '152x152' },
      { url: '/new-logo-bluer.png', sizes: '120x120' },
      { url: '/new-logo-bluer.png', sizes: '167x167' },
    ],
  },
  openGraph: {
    title: '0 Finance - AI-powered finance, on autopilot',
    description:
      'Forward invoices and receipts, approve payments, and automate transfers with an AI that asks before executing. CLI + MCP included.',
    url: 'https://0.finance',
    siteName: '0 Finance',
    images: [
      {
        url: 'https://0.finance/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '0 Finance - AI-powered finance, on autopilot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '0 Finance - AI-powered finance, on autopilot',
    description:
      'Forward invoices and receipts, approve payments, and automate transfers with an AI that asks before executing. CLI + MCP included.',
    site: '@0finance',
    creator: '@0finance',
    images: ['https://0.finance/opengraph-image.png'],
  },
  metadataBase: new URL('https://0.finance'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  bg-[#f7f9fb] bg-gradient-to-br from-slate-50 to-sky-100  */}
      <body className={inter.className}>
        <NuqsAdapter>
          <Providers>
            <TRPCProvider>
              <div className="noise-texture"></div>
              <div className="scanline"></div>
              {children}
            </TRPCProvider>
          </Providers>
        </NuqsAdapter>
        <Toaster />
      </body>
    </html>
  );
}
