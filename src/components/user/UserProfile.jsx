import React from 'react';
import { ChevronRight } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="absolute bottom-0 w-full p-4 border-t">
      <div className="flex items-center gap-3">
        <img 
          src="/api/placeholder/40/40" 
          alt="User" 
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="font-medium">John Doe</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
        <ChevronRight size={16} className="text-gray-400" />
      </div>
    </div>
  );
};

export default UserProfile;