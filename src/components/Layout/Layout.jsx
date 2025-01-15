import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import UserProfile from '../user/UserProfile';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');

  const sidebarItems = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Stores', path: '/stores' },
    { name: 'Products', path: '/products' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Reports', path: '/reports' },
    { name: 'Docs', path: '/docs' },
    { name: 'Settings', path: '/settings' }
  ], []);

  // Set initial selected item based on current route
  useEffect(() => {
    const currentItem = sidebarItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setSelectedItem(currentItem.name);
    }
  }, [location.pathname, sidebarItems]);

  const handleItemClick = (item, event) => {
    event.stopPropagation();
    
    if (event.target.type === 'checkbox') {
      // Only navigate and update selection if checking the box
      if (!event.target.checked) {
        return; // Don't do anything when unchecking
      }
      setSelectedItem(item.name);
      navigate(item.path);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-white w-64 transform transition-transform 
          duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          shadow-lg border-r border-gray-200`}
      >
        {/* Logo */}
        <div className="p-4 border-b">
          <img src="/api/placeholder/40/40" alt="Logo" className="h-8" />
        </div>
        
        {/* Sidebar Items */}
        <div className="p-4">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center px-3 py-2 mb-1 cursor-pointer
                ${selectedItem === item.name ? 'bg-blue-50' : 'hover:bg-gray-50'}
                ${location.pathname === item.path ? 'border-l-4 border-blue-500' : ''}`}
            >
              <input
                type="checkbox"
                checked={selectedItem === item.name}
                onChange={(e) => handleItemClick(item, e)}
                className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className={`${
                selectedItem === item.name ? 'text-blue-600' : 'text-gray-600'
              } px-2`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* User Profile */}
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