import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import ReduxProvider from "./components/ReduxProvider";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://andrewcr.com"),
  title: "Andrewcr.com - Développeur Fullstack et Consultant Technologique",
  description:
    "Bienvenue sur andrewcr.com, votre site web pour des projets de développement Fullstack et de conseil technologique.",
  openGraph: {
    title: "Andrewcr.com - Développeur Fullstack et Consultant Technologique",
    description:
      "Explorez des solutions web personnalisées, du développement avec Next.js, et des stratégies de croissance numérique.",
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
    images: ["/img/icons/twitter.png"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Andrew CR" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1E293B" />
        <link rel="icon" href="/img/logo-jumper.png" />
        <meta name="google-adsense-account" content="ca-pub-5864327417374034"></meta>
      </head>

      <body className="expansion-alids-init">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ReduxProvider>
            <main className="flex-grow bg-gray-900">{children}</main>
          </ReduxProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
