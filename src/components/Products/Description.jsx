import React from 'react';
import { Upload } from 'lucide-react';

const Description = ({ formData, setFormData, errors, categories }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">
          Product name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <label className="block text-sm mb-1">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full p-2 border rounded border-gray-300"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">
          Brand <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className={`w-full p-2 border rounded ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.brand}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        />
        {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
      </div>

      <button className="flex items-center gap-2 text-blue-500 border border-blue-500 rounded px-3 py-2">
        <Upload size={16} />
        Upload Image
      </button>
    </div>
  );
};

export default Description;