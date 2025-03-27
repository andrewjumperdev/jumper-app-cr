import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Andrewcr.com - Développeur Fullstack et Consultant Technologique",
  description:
    "Bienvenue sur andrewcr.com, votre site web pour des projets de développement Fullstack et de conseil technologique. Découvrez mes services et projets personnalisés pour stimuler votre entreprise.",
  openGraph: {
    title: "Andrewcr.com - Développeur Fullstack et Consultant Technologique",
    description:
      "Explorez des solutions web personnalisées, du développement avec Next.js, et des stratégies de croissance numérique. Je suis là pour amener votre projet au niveau supérieur !",
    url: "https://andrewcr.com",
    siteName: "Andrewcr.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andrewcr.com - Développeur Fullstack",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrewcr.com - Développeur Fullstack et Consultant Technologique",
    description:
      "Explorez des solutions web personnalisées, du développement avec Next.js, et des stratégies de croissance numérique.",
      images: ['/img/icons/twitter.png'],
  },
  keywords: [
    "développeur fullstack",
    "consultant technologique",
    "développement web",
    "Next.js",
    "freelance",
    "développeur Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Andrew CR" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1E293B" />
        <link rel="icon" href="/img/logo-jumper.png" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Andrewcr.com - Développeur Fullstack et Consultant Technologique"
        />
        <meta
          property="og:description"
          content="Explorez des solutions web personnalisées, du développement avec Next.js, et des stratégies de croissance numérique."
        />
        <meta property="og:url" content="https://andrewcr.com" />
        <meta property="og:image" content="/img/logo-jumper.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Andrewcr.com - Développeur Fullstack et Consultant Technologique"
        />
        <meta
          name="twitter:description"
          content="Explorez des solutions web personnalisées, du développement avec Next.js, et des stratégies de croissance numérique."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />

        {/* PWA settings */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Andrewcr.com" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>

      <body className="expansion-alids-init">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-900">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
