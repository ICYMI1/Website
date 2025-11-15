import React from "react";
import { Metadata } from "next";
import { Navigation } from "../components/nav";

export const metadata: Metadata = {
  title: "About Us | IncaseYouMissedit",
  description: "Learn about IncaseYouMissedit - your ultimate source for discovering the beauty, culture, and hidden gems that South Africa has to offer. Authentic lifestyle content, honest reviews, and real experiences from Mzansi.",
  openGraph: {
    title: "About Us | IncaseYouMissedit",
    description: "Learn about IncaseYouMissedit - your ultimate source for discovering the beauty, culture, and hidden gems that South Africa has to offer.",
    url: "https://incaseyoumissedit.co.za/about",
  },
  alternates: {
    canonical: "https://incaseyoumissedit.co.za/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            About
          </h2>
          <p className="mt-4 text-zinc-600">
            Learn more about #IncaseYouMissedit and our mission.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-200" />

        {/* Content Sections */}
        <div className="max-w-2xl mx-auto space-y-16">
          {/* Introduction Section */}
          <section className="prose prose-zinc">
            <p className="text-zinc-600 leading-8">
              Welcome to #IncaseYouMissedit – your ultimate source for discovering the beauty, culture, and hidden gems that South Africa has to offer.
            </p>
            <p className="text-zinc-600 leading-8">
              We explore everything from stylish restaurants and cozy chill spots to breathtaking beaches and unforgettable hangout locations. Our mission is simple: to highlight the best experiences around Mzansi with honesty, creativity, and a touch of flair. We don't rely on filters or overly polished narratives — just genuine insights, real opinions, and content that tells the full story.
            </p>
            <p className="text-zinc-600 leading-8">
              Whether you're searching for your next brunch hotspot, a scenic sundowner spot, or a weekend escape, we've got something for every vibe. If you appreciate good places, good people, and authentic experiences, you're right where you need to be.
            </p>
            <p className="text-zinc-600 leading-8">
              Let's explore South Africa together — one destination at a time. ✨🇿🇦
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* What We Offer Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What We Offer
            </h2>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Authentic Content
                </h3>
                <p className="text-zinc-600 leading-8">
                  We showcase the places you already love and the ones you've never heard of. Expect transparent and relatable content that reflects the true experience — no sugar-coating.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Lifestyle Spotlights
                </h3>
                <p className="text-zinc-600 leading-8">
                  From beaches to rooftops, trendy restaurants to tucked-away hideouts — we highlight the best lifestyle destinations across South Africa.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Honest Reviews
                </h3>
                <p className="text-zinc-600 leading-8">
                  We keep it real, always. If a spot is worth the hype, you'll know. If not, we'll tell you that too. Our reviews are fair, balanced, and honest.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Hidden Gems
                </h3>
                <p className="text-zinc-600 leading-8">
                  We love uncovering underrated locations that deserve more recognition, giving them the spotlight they've earned.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Visual Storytelling
                </h3>
                <p className="text-zinc-600 leading-8">
                  Our content captures the vibe, mood, and atmosphere of every place we visit through striking visuals and immersive storytelling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Community Vibes
                </h3>
                <p className="text-zinc-600 leading-8">
                  We're building a connected community of explorers, lifestyle lovers, and local travel enthusiasts. With us, you'll always feel part of the tribe.
                </p>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Our Vision Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Our Vision
            </h2>
            <p className="text-zinc-600 leading-8">
              Our vision is to become South Africa's trusted lifestyle guide — a platform where real stories, real experiences, and real vibes come together.
            </p>
            <p className="text-zinc-600 leading-8">
              We aim to celebrate the diversity, beauty, and vibrancy of South African life while connecting people to places, honest reviews, and unforgettable experiences. Ultimately, we want to inspire a community that explores more, supports local, and never misses the magic waiting in our own backyard.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


