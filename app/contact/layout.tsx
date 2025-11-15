import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | IncaseYouMissedit",
  description: "Get in touch with IncaseYouMissedit. Connect with us on social media platforms including Twitter, Instagram, TikTok, YouTube, Facebook, and more. Your source for South Africa's best lifestyle content.",
  openGraph: {
    title: "Contact Us | IncaseYouMissedit",
    description: "Get in touch with IncaseYouMissedit. Connect with us on social media platforms.",
    url: "https://incaseyoumissedit.co.za/contact",
  },
  alternates: {
    canonical: "https://incaseyoumissedit.co.za/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

