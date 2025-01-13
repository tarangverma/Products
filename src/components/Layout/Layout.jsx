import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import UserProfile from '../user/UserProfile';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Stores', path: '/stores' },
    { name: 'Products', path: '/products', active: true },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Reports', path: '/reports' },
    { name: 'Docs', path: '/docs' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white w-64 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg`}>
        <div className="p-4 border-b">
          <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
        </div>
        
        <nav className="p-4">
          {navigationItems.map((item) => (
            <button
              key={item.path}
              className={`w-full text-left p-2 rounded mb-1 ${item.active ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'}`}
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        <UserProfile />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-200 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed top-4 left-4 z-50 lg:hidden"
          >
            <Menu size={24} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;