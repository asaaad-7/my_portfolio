import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://asaaad07.vercel.app'),
  title: 'Asaduzzaman Asad | Software Engineering Student Portfolio',
  description: 'Personal portfolio of Asaduzzaman Asad, 4th Semester Software Engineering Student at Daffodil International University, Bangladesh. Exploring Web Development, Java, Python, C++, MySQL, and Software Architecture.',
  keywords: [
    'Asaduzzaman Asad',
    'Software Engineering Student',
    'Daffodil International University',
    'DIU Software Engineering',
    'Full Stack Developer Bangladesh',
    'Next.js Portfolio',
    'React Portfolio',
  ],
  authors: [{ name: 'Asaduzzaman Asad' }],
  creator: 'Asaduzzaman Asad',
  openGraph: {
    title: 'Asaduzzaman Asad | Software Engineering Student',
    description: 'Building modern web experiences and studying software engineering at Daffodil International University.',
    url: 'https://asaaad07.vercel.app',
    siteName: 'Asaduzzaman Asad Portfolio',
    images: [
      {
        url: '/asad_profile_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Asaduzzaman Asad Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asaduzzaman Asad | Software Engineering Student',
    description: 'Building modern web experiences and studying software engineering at Daffodil International University.',
    images: ['/asad_profile_1.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="dark scroll-smooth">
      <body className="bg-slate-950 text-gray-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
