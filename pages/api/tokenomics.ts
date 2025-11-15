import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

// GeckoTerminal pool address
const POOL_ADDRESS = "0x0525bbe6b33ab5cb7f91200a9db2a8326e98f8bb765b0cd068bda5e0dfa15426";
const NETWORK = "polygon_pos";
const GECKO_TERMINAL_API = `https://api.geckoterminal.com/api/v2/networks/${NETWORK}/pools/${POOL_ADDRESS}`;

// Format number with commas
const formatNumber = (num: number): string => {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
  return `$${num.toFixed(6)}`;
};

// Format price
const formatPrice = (price: number): string => {
  if (price < 0.000001) return `$${price.toExponential(2)}`;
  if (price < 1) return `$${price.toFixed(6)}`;
  return `$${price.toFixed(4)}`;
};

// Fetch live data from GeckoTerminal
const fetchGeckoTerminalData = async () => {
  try {
    const response = await fetch(GECKO_TERMINAL_API, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`GeckoTerminal API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.data || !data.data.attributes) {
      throw new Error("Invalid data structure from GeckoTerminal");
    }

    const pool = data.data.attributes;
    
    // Get token price (base_token_price_usd or quote_token_price_usd depending on which is the token)
    // Usually the base token is the token we want
    const tokenPrice = parseFloat(pool.base_token_price_usd || pool.quote_token_price_usd || "0");
    
    // Calculate market cap: price * total supply
    // We need to get the token supply, but if not available, we can use fdv_usd (fully diluted valuation)
    // Or use reserve_in_usd as an approximation
    const fdvUsd = parseFloat(pool.fdv_usd || "0");
    const reserveInUsd = parseFloat(pool.reserve_in_usd || "0");
    
    // Market cap is typically FDV or we can calculate from reserves
    // For DEX pools, market cap is often approximated by FDV
    const marketCap = fdvUsd > 0 ? fdvUsd : reserveInUsd * 2; // Approximate if FDV not available

    return {
      tokenPrice,
      marketCap,
      volume24h: parseFloat(pool.volume_usd?.h24 || "0"),
      priceChange24h: parseFloat(pool.price_change_percentage?.h24 || "0"),
    };
  } catch (error) {
    console.error("Error fetching GeckoTerminal data:", error);
    throw error;
  }
};

// Tokenomics data with live market data
const getTokenomicsData = async () => {
  try {
    const marketData = await fetchGeckoTerminalData();
    
    return {
      tokenPrice: formatPrice(marketData.tokenPrice),
      marketCap: formatNumber(marketData.marketCap),
      maxSupply: "1,000,000", // Keep static or fetch from token contract
      volume24h: formatNumber(marketData.volume24h),
      priceChange24h: marketData.priceChange24h,
      distribution: {
        team: 7.5,
        "community incentives": 10,
        "papo wealth capital reserves": 15,
      },
      utility: "The InCaseYouMissedIt Token provides meaningful utility within the ecosystem, allowing holders to engage, participate, and benefit from the platform's growth. Token holders influence platform decisions, upcoming features, and key ecosystem developments. Holders can stake their tokens to earn rewards, promoting long-term commitment and ecosystem stability. Early access to features, premium content, special events, and community perks are available to engaged token holders.",
      useCases: [
        "Governance Voting - Community members can vote on future platform updates, token features, and development priorities",
        "Staking Rewards - Users earn passive rewards for supporting the ecosystem through staking mechanisms",
        "Community Rewards - Engagement-based bonuses, loyalty rewards, and targeted airdrops strengthen the relationship between the platform and its audience",
      ],
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error in getTokenomicsData:", error);
    // Return fallback data on error
    return {
      tokenPrice: "$0.00",
      marketCap: "$0.00",
      maxSupply: "1,000,000",
      volume24h: "$0.00",
      priceChange24h: 0,
      distribution: {
        team: 7.5,
        "community incentives": 10,
        "papo wealth capital reserves": 15,
      },
      utility: "The InCaseYouMissedIt Token provides meaningful utility within the ecosystem, allowing holders to engage, participate, and benefit from the platform's growth. Token holders influence platform decisions, upcoming features, and key ecosystem developments. Holders can stake their tokens to earn rewards, promoting long-term commitment and ecosystem stability. Early access to features, premium content, special events, and community perks are available to engaged token holders.",
      useCases: [
        "Governance Voting - Community members can vote on future platform updates, token features, and development priorities",
        "Staking Rewards - Users earn passive rewards for supporting the ecosystem through staking mechanisms",
        "Community Rewards - Engagement-based bonuses, loyalty rewards, and targeted airdrops strengthen the relationship between the platform and its audience",
      ],
      lastUpdated: new Date().toISOString(),
    };
  }
};

export default async function tokenomics(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  try {
    const data = await getTokenomicsData();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("Error fetching tokenomics:", error);
    return NextResponse.json(
      { error: "Failed to fetch tokenomics data" },
      { status: 500 }
    );
  }
}

