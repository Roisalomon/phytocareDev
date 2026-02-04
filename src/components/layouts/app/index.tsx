import React from 'react';
import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

export const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins bg-gray-50 container-mx-auto">
      {/* Header */}
      <HeaderComponent />

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default AppLayout;
