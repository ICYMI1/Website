"use client";
import React, { useState, useEffect } from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

// Tokenomics data structure
interface TokenomicsData {
  tokenPrice: string;
  marketCap: string;
  maxSupply: string;
  volume24h?: string;
  priceChange24h?: number;
  distribution: {
    team: number;
    community: number;
    reserves: number;
    [key: string]: number;
  };
  utility: string;
  useCases: string[];
}

// Default tokenomics data - fallback if API fails
const defaultTokenomics: TokenomicsData = {
  tokenPrice: "$0.00",
  marketCap: "$0.00",
  maxSupply: "1,000,000,000",
  distribution: {
    team: 20,
    community: 50,
    reserves: 30,
  },
  utility: "The IncaseYouMissedit token provides governance rights, staking rewards, and exclusive access to platform features. Holders can participate in decision-making and earn rewards through various mechanisms.",
  useCases: [
    "Governance voting",
    "Staking rewards",
    "Platform access",
    "Premium features",
    "Community rewards",
  ],
};

export default function TokenPage() {
  const [tokenomics, setTokenomics] = useState<TokenomicsData>(defaultTokenomics);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-update function - fetches from API and polls for updates
  useEffect(() => {
    const fetchTokenomics = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/tokenomics');
        if (response.ok) {
          const data = await response.json();
          setTokenomics(data);
        }
      } catch (error) {
        console.error("Error fetching tokenomics:", error);
        // Fallback to default data on error
        setTokenomics(defaultTokenomics);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchTokenomics();

    // Auto-update every 30 seconds for live data
    const interval = setInterval(fetchTokenomics, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-white via-zinc-200/50 to-white">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent duration-1000 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text font-display">
            #IncaseYouMissedit Token
          </h1>
          <p className="mt-4 text-zinc-600">
            Your token for accessing IncaseYouMissedit features.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-200" />

        {/* Content Sections */}
        <div className="max-w-2xl mx-auto space-y-16">
          {/* Overview Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Overview
            </h2>
            <p className="text-zinc-600 leading-8">
              The IncaseYouMissedit token provides access to exclusive features and content.
              Use this token to authenticate and interact with the IncaseYouMissedit platform.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Vision Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Vision
            </h2>
            <p className="text-zinc-600 leading-8">
              Our vision is to create a seamless experience for users to discover and engage with content they might have missed.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Future Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Future
            </h2>
            <p className="text-zinc-600 leading-8">
              We're continuously working on new features and improvements to enhance the IncaseYouMissedit experience.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Tokenomics Section */}
          <section className="prose prose-zinc">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Tokenomics
              </h2>
              {isLoading && (
                <span className="text-sm text-zinc-500 animate-pulse">Updating...</span>
              )}
            </div>
            
            {/* Token Supply Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-sm font-medium text-zinc-500 mb-1">Token Price</h3>
                  <p className="text-2xl font-bold text-zinc-900">
                    {tokenomics.tokenPrice}
                  </p>
                  {tokenomics.priceChange24h !== undefined && (
                    <p className={`text-xs mt-1 ${tokenomics.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {tokenomics.priceChange24h >= 0 ? '+' : ''}{tokenomics.priceChange24h.toFixed(2)}% (24h)
                    </p>
                  )}
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-sm font-medium text-zinc-500 mb-1">Market Cap</h3>
                  <p className="text-2xl font-bold text-zinc-900">
                    {tokenomics.marketCap}
                  </p>
                  <p className="text-xs mt-1 text-zinc-400">Live</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-sm font-medium text-zinc-500 mb-1">Max Supply</h3>
                  <p className="text-2xl font-bold text-zinc-900">
                    {tokenomics.maxSupply.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </div>
            </div>

            {/* Distribution Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Distribution</h3>
              <div className="space-y-3">
                {Object.entries(tokenomics.distribution).map(([key, value]) => (
                  <div
                    key={key}
                    className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-zinc-900 capitalize">
                            {key}
                          </span>
                          <span className="text-sm font-semibold text-zinc-600">
                            {value}%
                          </span>
                        </div>
                        <div className="w-full bg-zinc-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-zinc-600 to-zinc-800 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Utility Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Utility</h3>
                  <p className="text-zinc-600 leading-7 text-sm">
                    {tokenomics.utility}
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Use Cases</h3>
                  <ul className="text-zinc-600 leading-7 text-sm space-y-1 list-disc list-inside">
                    {tokenomics.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
