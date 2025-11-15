import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Particles from "./components/particles";

export const metadata: Metadata = {
  title: "IncaseYouMissedit | Discover South Africa's Best Lifestyle Experiences",
  description: "Your source for content you might have missed. Discover the best lifestyle experiences across South Africa - restaurants, beaches, hangout spots, and hidden gems. Check out our authentic reviews to discover what you've been missing.",
  openGraph: {
    title: "IncaseYouMissedit | Discover South Africa's Best Lifestyle Experiences",
    description: "Your source for content you might have missed. Discover the best lifestyle experiences across South Africa - restaurants, beaches, hangout spots, and hidden gems.",
    url: "https://incaseyoumissedit.co.za",
  },
  alternates: {
    canonical: "https://incaseyoumissedit.co.za",
  },
};

const navigation = [
  { name: "#about", href: "/about" },
  { name: "#token", href: "/token" },
  { name: "#reviews", href: "https://reviews.incaseyoumissedit.co.za" },
  { name: "#contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-white via-zinc-200/50 to-white px-4">
      <nav className="my-8 sm:my-12 md:my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-600 hover:text-zinc-800"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-2 sm:px-0.5 z-10 text-3xl sm:text-4xl md:text-6xl lg:text-9xl text-transparent duration-1000 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 cursor-default animate-title font-display bg-clip-text text-center drop-shadow-2xl hover:from-zinc-800 hover:via-zinc-600 hover:to-zinc-800 transition-all">
        #IncaseYouMissedit
      </h1>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "IncaseYouMissedit",
            url: "https://incaseyoumissedit.co.za",
            logo: "https://incaseyoumissedit.co.za/favicon.png",
            description: "Your source for content you might have missed. Discover the best lifestyle experiences across South Africa.",
            sameAs: [
              "https://x.com/icymi_1",
              "https://www.instagram.com/incaseyoumissedit__1/",
              "https://www.tiktok.com/@incaseyoumissedit_1",
              "https://www.youtube.com/@Incaseyoumissedit-1",
              "https://www.facebook.com/people/Incaseyoumissedit/61563250209092/",
              "https://za.pinterest.com/incaseyoumisseditt/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "contact@incaseyoumissedit.co.za",
              contactType: "customer service",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
          }),
        }}
      />

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-600/0 via-zinc-600/50 to-zinc-600/0" />
      <div className="my-8 sm:my-12 md:my-16 text-center animate-fade-in px-4">
        <h2 className="text-xs sm:text-sm text-zinc-600">
          Your source for content you might have missed.{" "}
          <Link
            target="_blank"
            href="https://reviews.incaseyoumissedit.co.za"
            className="underline duration-500 hover:text-zinc-800"
          >
            Check out our reviews
          </Link> to discover what you've been missing.
        </h2>
      </div>
    </div>
  );

}
