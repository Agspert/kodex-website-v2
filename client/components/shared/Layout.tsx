import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  showShopifyButton?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showShopifyButton = true, 
  className = "" 
}) => {
  return (
    <div className={`bg-kodex-dark text-white min-h-screen ${className}`}>
      <Header showShopifyButton={showShopifyButton} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
