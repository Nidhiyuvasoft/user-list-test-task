import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Dynamic Metadata for SEO
export const metadata = {
  title: "User List - Next.js 15 App",
  description: "A simple user list page with SEO and accessibility optimizations.",
  openGraph: {
    title: "User List - Next.js 15 App",
    description: "A simple user list page with SEO and accessibility optimizations.",
    url: "https://yourwebsite.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ SEO Optimizations */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* ✅ Open Graph for Social Media */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
