import Script from "next/script";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

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
      </head>
      <body>

        {children}
      </body>
    </html>
  );
}