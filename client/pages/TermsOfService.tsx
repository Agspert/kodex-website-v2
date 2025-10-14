import React from "react";
import Layout from "../components/shared/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-kodex-green">
            Kodex Shopify Plugin - Terms of Service
          </h1>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Kodex ("the Service") provides Shopify merchants with tools to create and embed engaging product stories within their stores. 
                By using Kodex, merchants agree to these Terms of Service.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                2. Pricing & Payment
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>Free Version:</strong> Available with limited storage.
                </li>
                <li>
                  <strong>Paid Version:</strong> Coming very soon...
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Payments will be managed via Shopify's billing system.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                3. Merchant Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  Merchants own and manage all content hosted on Kodex servers.
                </li>
                <li>
                  Kodex does not fact-check, verify, or assume responsibility for the accuracy of content.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                4. Limitations of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  Kodex provides the Service "as is" without warranties of any kind.
                </li>
                <li>
                  Kodex is not liable for any false or misleading content provided by merchants.
                </li>
                <li>
                  Kodex is not responsible for damages arising from the use or inability to use the Service.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                5. Service Termination
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Kodex reserves the right to terminate a merchant's access if they violate Shopify's terms or use the Service inappropriately. 
                Merchants can cancel their subscription anytime.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                6. Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All disputes are subject to arbitration within the jurisdiction of Indian territory.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                7. Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Kodex may update these terms. Continued use of the Service implies acceptance of any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                For any questions, contact{" "}
                <a 
                  href="mailto:connect@mykodex.com" 
                  className="text-kodex-green hover:text-kodex-yellow transition-colors underline"
                >
                  connect@mykodex.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
