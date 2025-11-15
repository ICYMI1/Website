import React from "react";
import { Navigation } from "../components/nav";

export default function PrivacyPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Privacy Policy
          </h2>
          <p className="mt-4 text-zinc-600">
            Effective Date: 06/09/2024
          </p>
        </div>
        <div className="w-full h-px bg-zinc-200" />

        {/* Content Sections */}
        <div className="max-w-2xl mx-auto space-y-16">
          {/* Introduction */}
          <section className="prose prose-zinc">
            <p className="text-zinc-600 leading-8">
              At InCaseYouMissedIt, your privacy is important to us. This Privacy Policy explains how we handle information when you interact with our website, token ecosystem, and any content we share. This includes embedded social media content, community features, and blockchain-related services linked to the InCaseYouMissedIt Token.
            </p>
            <p className="text-zinc-600 leading-8">
              By using our platform, you acknowledge and agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 1 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              1. Information We Collect
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  1.1 Direct Information Collection
                </h3>
                <p className="text-zinc-600 leading-8">
                  We do not collect personal information directly from users when they browse our website. We do not request, store, or process names, emails, phone numbers, or personal details unless voluntarily provided through contact forms or communication channels.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  1.2 Blockchain-Related Information
                </h3>
                <p className="text-zinc-600 leading-8">
                  When interacting with the InCaseYouMissedIt Token, you may use blockchain wallets (e.g., MetaMask, OKX, Trust Wallet).
                </p>
                <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
                  <li>We do not collect or store wallet addresses or transaction details.</li>
                  <li>However, because blockchain networks are public, any transaction involving our token is permanently recorded and publicly viewable on the Polygon (MATIC) blockchain.</li>
                  <li>We do not have the ability to alter or delete blockchain data.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  1.3 Embedded Social Media Content
                </h3>
                <p className="text-zinc-600 leading-8">
                  Our platform features embedded content from third-party social media platforms such as:
                </p>
                <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>TikTok</li>
                  <li>YouTube</li>
                  <li>Twitter/X</li>
                </ul>
                <p className="text-zinc-600 leading-8 mt-4">
                  Embedded content behaves exactly as if you visited the original platform directly.
                </p>
                <p className="text-zinc-600 leading-8 mt-4">
                  These platforms may collect data about your interactions, including:
                </p>
                <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
                  <li>IP address</li>
                  <li>Device type</li>
                  <li>Cookies</li>
                  <li>Browsing behavior</li>
                  <li>Interaction with embedded posts</li>
                </ul>
                <p className="text-zinc-600 leading-8 mt-4">
                  This data is collected under the respective platform's own privacy policies.
                </p>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 2 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              2. Embedded Content and Third-Party Policies
            </h2>
            <p className="text-zinc-600 leading-8 mt-6">
              Embedded content may include posts, videos, images, or interactive media.
            </p>
            <p className="text-zinc-600 leading-8 mt-4">
              When interacting with embedded content:
            </p>
            <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
              <li>Third-party platforms may track your activity.</li>
              <li>If you're logged in to the platform, your interactions may be associated with your personal account.</li>
              <li>Such platforms may set cookies or tracking technologies beyond our control.</li>
            </ul>
            <p className="text-zinc-600 leading-8 mt-4">
              We encourage users to review the privacy policies of the platforms whose content they interact with.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 3 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              3. Cookies and Tracking Technologies
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  3.1 Our Website
                </h3>
                <p className="text-zinc-600 leading-8">
                  We do not use cookies, analytics trackers, or any form of user-tracking technology.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  3.2 Third-Party Embedded Services
                </h3>
                <p className="text-zinc-600 leading-8">
                  Social media platforms may use their own cookies or tracking scripts when their content is embedded on our website.
                </p>
                <p className="text-zinc-600 leading-8 mt-4">
                  We do not control, monitor, or store any data they collect.
                </p>
                <p className="text-zinc-600 leading-8 mt-4">
                  For more details, users should refer to the Cookie Policies of:
                </p>
                <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
                  <li>Facebook/Instagram (Meta)</li>
                  <li>YouTube (Google)</li>
                  <li>TikTok</li>
                  <li>Twitter/X</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 4 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              4. Token Ecosystem & Blockchain Interactions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  4.1 Transparency of Blockchain
                </h3>
                <p className="text-zinc-600 leading-8">
                  Blockchain networks are inherently public.
                </p>
                <p className="text-zinc-600 leading-8 mt-4">
                  Interactions with the InCaseYouMissedIt Token — such as:
                </p>
                <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
                  <li>staking</li>
                  <li>swaps</li>
                  <li>liquidity provision</li>
                  <li>governance actions</li>
                </ul>
                <p className="text-zinc-600 leading-8 mt-4">
                  are recorded permanently on the Polygon blockchain.
                </p>
                <p className="text-zinc-600 leading-8 mt-4">
                  While we do not collect personal information, wallet addresses and transaction activity are publicly viewable due to blockchain design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  4.2 Third-Party Wallet Providers
                </h3>
                <p className="text-zinc-600 leading-8">
                  Using our token or participating in the ecosystem may require third-party wallets.
                </p>
                <p className="text-zinc-600 leading-8 mt-4">
                  These providers may collect:
                </p>
                <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
                  <li>device metadata</li>
                  <li>IP addresses</li>
                  <li>security-related data</li>
                </ul>
                <p className="text-zinc-600 leading-8 mt-4">
                  InCaseYouMissedIt has no control over their data practices and recommends reviewing their privacy policies.
                </p>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 5 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              5. Third-Party Links
            </h2>
            <p className="text-zinc-600 leading-8 mt-6">
              Our platform may contain links to external websites, partner pages, or third-party services.
            </p>
            <p className="text-zinc-600 leading-8 mt-4">
              We do not control and are not responsible for:
            </p>
            <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
              <li>privacy practices</li>
              <li>data collection</li>
              <li>security policies</li>
              <li>user tracking methods</li>
            </ul>
            <p className="text-zinc-600 leading-8 mt-4">
              of third-party websites.
            </p>
            <p className="text-zinc-600 leading-8 mt-4">
              We strongly encourage reviewing the privacy policies of any external site you visit.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 6 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              6. Data Security
            </h2>
            <p className="text-zinc-600 leading-8 mt-6">
              We take reasonable measures to safeguard any non-personal data associated with our platform.
            </p>
            <p className="text-zinc-600 leading-8 mt-4">
              However:
            </p>
            <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
              <li>we do not control the data handling of social media platforms</li>
              <li>we cannot alter or delete public blockchain records</li>
              <li>no online service can guarantee absolute security</li>
            </ul>
            <p className="text-zinc-600 leading-8 mt-4">
              Users interact with third-party services at their own discretion.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 7 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              7. Children's Privacy
            </h2>
            <p className="text-zinc-600 leading-8 mt-6">
              InCaseYouMissedIt does not target or knowingly collect information from children under the age of 13.
            </p>
            <p className="text-zinc-600 leading-8 mt-4">
              Embedded platforms may enforce their own age restrictions.
            </p>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 8 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-zinc-600 leading-8 mt-6">
              We may update this Privacy Policy to reflect changes to:
            </p>
            <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
              <li>our practices</li>
              <li>platform features</li>
              <li>token ecosystem</li>
              <li>legal requirements</li>
            </ul>
            <p className="text-zinc-600 leading-8 mt-4">
              When updates occur:
            </p>
            <ul className="text-zinc-600 leading-8 mt-4 space-y-2 list-disc list-inside">
              <li>The "Effective Date" will be changed.</li>
              <li>A revised version will be posted on this page.</li>
              <li>We encourage users to review this policy periodically.</li>
            </ul>
          </section>

          <div className="w-full h-px bg-zinc-200" />

          {/* Section 9 */}
          <section className="prose prose-zinc">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              9. Contact Us
            </h2>
            <p className="text-zinc-600 leading-8 mt-6">
              For questions or concerns regarding this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-zinc-600 leading-8">
                Email: <a href="mailto:policy@incaseyoumissedit.co.za" className="text-zinc-900 hover:underline">policy@incaseyoumissedit.co.za</a>
              </p>
              <p className="text-zinc-600 leading-8">
                Address: South Africa
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

