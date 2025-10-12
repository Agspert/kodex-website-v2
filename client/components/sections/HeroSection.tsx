import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[532px] px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-500 via-teal-400 to-cyan-400">
      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 md:py-16 items-center">
        {/* Video Preview - First on mobile/tablet, full width on medium */}
        <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-xl md:max-w-full lg:max-w-xl bg-teal-300/40 backdrop-blur-sm rounded-3xl aspect-video overflow-hidden">
            <video 
              className="w-full h-full object-cover rounded-3xl"
              controls
              poster=""
              preload="metadata"
              autoPlay
              muted
              loop
            >
              <source src="/Kodex Intro - Version 3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Left Content - Second on mobile/tablet, first on desktop, centered on medium */}
        <div className="space-y-8 order-2 lg:order-1 text-center md:text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your Brand needs a new identity;
            <br />
            it's Authenticity
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => window.open("https://apps.shopify.com/brand-story", "_blank")} className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all">
              Free Trial
            </button>
            <button onClick={() => window.open("https://calendly.com/d/csnm-5gc-cgv/30-minute-meeting", "_blank")} className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all">
              Book a demo
            </button>
          </div>

          <p className="text-sm text-black/80">
            ✨ Free for 1 month • No Credit Card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
