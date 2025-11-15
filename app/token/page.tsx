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
  maxSupply: "1,000,000",
  distribution: {
    team: 20,
    community: 50,
    reserves: 30,
  },
  utility: "The InCaseYouMissedIt Token provides meaningful utility within the ecosystem, allowing holders to engage, participate, and benefit from the platform's growth. Token holders influence platform decisions, upcoming features, and key ecosystem developments. Holders can stake their tokens to earn rewards, promoting long-term commitment and ecosystem stability. Early access to features, premium content, special events, and community perks are available to engaged token holders.",
  useCases: [
    "Governance Voting - Community members can vote on future platform updates, token features, and development priorities",
    "Staking Rewards - Users earn passive rewards for supporting the ecosystem through staking mechanisms",
    "Community Rewards - Engagement-based bonuses, loyalty rewards, and targeted airdrops strengthen the relationship between the platform and its audience",
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
            #InCaseYouMissedIt Token
          </h1>
          <p className="mt-4 text-zinc-600">
            The digital backbone of the platform's growing ecosystem.
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
              The InCaseYouMissedIt Token serves as the digital backbone of the platform's growing ecosystem. Built to reinforce the long-term sustainability of InCaseYouMissedIt, the token functions as both a value anchor and an economic engine that supports future expansion. It represents more than just a cryptocurrency — it's a domain-linked asset that reflects the strength, reach, and real-world impact of the InCaseYouMissedIt brand.
            </p>
            <p className="text-zinc-600 leading-8 mt-4">
              As the platform continues to uncover hidden gems, showcase lifestyle experiences, and build a community of explorers across South Africa, the token ensures that this growth is supported by a robust, transparent, and decentralized economic model.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Purpose Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Purpose
            </h2>
            <p className="text-zinc-600 leading-8">
              The token was created with a clear and strategic purpose: to empower the platform, sustain its growth, and provide long-term value to the community.
            </p>
            
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Domain-Linked Value</h3>
                <p className="text-zinc-600 leading-7">
                  The token represents the intrinsic value of the InCaseYouMissedIt domain, transforming it into a digital asset that mirrors the platform's success and ongoing utility.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Independent Revenue Generation</h3>
                <p className="text-zinc-600 leading-7">
                  Through decentralized liquidity pools and blockchain-driven trading activity, the token creates a self-sustaining revenue model — one that removes the need for external payment processors or ad-heavy monetization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Ensuring Free Access</h3>
                <p className="text-zinc-600 leading-7">
                  All revenue generated via the token is reinvested back into the platform, ensuring that users can continue enjoying high-quality, unbiased content at absolutely no cost.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Community Empowerment</h3>
                <p className="text-zinc-600 leading-7">
                  A portion of the token supply is dedicated to rewarding the community through airdrops, engagement programs, and long-term loyalty incentives — strengthening user involvement and platform-wide engagement.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Sustainability and Growth</h3>
                <p className="text-zinc-600 leading-7">
                  Token-based funding supports marketing, platform innovation, and broader expansion initiatives, allowing InCaseYouMissedIt to remain agile, independent, and future-ready.
                </p>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Key Features Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Key Features
            </h2>
            
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Decentralized and Secure</h3>
                <p className="text-zinc-600 leading-7">
                  Built on the Polygon (MATIC) blockchain, the token benefits from a fast, affordable, and secure network designed for global accessibility.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Domain-Backed Asset</h3>
                <p className="text-zinc-600 leading-7">
                  The token is linked directly to the value of the InCaseYouMissedIt domain, creating a unique synergy where both the platform and token strengthen one another over time.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Polygon Network Efficiency</h3>
                <p className="text-zinc-600 leading-7">
                  Leveraging Polygon ensures high-speed transactions and low fees — making the token reliable for frequent interactions, governance, and rewards distribution.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Independent Revenue Model</h3>
                <p className="text-zinc-600 leading-7">
                  The token supports a decentralized economic structure where liquidity and trading activity generate continuous revenue without external intermediaries.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Community-Centric Design</h3>
                <p className="text-zinc-600 leading-7">
                  A dedicated portion of the token supply supports community-based rewards, airdrops, and participation incentives, building an ecosystem where users contribute and benefit.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Strategic Allocation</h3>
                <p className="text-zinc-600 leading-7">
                  Token distribution is carefully planned to support long-term stability, with allocations for development, marketing, community programs, and long-term reserves.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Sustainability and Reinvestment</h3>
                <p className="text-zinc-600 leading-7">
                  All income generated from token activities flows back into platform development, ensuring constant growth and free access to quality content.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Flexible Use Cases</h3>
                <p className="text-zinc-600 leading-7">
                  The token can be utilized for governance, staking, premium content, platform interactions, and future features as the ecosystem evolves.
                </p>
              </div>
            </div>
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
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Utility</h3>
              <p className="text-zinc-600 leading-7 mb-4">
                The InCaseYouMissedIt Token provides meaningful utility within the ecosystem, allowing holders to engage, participate, and benefit from the platform's growth.
              </p>
              <div className="space-y-3">
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">Governance Rights</h4>
                  <p className="text-zinc-600 leading-7 text-sm">
                    Token holders influence platform decisions, upcoming features, and key ecosystem developments.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">Staking Rewards</h4>
                  <p className="text-zinc-600 leading-7 text-sm">
                    Holders can stake their tokens to earn rewards, promoting long-term commitment and ecosystem stability.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">Exclusive Platform Access</h4>
                  <p className="text-zinc-600 leading-7 text-sm">
                    Early access to features, premium content, special events, and community perks are available to engaged token holders.
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases Section */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Use Cases</h3>
              <div className="space-y-3">
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">Governance Voting</h4>
                  <p className="text-zinc-600 leading-7 text-sm">
                    Community members can vote on future platform updates, token features, and development priorities.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">Staking Rewards</h4>
                  <p className="text-zinc-600 leading-7 text-sm">
                    Users earn passive rewards for supporting the ecosystem through staking mechanisms.
                  </p>
                </div>
                <div className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  <h4 className="text-lg font-semibold text-zinc-900 mb-2">Community Rewards</h4>
                  <p className="text-zinc-600 leading-7 text-sm">
                    Engagement-based bonuses, loyalty rewards, and targeted airdrops strengthen the relationship between the platform and its audience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Vision & Future Section */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Vision & Future
            </h2>
            <p className="text-zinc-600 leading-8">
              The long-term vision for the InCaseYouMissedIt Token is to become the central economic layer of a thriving, community-driven lifestyle ecosystem.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">We aim to:</h3>
              <ul className="text-zinc-600 leading-7 space-y-2 list-disc list-inside">
                <li>Build a self-sustaining digital economy that powers the platform's growth.</li>
                <li>Empower the community through governance and direct participation.</li>
                <li>Support new products, experiences, and expansions across South Africa and beyond.</li>
                <li>Develop an ecosystem where exploring local culture is rewarded through real digital value.</li>
                <li>Enable a future where the platform's success directly benefits the users who help shape it.</li>
              </ul>
            </div>
            
            <p className="text-zinc-600 leading-8 mt-6">
              As InCaseYouMissedIt continues to grow — from lifestyle media brand to community-driven digital platform — the token will evolve alongside it. Expect expanded utility, deeper integrations, and a long-term roadmap centered around transparency, sustainability, and shared value creation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
