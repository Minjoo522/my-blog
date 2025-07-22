import type { Metadata } from 'next';
import './globals.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/constants/constants';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `${SITE_NAME} | %s`,
  },
  description: `Software Engineer Minjoo's blog`,
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['Minjoo', 'Software Engineer', 'minjoo.dev', '개발 블로그', '프로그래밍', 'Backend', '개발자'],

  openGraph: {
    type: 'website',
    title: SITE_NAME,
    description: `Software Engineer Minjoo's blog`,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'minjoo.dev Open Graph Image',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: `Software Engineer Minjoo's blog`,
    images: [DEFAULT_OG_IMAGE],
  },

  authors: [
    {
      name: 'Minjoo',
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={sans.className}>
      <body className='max mx-auto flex w-full flex-col'>
        <ThemeProvider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
