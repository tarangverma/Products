import React from 'react';
import { X } from 'lucide-react';

const Variants = ({ formData, setFormData, errors }) => {
  const handleRemoveVariant = (type, value) => {
    setFormData({
      ...formData,
      variants: {
        ...formData.variants,
        [type]: formData.variants[type].filter(v => v !== value)
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm">
            Option <span className="text-red-500">*</span>
          </label>
          <label className="text-sm">
            Values <span className="text-red-500">*</span>
          </label>
        </div>
        
        {['size', 'color'].map(type => (
          <div key={type} className="flex gap-2">
            <input
              type="text"
              value={type.charAt(0).toUpperCase() + type.slice(1)}
              className="w-1/3 p-2 border rounded border-gray-300"
              readOnly
            />
            <div className="flex-1 p-2 border rounded border-gray-300 flex gap-1 flex-wrap">
              {formData.variants[type].map(value => (
                <span key={value} className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                  {value}
                  <X 
                    size={14} 
                    className="cursor-pointer" 
                    onClick={() => handleRemoveVariant(type, value)} 
                  />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="text-blue-500 flex items-center gap-1">
        + Add Option
      </button>
    </div>
  );
};

export default Variants;