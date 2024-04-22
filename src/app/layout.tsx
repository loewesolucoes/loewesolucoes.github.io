import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loewe Soluções em Software",
  description: "Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Loewe Soluções em Software</title>
        <meta name="title" content="Loewe Soluções em Software" />
        <meta name="description" content="Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://loewesolucoes.github.io/" />
        <meta property="og:title" content="Loewe Soluções em Software" />
        <meta property="og:description" content="Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável" />
        <meta property="og:image" content="/site.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://loewesolucoes.github.io/" />
        <meta property="twitter:title" content="Loewe Soluções em Software" />
        <meta property="twitter:description" content="Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável" />
        <meta property="twitter:image" content="/site.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Script id="gtm" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-54VR7557');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54VR7557" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
