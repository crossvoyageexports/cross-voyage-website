import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {

  title:
    "Cross Voyage Exports | Trusted Indian Export Company",

  description:
    "Cross Voyage Exports Private Limited is an India-based global exporter supplying premium agricultural products, processed foods, textiles, handicrafts and quality products to international markets.",


  keywords: [

    "Cross Voyage Exports",
    "Cross Voyage Exports Private Limited",
    "Indian Export Company",
    "India Exporters",
    "Agricultural Product Exporter India",
    "Fresh Produce Exporter",
    "Food Exporter India",
    "Rice Exporter India",
    "Mango Pulp Exporter",
    "Cashew Exporter",
    "Dry Red Chilli Exporter",
    "Textile Exporter India",
    "Handicraft Exporter India",
    "Global Export Supplier",
    "Import Export Company India",

  ],


  authors: [
    {
      name: "Cross Voyage Exports Private Limited",
    },
  ],


  creator:
    "Cross Voyage Exports Private Limited",


  publisher:
    "Cross Voyage Exports Private Limited",


  metadataBase:
    new URL("https://crossvoyage.com"),


  openGraph: {

    title:
      "Cross Voyage Exports | Connecting India To The World",

    description:
      "Premium Indian exporter of agricultural products, processed foods, textiles and handicrafts serving global buyers.",

    url:
      "https://crossvoyage.com",

    siteName:
      "Cross Voyage Exports",

    locale:
      "en_US",

    type:
      "website",

    images: [
      {
        url:
          "/og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Cross Voyage Exports Private Limited",
      },
    ],

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Cross Voyage Exports | Indian Global Export Partner",

    description:
      "Connecting India to the world with quality agricultural products, textiles, handicrafts and export solutions.",

    images:
      ["/og-image.jpg"],

  },


  icons: {

    icon:
      "/logo.jpg",

    shortcut:
      "/logo.jpg",

    apple:
      "/logo.jpg",

  },


};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body className="bg-white text-gray-900 antialiased">

        {children}

      </body>

    </html>

  );

}