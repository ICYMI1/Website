import { Metadata } from "next";

export const metadata: Metadata = {
  title: "#IncaseYouMissedit Token | Digital Ecosystem",
  description: "The IncaseYouMissedit Token serves as the digital backbone of the platform's growing ecosystem. Learn about tokenomics, utility, staking rewards, governance, and the future of the IncaseYouMissedit token on Polygon blockchain.",
  keywords: [
    "IncaseYouMissedit token",
    "cryptocurrency South Africa",
    "Polygon token",
    "tokenomics",
    "blockchain South Africa",
    "staking rewards",
    "governance token",
    "MATIC token",
  ],
  openGraph: {
    title: "#IncaseYouMissedit Token | Digital Ecosystem",
    description: "The IncaseYouMissedit Token - the digital backbone of the platform's growing ecosystem. Learn about tokenomics, utility, and governance.",
    url: "https://incaseyoumissedit.co.za/token",
  },
  alternates: {
    canonical: "https://incaseyoumissedit.co.za/token",
  },
};

export default function TokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

