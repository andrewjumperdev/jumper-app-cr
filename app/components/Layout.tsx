import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import AdBanner from './AdBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdBanner />   
      <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
    </div>
  );
};

export default Layout;