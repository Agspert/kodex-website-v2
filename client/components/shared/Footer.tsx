import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-kodex-dark-secondary py-4 px-4 md:px-8 lg:px-16">
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
  );
};

export default Footer;
