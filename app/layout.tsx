import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FlickeringEmojis from "./components/flickering-emojis";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://incaseyoumissedit.co.za"),
  title: {
    default: "IncaseYouMissedit | Discover South Africa's Best Lifestyle Experiences",
    template: "%s | IncaseYouMissedit",
  },
  description: "Your source for content you might have missed. Discover the best lifestyle experiences across South Africa - restaurants, beaches, hangout spots, and hidden gems. Authentic reviews and real experiences from Mzansi.",
  keywords: [
    "South Africa lifestyle",
    "South Africa restaurants",
    "Cape Town restaurants",
    "Johannesburg restaurants",
    "South Africa beaches",
    "Mzansi lifestyle",
    "South Africa travel",
    "lifestyle reviews",
    "hidden gems South Africa",
    "IncaseYouMissedit",
    "South Africa hangout spots",
    "authentic reviews South Africa",
    "lifestyle experiences",
    "South Africa culture",
  ],
  authors: [{ name: "IncaseYouMissedit" }],
  creator: "IncaseYouMissedit",
  publisher: "IncaseYouMissedit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "IncaseYouMissedit | Discover South Africa's Best Lifestyle Experiences",
    description:
      "Your source for content you might have missed. Discover the best lifestyle experiences across South Africa - restaurants, beaches, hangout spots, and hidden gems.",
    url: "https://incaseyoumissedit.co.za",
    siteName: "IncaseYouMissedit",
    images: [
      {
        url: "https://incaseyoumissedit.co.za/og.png",
        width: 1200,
        height: 630,
        alt: "IncaseYouMissedit - Discover South Africa's Best Lifestyle Experiences",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "IncaseYouMissedit | Discover South Africa's Best Lifestyle Experiences",
    description: "Your source for content you might have missed. Discover the best lifestyle experiences across South Africa.",
    creator: "@icymi_1",
    site: "@icymi_1",
    images: ["https://incaseyoumissedit.co.za/og.png"],
  },
  alternates: {
    canonical: "https://incaseyoumissedit.co.za",
  },
  icons: {
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    // Add verification codes here if you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-white ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <FlickeringEmojis className="-z-10" quantity={40} />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
