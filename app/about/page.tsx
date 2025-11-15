import React from "react";
import { Navigation } from "../components/nav";

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
            Learn more about me and my work.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-200" />

        <div className="max-w-2xl mx-auto">
          <div className="prose prose-zinc">
            <p className="text-zinc-600 leading-8">
              Welcome to my website. I'm a developer passionate about building
              great software and solving interesting problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


