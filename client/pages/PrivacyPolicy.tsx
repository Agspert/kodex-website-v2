import React from "react";
import Layout from "../components/shared/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-kodex-green">
            Kodex Shopify Plugin - Privacy Policy
          </h1>
          
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Kodex ("the App") enables brands to create product stories using a simple drag-and-drop interface, 
                improving consumer engagement, trust, and product transparency ("the Service"). This Privacy Policy 
                outlines how personal information is collected, used, and shared when merchants install or use the 
                App in connection with their Shopify-supported store.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                2. Personal Information the App Collects
              </h2>
              <p className="text-gray-300 leading-relaxed">
                When merchants install the App, Kodex automatically accesses the following information from the Shopify account:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>
                  <strong>Shop Information:</strong> Store name, domain, and basic store details.
                </li>
                <li>
                  <strong>Product Information:</strong> Product names, descriptions, and images.
                </li>
                <li>
                  <strong>User Information:</strong> Name and email address of merchants.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed font-semibold">
                Kodex does <em>not</em> store personal customer data or share any collected data with third parties.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed">Kodex collects data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Provide and optimize the Service.</li>
                <li>Improve user experience and ensure seamless plugin functionality.</li>
                <li>Communicate necessary service updates.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                4. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Data is stored as per merchant requirements and can be deleted upon account deletion request. 
                Merchants can request data removal by writing to{" "}
                <a 
                  href="mailto:connect@mykodex.com" 
                  className="text-kodex-green hover:text-kodex-yellow transition-colors underline"
                >
                  connect@mykodex.com
                </a>.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                5. Your Rights & Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Kodex follows all Shopify extension directives but does not independently comply with GDPR, CCPA, 
                or other global privacy laws. Merchants are responsible for ensuring compliance with applicable 
                regulations for their stores.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                6. Changes to this Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Kodex may update this policy periodically. Any changes will be reflected in this document.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                7. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For any privacy-related inquiries, contact us at{" "}
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

export default PrivacyPolicy;
