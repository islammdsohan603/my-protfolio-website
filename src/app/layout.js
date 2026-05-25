import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SplashScreen from "@/components/SplashScreen";
import Script from "next/script";
import { personJsonLd, rootMetadata, websiteJsonLd } from "@/lib/site-metadata";

export const metadata = {
  ...rootMetadata,
  title: {
    default: rootMetadata.title,
    template: `%s | Sohan Islam`,
  },
};

export default function RootLayout({ children }) {
  const structuredData = [personJsonLd, websiteJsonLd];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-body">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SJKJTN0MP0"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJKJTN0MP0');
          `}
        </Script>
        <ThemeProvider>
          <SmoothScroll>
            <SplashScreen />
            <ScrollProgressBar />
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
