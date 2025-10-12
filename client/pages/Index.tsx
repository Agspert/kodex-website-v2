import { useState } from "react";
import Layout from "../components/shared/Layout";
import HeroSection from "../components/sections/HeroSection";
import ValuePropositionCards from "../components/sections/ValuePropositionCards";
import ContactForm from "../components/sections/ContactForm";


export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition Cards */}
      <ValuePropositionCards />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works ⚙️</h2>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-kodex-dark-secondary rounded-3xl border border-kodex-lighter-gray shadow-lg shadow-white/40 h-80 flex items-center justify-center">
              <img src="/Rec 1.gif" alt="Real-Time Drag-&-Drop Story Builder" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">Real-Time Drag-&-Drop Story Builder</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p>🖥️ Access the Kodex Story Builder from the Stories tab in your Shopify admin—zero coding, zero wait.</p>
                <p>📂 Drag and drop any media—from images and videos to 360° panoramas—into our CMS with full format support.</p>
                <p>⚡ Watch your brand narrative come to life instantly with real-time rendering as you build.</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold">Instant Storefront Story Publishing & Preview</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p>🚀 One-click publish your interactive brand story directly to selected Shopify pages—no coding required.</p>
                <p>🎯 Choose and map custom locations (product, collection, or landing pages) to maximize cross-selling or up-selling.</p>
                <p>👀 Preview the live storefront integration in real time to ensure a seamless, on-brand customer experience.</p>
              </div>
            </div>
            <div className="bg-kodex-dark-secondary rounded-3xl border border-kodex-lighter-gray shadow-lg shadow-white/40 h-80 flex items-center justify-center order-1 md:order-2">
              <img src="/Rec 2.gif" alt="Instant Storefront Story Publishing & Preview" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-kodex-dark-secondary rounded-3xl border border-kodex-lighter-gray shadow-lg shadow-white/40 h-80 flex items-center justify-center">
              <img src="/Rec 3.gif" alt="Engagement Analytics & Instant CSV Export" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">Engagement Analytics & Instant CSV Export</h3>
              <div className="space-y-3 text-base leading-relaxed">
                <p>📊 Filter and sort metrics by product category, date range, or pincode for pinpoint performance insights.</p>
                <p>🌐 Dive into visitor demographics—locations, browser types, and OS preferences—to sharpen your targeting.</p>
                <p>📥 Export all engagement data in CSV with one click to fuel optimized ads and boost ROAS.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-medium shadow-lg shadow-white/50 hover:shadow-white/70 transition-all">
            Create Your 3D Story
          </button>
          <p className="mt-4 text-base">✨ Start for Free - No Credit Card required</p>
        </div>
      </section>

      {/* Setup Time Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-kodex-dark-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Takes less setup time than delivering a pizza...🍕
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="bg-kodex-dark-secondary rounded-xl border border-kodex-light-gray shadow-lg shadow-white/40 p-8">
            <div className="text-5xl text-kodex-green mb-6 text-center">
              <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path d="M28 3V13" stroke="#00B894" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 25.5L50.5 30.5L43 35.5L50.5 43L43 50.5L35.5 43L30.5 50.5L25.5 25.5Z" fill="#00B894"/>
                <path d="M45.6784 10.3223L38.6074 17.3933" stroke="#00B894" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.3223 45.6776L17.3933 38.6064" stroke="#00B894" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 28H13" stroke="#00B894" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.3223 10.3223L17.3934 17.3933" stroke="#00B894" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-kodex-green text-center mb-6">One Click Install</h3>
            <p className="text-center leading-relaxed">
              Install Kodex in one click—no technical dependencies. Launch our AI-powered Story Generator or upload your 3D assets instantly and start crafting immersive product stories—no code required.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-kodex-dark-secondary rounded-xl border border-kodex-light-gray shadow-lg shadow-white/40 p-8">
            <div className="text-5xl text-kodex-green mb-6 text-center">
              <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path d="M19.1478 13.6901C21.8393 8.86154 23.1853 6.44727 25.1973 6.44727C27.2093 6.44727 28.5553 8.86154 31.2468 13.6901L31.9433 14.9393C32.708 16.3114 33.0905 16.9974 33.6868 17.4501C34.283 17.9028 35.0258 18.0708 36.511 18.4069L37.8633 18.7128C43.09 19.8955 45.7035 20.4868 46.3253 22.4863C46.947 24.4855 45.1653 26.569 41.602 30.7358L40.6803 31.8138C39.6675 32.998 39.1613 33.59 38.9335 34.3225C38.7058 35.0548 38.7823 35.8448 38.9355 37.4245L39.0748 38.8628C39.6135 44.4223 39.8828 47.202 38.255 48.4378C36.6273 49.6735 34.1803 48.5468 29.2865 46.2935L28.0203 45.7105C26.6298 45.0703 25.9343 44.75 25.1973 44.75C24.4603 44.75 23.7648 45.0703 22.3743 45.7105L21.108 46.2935C16.2142 48.5468 13.7673 49.6735 12.1395 48.4378C10.5116 47.202 10.781 44.4223 11.3197 38.8628L11.4591 37.4245C11.6122 35.8448 11.6887 35.0548 11.461 34.3225C11.2332 33.59 10.7269 32.998 9.71434 31.8138L8.79246 30.7358C5.22916 26.569 3.44751 24.4855 4.06929 22.4863C4.69104 20.4868 7.30446 19.8955 12.5313 18.7128L13.8835 18.4069C15.3688 18.0708 16.1115 17.9028 16.7078 17.4501C17.3041 16.9974 17.6865 16.3114 18.4514 14.9393L19.1478 13.6901Z" fill="#00B894"/>
                <path d="M6.11655 0.199203C6.19153 -0.0652473 6.66095 -0.0668478 6.7377 0.197102C7.0882 1.40238 7.73815 3.18393 8.72095 4.16013C9.70378 5.13633 11.4897 5.7742 12.6973 6.11655C12.9618 6.19153 12.9633 6.66095 12.6994 6.7377C11.4941 7.0882 9.71255 7.73815 8.73638 8.72095C7.76018 9.70378 7.12228 11.4897 6.77993 12.6973C6.70495 12.9618 6.23553 12.9633 6.15878 12.6994C5.80828 11.4941 5.15835 9.71255 4.17553 8.73638C3.1927 7.76018 1.40683 7.12228 0.199203 6.77993C-0.0652473 6.70495 -0.0668478 6.23553 0.197102 6.15878C1.40238 5.80828 3.18393 5.15835 4.16013 4.17553C5.13633 3.1927 5.7742 1.40683 6.11655 0.199203Z" fill="#00B894"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4473 2.07227C42.4828 2.07227 43.3223 2.91174 43.3223 3.94727V4.57227H43.9473C44.9828 4.57227 45.8223 5.41174 45.8223 6.44727C45.8223 7.48279 44.9828 8.32227 43.9473 8.32227H43.3223V8.94727C43.3223 9.98279 42.4828 10.8223 41.4473 10.8223C40.4118 10.8223 39.5723 9.98279 39.5723 8.94727V8.32227H38.9473C37.9118 8.32227 37.0723 7.48279 37.0723 6.44727C37.0723 5.41174 37.9118 4.57227 38.9473 4.57227H39.5723V3.94727C39.5723 2.91174 40.4118 2.07227 41.4473 2.07227Z" fill="#00B894"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-kodex-green text-center mb-6">Create & Embed</h3>
            <p className="text-center leading-relaxed">
              Paste product URLs and a 1,000-character brand summary, then generate a custom AI-driven 3D story in just 10 minutes. Embed it across your site or via QR code on packaging to engage shoppers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-kodex-dark-secondary rounded-xl border border-kodex-light-gray shadow-lg shadow-white/40 p-8">
            <div className="text-5xl text-kodex-green mb-6 text-center">
              <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7578 13.8337C10.7578 6.19357 16.8424 0 24.3481 0C31.8538 0 37.9384 6.19357 37.9384 13.8337C37.9384 21.414 33.6008 30.2595 26.8333 33.4226C25.2557 34.1601 23.4405 34.1601 21.8629 33.4226C15.0954 30.2595 10.7578 21.414 10.7578 13.8337ZM24.3481 18.1204C26.8501 18.1204 28.8782 16.0922 28.8782 13.5903C28.8782 11.0884 26.8501 9.0602 24.3481 9.0602C21.8461 9.0602 19.818 11.0884 19.818 13.5903C19.818 16.0922 21.8461 18.1204 24.3481 18.1204Z" fill="#00B894"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.38472 28.3911C5.96739 29.1263 5.84358 30.1947 5.10821 30.7775C3.80884 31.807 3.39757 32.7144 3.39757 33.4097C3.39757 33.9601 3.64736 34.6286 4.39564 35.4021C5.15158 36.1837 6.33267 36.9776 7.94027 37.7068C10.7812 38.9951 14.7081 39.9707 19.2529 40.3958V39.3555C19.2529 38.6889 19.6427 38.0841 20.2498 37.8087C20.8568 37.5333 21.5687 37.6381 22.0704 38.0771L25.468 41.05C25.8365 41.3725 26.0481 41.8387 26.0481 42.3284C26.0481 42.8183 25.8365 43.2842 25.468 43.607L22.0704 46.5799C21.5687 47.0186 20.8568 47.1237 20.2498 46.8483C19.6427 46.5728 19.2529 45.9678 19.2529 45.3012V43.8072C14.3041 43.373 9.87396 42.3145 6.53691 40.801C4.6935 39.9648 3.10468 38.9546 1.95347 37.7643C0.794602 36.5661 0 35.0949 0 33.4097C0 31.2575 1.28354 29.4731 2.99825 28.1145C3.73362 27.5317 4.80209 27.6556 5.38472 28.3911ZM43.3139 28.3911C43.8964 27.6556 44.9649 27.5317 45.7003 28.1145C47.415 29.4731 48.6986 31.2575 48.6986 33.4097C48.6986 36.5312 46.0528 38.8699 42.9304 40.4346C39.6649 42.0708 35.2011 43.2289 30.1831 43.7377C29.2497 43.8321 28.4164 43.1522 28.3217 42.2187C28.2273 41.2853 28.9072 40.452 29.8407 40.3573C34.5918 39.8758 38.6223 38.7931 41.4083 37.3969C44.3374 35.9291 45.301 34.4442 45.301 33.4097C45.301 32.7144 44.8897 31.807 43.5904 30.7775C42.855 30.1947 42.7313 29.1263 43.3139 28.3911Z" fill="#00B894"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-kodex-green text-center mb-6">Track & Optimize</h3>
            <p className="text-center leading-relaxed">
              Monitor real-time engagement in your intuitive dashboard. Export detailed analytics to CSV for targeted marketing campaigns—boost organic traffic and improve ROAS.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="mb-0 mt-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Brands have been cooking with <span className="inline-flex items-center">KODEX 🫕</span>
        </h2>

        <div className="max-w-6xl mx-auto mt-16 space-y-16">
          {/* Testimonial 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-start flex items-center justify-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                  <path d="M21.5356 2.46305C15.4834 -0.289768 8.49924 -0.289768 2.4471 2.46305C-0.284449 8.56233 -0.284449 15.6009 2.4471 21.7002C8.49924 24.453 15.4834 24.453 21.5356 21.7002C24.2671 15.6009 24.2671 8.56233 21.5356 2.46305Z" fill="#00B894"/>
                  <path d="M21.897 2.29913C21.8573 2.21065 21.7871 2.13988 21.6993 2.09994C18.636 0.706559 15.3702 0 11.9926 0C8.61493 0 5.34911 0.706512 2.28579 2.0999C2.19801 2.13984 2.12778 2.2106 2.08815 2.29908C-0.696051 8.51591 -0.696051 15.647 2.08815 21.8639C2.12778 21.9523 2.19801 22.0231 2.28579 22.063C5.34911 23.4564 8.61493 24.1629 11.9926 24.1629C15.3702 24.1629 18.636 23.4564 21.6993 22.063C21.7871 22.0231 21.8573 21.9523 21.897 21.8639C24.6812 15.647 24.6812 8.51596 21.897 2.29913ZM22.8334 16.1568C21.2641 16.5802 19.6109 16.9047 17.9122 17.1301C18.0775 15.6062 18.1676 14.0475 18.1808 12.4798H23.1908C23.1697 13.7109 23.0506 14.9407 22.8334 16.1568ZM0.794263 12.4798H5.80431C5.81747 14.0475 5.90765 15.6062 6.07288 17.1301C4.37419 16.9047 2.72099 16.5802 1.15175 16.1568C0.93452 14.9407 0.815391 13.7109 0.794263 12.4798ZM1.15175 8.00622C2.72099 7.58283 4.37419 7.25835 6.07288 7.03292C5.9076 8.55684 5.81747 10.1156 5.80422 11.6832H0.794263C0.815391 10.4521 0.93452 9.22237 1.15175 8.00622ZM12.3878 6.64961C13.9713 6.66312 15.5522 6.75707 17.1016 6.93274C17.2758 8.49419 17.3691 10.0874 17.3824 11.6832H12.3878V6.64961ZM12.3878 5.845V0.800367C13.6216 0.821282 14.8394 0.940159 16.0363 1.15591C16.4564 2.73748 16.7784 4.40369 17.0021 6.11575C15.49 5.94914 13.9433 5.85831 12.3878 5.845ZM11.5974 5.845C10.0418 5.85826 8.49515 5.94914 6.983 6.11575C7.20674 4.40369 7.52871 2.73753 7.94892 1.15591C9.14589 0.940159 10.3636 0.821234 11.5974 0.800367L11.5974 5.845ZM11.5974 6.64961V11.6832H6.60266C6.61606 10.0873 6.70928 8.49415 6.88359 6.93269C8.43298 6.75707 10.0138 6.66312 11.5974 6.64961ZM6.60266 12.4798H11.5973V17.5133C10.0138 17.4998 8.43294 17.4059 6.88355 17.2303C6.70933 15.6688 6.61606 14.0757 6.60266 12.4798ZM11.5974 18.318V23.3626C10.3636 23.3417 9.14579 23.2228 7.94887 23.0071C7.52867 21.4255 7.20674 19.7593 6.98296 18.0472C8.4951 18.2138 10.0418 18.3047 11.5974 18.318ZM12.3878 18.318C13.9433 18.3047 15.49 18.2138 17.0021 18.0473C16.7784 19.7593 16.4564 21.4255 16.0363 23.0071C14.8393 23.2229 13.6216 23.3418 12.3878 23.3627V18.318ZM12.3878 17.5133V12.4798H17.3824C17.369 14.0757 17.2758 15.6688 17.1016 17.2303C15.5522 17.4059 13.9713 17.4999 12.3878 17.5133ZM18.1808 11.6832C18.1676 10.1155 18.0775 8.55684 17.9122 7.03287C19.611 7.2583 21.2642 7.58278 22.8334 8.00617C23.0507 9.22233 23.1698 10.452 23.1909 11.6832H18.1808ZM22.6606 7.13598C21.1192 6.73832 19.4924 6.42876 17.8163 6.21244C17.6016 4.52281 17.2943 2.88298 16.8997 1.32918C18.3831 1.65739 19.8323 2.13611 21.2377 2.76439C21.861 4.18105 22.3351 5.646 22.6606 7.13598ZM2.74751 2.76444C4.15289 2.13615 5.60212 1.65734 7.0856 1.32918C6.69087 2.88298 6.38361 4.52276 6.16887 6.21244C4.49271 6.42881 2.86598 6.73832 1.32456 7.13598C1.65005 5.646 2.12413 4.18105 2.74751 2.76444ZM1.32447 17.0271C2.86589 17.4247 4.49267 17.7343 6.16877 17.9506C6.38351 19.6402 6.69078 21.28 7.0855 22.8339C5.60203 22.5056 4.1528 22.0269 2.74742 21.3986C2.12413 19.9819 1.65005 18.517 1.32447 17.0271ZM21.2376 21.3986C19.8322 22.0269 18.383 22.5057 16.8996 22.8338C17.2943 21.28 17.6016 19.6402 17.8163 17.9505C19.4924 17.7342 21.1192 17.4247 22.6606 17.027C22.3351 18.517 21.861 19.9819 21.2376 21.3986Z" fill="#23272D"/>
                </svg>
                <div>
                  <h3 className="text-2xl font-medium mb-4">An authentic brand story in 3D narrative</h3>
                  <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6">
                    <p className="leading-relaxed">
                      Transparency became a game changer for a DTC Tea Brand from Northeastern India who used Kodex to show their farm to fork story in a 3D narrative
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                <img src="/WoolahPacket.png" alt="Woolah Tea Packet" className="h-40 object-cover" />
                <img src="/QR_eg_WoolahTea.gif" alt="QR Code Example" className="h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-start flex items-center justify-center">
            <div className="relative h-80 md:h-96 order-2 md:order-1">
              <div className="absolute inset-0 flex gap-4">
                <img src="/Screen Recording 1.gif" alt="Screen Recording 1" className="shadow-lg shadow-white/25 h-full w-80 object-cover rounded-3xl transform translate-y-4" />
                <img src="/Screen Recording 2.gif" alt="Screen Recording 2" className="shadow-lg shadow-white/25 h-full w-80 object-cover rounded-3xl transform -translate-y-4" />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-start gap-3">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                  <path d="M32 14.9928L28.4509 11.0081L28.9455 5.7334L23.6945 4.55805L20.9455 0L16 2.09269L11.0545 0L8.30546 4.55805L3.05455 5.71906L3.54909 10.9938L0 14.9928L3.54909 18.9775L3.05455 24.2666L8.30546 25.4419L11.0545 30L16 27.893L20.9455 29.9857L23.6945 25.4276L28.9455 24.2523L28.4509 18.9775L32 14.9928ZM13.0909 22.1596L7.27273 16.4262L9.32364 14.4052L13.0909 18.1032L22.6764 8.65743L24.7273 10.6928L13.0909 22.1596Z" fill="#00B894"/>
                </svg>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Testimonials became proof it works!</h3>
                  <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6">
                    <p className="leading-relaxed">
                      They were able to prove their claim of authentic organic tea to their customers; resulting in 15% up-tick in cart value
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-start flex items-center justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                  <path d="M18 0C18.7956 0 19.5587 0.292658 20.1213 0.813592C20.6839 1.33453 21 2.04107 21 2.77778V25L10.5 20.8333L0 25V2.77778C0 1.23611 1.35 0 3 0H18ZM9 15.2778L18.375 6.61111L16.26 4.63889L9 11.3611L5.115 7.76389L3 9.72222L9 15.2778Z" fill="#00B894"/>
                </svg>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Genuine story telling got recognized!</h3>
                  <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6">
                    <p className="leading-relaxed">
                      So much so that they were able to impress the judges of Shark Tank India... And along came a cheque!! 😲😍🤩
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0">
                <img src="/TestimonialScreenshot.png" alt="Testimonial Screenshot" className="absolute top-0 left-0 h-3/4" />
                <img src="/SharkAndUpamanyu.png" alt="Shark Tank and Upamanyu" className="absolute bottom-0 right-0 w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green CTA Section */}
      <section className="-mt-10 mb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-kodex-lighter-gray bg-gradient-to-r from-kodex-yellow via-kodex-green to-kodex-green shadow-lg shadow-white/40 p-8 md:p-12">
          <div className="text-center text-black">
            <h3 className="text-2xl md:text-3xl font-medium mb-8">
              Helping <span className="font-bold">Shopify</span> brands grow organically with authentic storytelling
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg border-2 border-black shadow-lg hover:shadow-xl transition-all">
                Download Case Study
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg border-2 border-black shadow-lg hover:shadow-xl transition-all">
                Try on Shopify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-kodex-dark-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About us</h2>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg leading-relaxed mb-12">
            At Kodex, we're building the intelligence layer that powers how D2C brands tell their stories. In a market where customer acquisition costs are rising and brand loyalty is harder than ever, Kodex combines AI-driven brand story embeddings with first-party analytics to create a unified brand memory system. Every time a customer interacts with your product page or ad, Kodex captures granular insights — pincode, dwell time, engagement depth, repeat visits — and translates them into measurable business outcomes like higher cart value, improved ad ROI, and stronger brand recall.
          </p>

          <p className="text-center text-lg leading-relaxed mb-12">
            We believe brand storytelling shouldn't be subjective. It should be measurable, data-driven, and profitable. Brands using Kodex have seen:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6 flex items-center gap-4">
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                <path d="M32 14.9928L28.4509 11.0081L28.9455 5.7334L23.6945 4.55805L20.9455 0L16 2.09269L11.0545 0L8.30546 4.55805L3.05455 5.71906L3.54909 10.9938L0 14.9928L3.54909 18.9775L3.05455 24.2666L8.30546 25.4419L11.0545 30L16 27.893L20.9455 29.9857L23.6945 25.4276L28.9455 24.2523L28.4509 18.9775L32 14.9928ZM13.0909 22.1596L7.27273 16.4262L9.32364 14.4052L13.0909 18.1032L22.6764 8.65743L24.7273 10.6928L13.0909 22.1596Z" fill="#00B894"/>
              </svg>
              <span className="text-lg font-medium">+22% increase in ad engagement</span>
            </div>
            <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6 flex items-center gap-4">
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                <path d="M32 14.9928L28.4509 11.0081L28.9455 5.7334L23.6945 4.55805L20.9455 0L16 2.09269L11.0545 0L8.30546 4.55805L3.05455 5.71906L3.54909 10.9938L0 14.9928L3.54909 18.9775L3.05455 24.2666L8.30546 25.4419L11.0545 30L16 27.893L20.9455 29.9857L23.6945 25.4276L28.9455 24.2523L28.4509 18.9775L32 14.9928ZM13.0909 22.1596L7.27273 16.4262L9.32364 14.4052L13.0909 18.1032L22.6764 8.65743L24.7273 10.6928L13.0909 22.1596Z" fill="#00B894"/>
              </svg>
              <span className="text-lg font-medium">+20% rise in average cart value</span>
            </div>
            <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6 flex items-center gap-4">
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                <path d="M32 14.9928L28.4509 11.0081L28.9455 5.7334L23.6945 4.55805L20.9455 0L16 2.09269L11.0545 0L8.30546 4.55805L3.05455 5.71906L3.54909 10.9938L0 14.9928L3.54909 18.9775L3.05455 24.2666L8.30546 25.4419L11.0545 30L16 27.893L20.9455 29.9857L23.6945 25.4276L28.9455 24.2523L28.4509 18.9775L32 14.9928ZM13.0909 22.1596L7.27273 16.4262L9.32364 14.4052L13.0909 18.1032L22.6764 8.65743L24.7273 10.6928L13.0909 22.1596Z" fill="#00B894"/>
              </svg>
              <span className="text-lg font-medium">130% ROI on digital ad spend</span>
            </div>
            <div className="bg-kodex-gray rounded-xl border border-kodex-light-gray p-6 flex items-center gap-4">
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
                <path d="M32 14.9928L28.4509 11.0081L28.9455 5.7334L23.6945 4.55805L20.9455 0L16 2.09269L11.0545 0L8.30546 4.55805L3.05455 5.71906L3.54909 10.9938L0 14.9928L3.54909 18.9775L3.05455 24.2666L8.30546 25.4419L11.0545 30L16 27.893L20.9455 29.9857L23.6945 25.4276L28.9455 24.2523L28.4509 18.9775L32 14.9928ZM13.0909 22.1596L7.27273 16.4262L9.32364 14.4052L13.0909 18.1032L22.6764 8.65743L24.7273 10.6928L13.0909 22.1596Z" fill="#00B894"/>
              </svg>
              <span className="text-lg font-medium">44% increase in brand sentiment</span>
            </div>
          </div>

          <p className="text-center text-lg leading-relaxed">
            <span className="font-bold">Kodex</span> is built by Agspert, a tech startup working at the intersection of AI, analytics, and supply chain — helping D2C brands scale sustainably without losing their human touch.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pricing</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Tier */}
          <div className="bg-kodex-dark-secondary rounded-xl border border-kodex-light-gray shadow-lg shadow-white/40 p-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-kodex-green">Starter</span>
            </h3>
            <p className="text-2xl font-bold text-kodex-green mb-8">($0)</p>
            <ul className="space-y-3 text-base">
              <li>1 story, 3 product pages</li>
              <li>5 trials of <span className="text-kodex-yellow font-bold">Kodex Wizard ✨</span></li>
              <li>Viewable Engagement Analytics</li>
              <li className="text-sm">*Watermark of Kodex</li>
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="bg-kodex-dark-secondary rounded-xl border border-kodex-light-gray shadow-lg shadow-white/40 overflow-hidden">
            <div className="bg-blue-400 text-black text-center py-2 text-sm font-medium">
              Early Access = $0!
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-kodex-green">Pro Tier</span>
              </h3>
              <p className="text-2xl font-bold text-kodex-green mb-8">($9/mo)</p>
              <ul className="space-y-3 text-base">
                <li>10 stories, 50 product pages</li>
                <li>50 trials of <span className="text-kodex-yellow font-bold">Kodex Wizard</span></li>
                <li>Self Branding on splash screen, 3D Markers and QR codes</li>
                <li>Exportable analytics (CSV)</li>
              </ul>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-kodex-dark-secondary rounded-xl border border-kodex-light-gray shadow-lg shadow-white/40 p-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-kodex-green">Enterprise Tier</span>
            </h3>
            <p className="text-2xl font-bold text-kodex-green mb-8">(Custom Pricing)</p>
            <ul className="space-y-3 text-base">
              <li>Dedicated story curation</li>
              <li>API access to <span className="text-kodex-yellow font-bold">Kodex Wizard</span></li>
              <li>Custom SLA & feature development</li>
              <li>Dedicated account manager</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-kodex-dark-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Results That Have Worked 🎯</h2>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* For Shopify */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative h-80 md:h-96">
              <img src="/Image Group 1.png" alt="Embed 3D stories on Shopify Storefronts" className="absolute inset-0" />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center">For Shopify Storefronts</h3>
              <p className="leading-relaxed">
                Embed interactive, AI-driven 3D product stories on your website with one click. Customers can rotate your 3D content, click info icons to uncover your brand values.
              </p>
              <button className="w-full bg-black text-white px-8 py-3 rounded-full font-bold border border-white shadow-lg shadow-white/40 hover:shadow-white/60 transition-all">
                Embed 3D stories on website
              </button>
            </div>
          </div>

          {/* For Product Labels */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-xl font-bold text-center">For Product Labels & POS</h3>
              <p className="leading-relaxed">
                Download QR codes for product labels and point-of-sale displays. Engage customers with immersive 3D stories. Track every scan for actionable analytics, boost brand transparency, and increase conversion rates.
              </p>
              <button className="w-full bg-black text-white px-8 py-3 rounded-full font-bold border border-white shadow-lg shadow-white/40 hover:shadow-white/60 transition-all">
                Download QRs for product labels
              </button>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <img src="/Image Group 2.png" alt="Download QR codes for labels and displays, engage customers with 3D stories" className="absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Book a demo, run a pilot, or ask about integrations. We work with D2C brands to measurably improve CAC, LTV and pre-checkout conversions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="20" height="20" fill="url(#pattern0_484_224)"/>
                    <defs>
                      <pattern id="pattern0_484_224" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_484_224" transform="scale(0.01)"/>
                      </pattern>
                      <image id="image0_484_224" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQ0lEQVR4nO2dPWjUYByHq/UDWpCCTkIV7eCmFcSCFUQHcdEq0tXR1UkEFSkiKOLiKIhDR78QOigUdHYoFXVQN9EWVz9OHTwfeSGBeDZ4Sd7k/cjvgSyFS/J/H3rP5cjdDQwIIYQQQgghhBBCCCGEEEKIFQGGgX3AcWBaG9PJWpg1GW5SxG7gIfATkccP4AEwXqeIVcBF4FfuaYhezFqdr0vI1X8OJ/rlim0ZR/o+tMjjsM2nqte5hxH98tKWEPOqQdhhwoaQc5ZORsBZG0I2A/dcTxIBc8DWykIyYo4C711PFSDLwClrInqkDAHXdC3SF13gFrChFhk9YsaB5/2dVyt5YSXgBaWsBk4DX1xP7xGd5EXQYKMyesQo+nVEuyotjv5ybdGuSsui320s2j2LfBIYKfiYPcAC8bJgZiy4JiNmLQsLWGFHd4FPRf8tI41+p0y0k6fzD2YtCwvIEZLyFNhRIvrZfbQm2sA24HFmH9aFGL4DM8C6lkR/qcSzwxrgDPC1Z1+1CEl5CxyMOPrdMtFO3h1/lbPPWoUYfgOzwMbIrvQXgb0lon0zEYkrISlVov+ZeKL9PxoTkvIs4OjPAVsqRts7ISFGf8litL0UEkr0uzVE22shPkd/saZoey/Et+h3KkT7o4XjeyOkavRnHUV7e8FoByckG/31DUV/ydwI3VC0gxTSVPS7DqIdtJA6o7/oKNrBC7Ed/Y7jaEcjJOUJMFbw/EaBR8k2WvCxY8kxmyI4IaWjXzLa32iWIIVko3/IioG/55msMdpRC8lGf5OFOZqIdvRCSkffUbRbI6TUlX4NV9pViU5IX9EH1jqKdiuFpJiP2U3mRNvXj+BFLSSN/rz56HGyzSd/85XohYSGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhHiGhMQo5I7rKSLitg0hl11PEREzNoQccD1FROy3IWQQeOd6kgh4Y+2b5oATrqeJgGNWZGSk3HA9UcBctyoj8x3wlxzfrBwaZq0umLWzLiQjZlfygy7mlk6xMmZt7gM7axOR85NHE8CUBz81NO3JNpWsyVBjIoQQQgghhBBCCCGEEEIIIQbC4g+8OOdVavgCtgAAAABJRU5ErkJggg=="/>
                    </defs>
                  </svg>
                </div>
                <span>connect@mykodex.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="20" height="20" fill="url(#pattern0_484_225)"/>
                  <defs>
                    <pattern id="pattern0_484_225" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_484_225" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_484_225" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6UlEQVR4nO2dW6hWRRTHd8fKrl7KrtANwiR7MLIs8JQkRRAR+GBQEkjQUwaVitLFisAk0woyuoEeIaNO0Q17COnpBAU9SBYkJyyy1LyCdlHy+8WSkQ6ni/PtWXvPmjnzez/Mf83vfN/+9uw1s6uqUCgUCoVCoVAoFDIAOB7oBZYAHwCbgX2kyz7gW1fLY8B0YFRlHeAiYDmwjfz5GXhGaq6sAZwNvAocYuRxCHgFOKuyADAH2BN7VgywG7gzpogTgNdiz4JBXpa5aVvGKcDHsSs3zHqZozY/GTJg4f/5BDixDSFy8S748VLTMu7yDFL4mzuaknEmsHPIQAU/dgETmhAivx4K9XhRW8YFwMGaYQocmbsLNYUsi11RBizVktED/Bi7mgzYqrIgCVwXu5KMmKYh5OHYVWTEYg0h7zYY8DMnXJ6dXAqcC0wEHgF+Jz/6NYR83UCwL4EZxxj3hgyX87/SECLLypqsAU7yHPsJ8mKXhhDN+4835VdbF2OPBr4hHw5qCNHiB+C0GuNfCxwmEywJuScgwyoywZKQ8QEZxuRyc2pFSEchxywywIqQwwo5jpOfjSSOFSF/BgepjmSZR+JYESKMVcjSS+JYEjJZIcslJI4lIbcoZLmGxLEkZJFClrkkjiUh7ylk+ZTEsSRku8IFvUPiWBIiTKyZYSywhQywJmR+zQxryQRrQgZqjD+bjLAmRK4Bl3XZLbmbjLAmRFjWxdgLyQyLQuQ//lTPsdeQGRaFCPeP1I7JyqgQedh0ssfYU8kMq0KEhZ7jbyAjLAvZ67NvApiWwx16CkKE1Z4Z1pIJ1oXIf/5MjwwT3MkJyWNdiDAInO6R4+YcvrpSECL0eWZZQOKkIkSY45nneRImJSEHgCs9d3QlKyUlIUf7f8/xzDW/5jWl4+5t7gauBi5251/d10bfV2pChAGfu/ghF/qf8EcecvUeoxlvVpNtqykKET7yPVHHLdH3eXxa+nx7w1wv8aomuu5TFSKs62bXqmsR2vAfq8uza9Y+XXt/Sp0cw0PF5PVutxK7Bcml7m8fAs4IrH+028mlsr0uJMvRQLFZ1/qBYP8+DzM0NqJqBLHAh74X+iYBHg0tRCOEFQZ8fxI3hfQDhBahEcLa8RRTVWa33lycF1qARghrHPBdZtEGmBQaXiOEVfp8Vok1Aa4PDa0RwjKDwI0qs+03F3LMeBAaIazTkSePjRyj98+5+CI0rEaIVNgPPN3U1xhwk0ZIjSCpsRV4QFOM3AMBGzXCaYRJlb3uTQ2XB9bfo9lkoSEkh8MvP3d9wpO6rF1Wfd9RzPGHhhA5dzYnfnEvZpGD024Frhh+7IcsSAL3NvBcZKeGkE3KoUYyGzWE9MeuIiPe0hCyKHYVGbFAQ0jym/UNcZWGkB7XDVII43tpoggW4qQ8FRimAE+qyHBC5Dzd32JXlDDy6Pd8NSFOyguxq0qYlaoynJDxwI7YlSXIdmCcupCczj1s+dHA7Y3IGCLluTYrSpzljcpwQkYBb8euNAHeb+0FxnJ2u/IqaG70S8djKzKGfVJW5LDNTJGOe4N0vFd7y0Urlw2Zgcgc3FZZwB0w9uwIvXn81T2ZHFNZQ1o9gceB78ifQWCJvEu+so7biTQFeNB1r8sbdba5zpDU2O++jqSGN1wDxRS1hcJCoVAoFAqFQqFQqOLyF77zK4cES5o4AAAAAElFTkSuQmCC"/>
                  </defs>
                </svg>
                </div>
                <span>+91 88120 40321</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="20" height="20" fill="url(#pattern0_484_226)"/>
                  <defs>
                    <pattern id="pattern0_484_226" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_484_226" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_484_226" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEw0lEQVR4nO3daYhXVRjH8ac9k8qkTY1opaSMSMlswUjLpZWQXhmRpRCFqQhtRDGYCflGbBOJJCKKtJSSIiJLECEYQovqRRo16Vg5SW6F/2m+cfAQgy+muTP3uec5ywf+MIw4/J575s49957lihRFURRFURRFURRFLICjgQuAacA84BlgKbDCf9zXbf7fbgcuAY4PnTsZwDHAdcDTwAbgINW1gM3AEt+QQ0LXFR1gjP9t30n9/gReBya5My50raYB1wMf0JxtwKPAiaFrN8X/trYTzi/AnOzPGGAk8AbQgw3twATJETAT2Is9//gOwLGSA+Bkf1ZYtwk4V1IGjAK2EI/fgWskRcBlwE/E5wBwq6QEuALoIl4t4B5JAXAx0En8DgFTJGbACKCDdOwFxkmMgOOAjaSnAzhdYgMsJ10fAkdJLIDppG+BxAA4BfiZ9B0AzhPrgBfJx2qJoIvr+uw5mSRWAW81dBD2A2uA2cAtwOX+M8V/7z3/J6UJn4vhRyPuSammLncx7c8wLHASsBD4A33XijXAS8pFvwsMG0Cu0/wZo2mtGHykrjm20TaYfr/7v8Ai5ccqZ4gV/u+2lmWR3Kw+LFYA65WK/KzOkTv3s9xFWCnrJrEAGAr8pVBgt+s5KU0x6lbKW/kaVzs/Q1DDKsXMWkPIt2llrlLcc0rF3aiY+SalzEu1Mlcp7mOFwnZrzvrwU1TdeHndPtXKXKW4XxUKW99A7o8Ucndo5+7P/YeGlQ1kf00ht5vwN1Q7e19FXYSOxQ1kX6yUfbR29v+bHK3h5Qayv6KU/Wrt7CG6vO83kH2dUvbJ2tn7KupOpaJ+aCD7dqXsd2ln76uou9EzRjH3lYq5p2vlDnmGOIsivKA7E7Vy96ewiYqF7QPOUsh8pvJQwdi6M1d9UKdphULmlcqZz687c9UVUNruqzHv/cpZW0EX+viRuIEsVa7ib2BqDVmn+Z+laVs9R3ZwhX6NvpZbLTuIjAuUxkCO9Em9R3dgxWpPIOhtQ5U7YWA88AXNWaJ7tPtX9FM0q8cPw87zW2f8t8bcfQ1cCsz3DdH06t5wN4W9DsJkwtvtP6GNsNAgpzYwQS4G34sVwJehj4YBL4gVwLOhj4YBanMAKnM9H/LW5ZbwiRX+BvFH8rVcrAGeJ19XidHlCDnaIlb5DVty84BY5bafIC+7TO9G52cEao1VW/SkWAfMJZ+u7jCxDjghk3XqCyUWfkPJlO1wi0olFn6l0jek616JDXCDod1G67Qxqo1negPeJi0ttzuexAo4W2lhTChtEjs3rEka2k090Y1kDxQtB4Ou+1BaafUt8XpQUuN362lqh546vSmJ7/ceU1f4q+RfABPR+Htn8nu/9xruXYX9i/h4yYV7UZffatXqzd8dkhujjdIDzJJcuQum244CO43xkOTOj5+8Y6AxHgl9LKwN/b4aqDG661yllRTgiYYnbu8zsceVZcBUYE8DjbEz6IrZmHB40c1WxcZwr2I9J3SdUeHwaqhlCo9a3EuMywuLB7nBTWcNDeFWWM0IXU8SgOH+hcIDPVvcDejI0HUkB5hQ8UbSzTW+OXTu5AEXAo+5fbXc2j7gN//5zu+D9bjrGITOWRRFURRFURRFURRS1b8v8A/nNfoWEAAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
                </div>
                <span>18, Whitefield, Bengaluru, India</span>
              </div>
            </div>

            <div className="space-y-2">
              <p><span className="font-bold">Response time:</span> Typically within 24 hours on business days.</p>
              <p>We follow GDPR/India data best-practices - first-party analytics and never sell PII</p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm/>
        </div>
      </section>
    </Layout>
  );
}
