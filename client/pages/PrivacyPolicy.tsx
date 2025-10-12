import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-kodex-dark text-white min-h-screen">
      {/* Header Navigation */}
      <div className="flex items-center justify-between py-6 px-4 md:px-8 lg:px-16">
        <div className="text-2xl font-bold text-white">
          <svg width="95" height="35" viewBox="0 0 95 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.932 28.028C15.5027 28.028 15.1573 27.8507 14.896 27.496L7.924 18.508L10.08 16.324L17.192 25.592C17.416 25.8907 17.528 26.2173 17.528 26.572C17.528 27.02 17.36 27.3747 17.024 27.636C16.688 27.8973 16.324 28.028 15.932 28.028ZM16.072 8.316C16.4453 8.316 16.7533 8.46533 16.996 8.764C17.2387 9.06267 17.36 9.37067 17.36 9.688C17.36 10.024 17.22 10.332 16.94 10.612L4.872 22.064L4.704 18.76L14.952 8.848C15.288 8.49333 15.6613 8.316 16.072 8.316ZM3.724 28C3.29467 28 2.94 27.8693 2.66 27.608C2.39867 27.328 2.268 26.9827 2.268 26.572V9.828C2.268 9.41733 2.408 9.08133 2.688 8.82C2.968 8.54 3.332 8.4 3.78 8.4C4.20933 8.4 4.55467 8.54 4.816 8.82C5.07733 9.08133 5.208 9.41733 5.208 9.828V26.572C5.18933 26.9827 5.04933 27.328 4.788 27.608C4.52667 27.8693 4.172 28 3.724 28Z" fill="#00B894"/>
            <path d="M51.528 8.4C52.8907 8.4 54.0947 8.66133 55.14 9.184C56.1853 9.688 57.0533 10.3973 57.744 11.312C58.4533 12.208 58.9853 13.2533 59.34 14.448C59.6947 15.624 59.872 16.8747 59.872 18.2C59.872 20.0107 59.5547 21.6627 58.92 23.156C58.2853 24.6307 57.352 25.8067 56.12 26.684C54.888 27.5613 53.3573 28 51.528 28H44.696C44.304 28 43.968 27.8693 43.688 27.608C43.408 27.328 43.268 26.9827 43.268 26.572V9.828C43.268 9.41733 43.408 9.08133 43.688 8.82C43.968 8.54 44.304 8.4 44.696 8.4H51.528ZM51.248 25.312C52.5733 25.312 53.6467 24.9853 54.468 24.332C55.2893 23.6787 55.8867 22.82 56.26 21.756C56.652 20.6733 56.848 19.488 56.848 18.2C56.848 17.248 56.736 16.352 56.512 15.512C56.3067 14.6533 55.9707 13.8973 55.504 13.244C55.056 12.572 54.4773 12.0493 53.768 11.676C53.0773 11.284 52.2373 11.088 51.248 11.088H45.956L46.208 10.836V25.592L46.04 25.312H51.248ZM64.739 8.4H74.427C74.819 8.4 75.1456 8.53067 75.407 8.792C75.687 9.05333 75.827 9.38 75.827 9.772C75.827 10.164 75.687 10.4813 75.407 10.724C75.1456 10.9667 74.819 11.088 74.427 11.088H65.971L66.251 10.612V16.884L65.999 16.604H73.167C73.559 16.604 73.8856 16.7347 74.147 16.996C74.427 17.2573 74.567 17.5933 74.567 18.004C74.567 18.396 74.427 18.7133 74.147 18.956C73.8856 19.1987 73.559 19.32 73.167 19.32H66.055L66.251 19.068V25.536L66.055 25.312H74.427C74.819 25.312 75.1456 25.452 75.407 25.732C75.687 25.9933 75.827 26.3013 75.827 26.656C75.827 27.048 75.687 27.3747 75.407 27.636C75.1456 27.8787 74.819 28 74.427 28H64.739C64.347 28 64.011 27.8693 63.731 27.608C63.451 27.328 63.311 26.9827 63.311 26.572V9.828C63.311 9.41733 63.451 9.08133 63.731 8.82C64.011 8.54 64.347 8.4 64.739 8.4ZM92.4391 8.344C92.8124 8.344 93.1204 8.484 93.3631 8.764C93.6244 9.02533 93.7551 9.31467 93.7551 9.632C93.7551 9.93067 93.6524 10.22 93.4471 10.5L87.5671 18.368L85.9711 16.156L91.3191 9.016C91.6364 8.568 92.0097 8.344 92.4391 8.344ZM79.6711 8.316C80.1191 8.316 80.5017 8.512 80.8191 8.904L93.4471 25.872C93.6524 26.1147 93.7551 26.3947 93.7551 26.712C93.7551 27.16 93.5964 27.5053 93.2791 27.748C92.9617 27.9907 92.6444 28.112 92.3271 28.112C91.8791 28.112 91.5057 27.916 91.2071 27.524L78.5511 10.584C78.3457 10.3227 78.2431 10.0427 78.2431 9.744C78.2431 9.33333 78.3924 8.99733 78.6911 8.736C78.9897 8.456 79.3164 8.316 79.6711 8.316ZM79.4751 28.112C79.1204 28.112 78.8217 27.9907 78.5791 27.748C78.3364 27.4867 78.2151 27.1973 78.2151 26.88C78.2151 26.5627 78.3271 26.2453 78.5511 25.928L84.4871 17.892L86.0271 20.16L80.6231 27.468C80.3244 27.8973 79.9417 28.112 79.4751 28.112Z" fill="#00B894"/>
            <path d="M37.858 20.8611C38.0768 20.1115 38.194 19.3193 38.194 18.5C38.194 13.8056 34.345 10 29.597 10C24.849 10 21 13.8056 21 18.5C21 23.1944 24.849 27 29.597 27C32.113 27 34.3765 25.9314 35.9487 24.2281M37.858 20.8611L37.1194 19.5625M37.858 20.8611L39 19.8281M26.3731 18.5L28.5224 20.625L32.8209 16.375" stroke="#00B894" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="flex items-center gap-4 md:gap-8 text-sm">
          <a href="/" className="hidden md:inline hover:text-white/80 transition-colors text-white">Home</a>
          <a href="/#about" className="hidden md:inline hover:text-white/80 transition-colors text-white">About</a>
          <a href="/#pricing" className="hidden md:inline hover:text-white/80 transition-colors text-white">Pricing</a>
          <a href="/#contact" className="hidden md:inline hover:text-white/80 transition-colors text-white">Contact</a>
        </div>
      </div>

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

      {/* Footer */}
      <footer className="bg-kodex-dark-secondary py-4 px-4 md:px-8 lg:px-16 mt-16">
        <div className="text-center text-base space-y-2">
          <div className="flex justify-center gap-6 mb-2">
            <a 
              href="/terms-of-service" 
              className="text-kodex-green hover:text-kodex-yellow transition-colors underline"
            >
              Terms of Service
            </a>
            <a 
              href="/privacy-policy" 
              className="text-kodex-green hover:text-kodex-yellow transition-colors underline"
            >
              Privacy Policy
            </a>
          </div>
          <p>
            Copyright Kodex 2025. Built with ❤️ by Agspert Technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
