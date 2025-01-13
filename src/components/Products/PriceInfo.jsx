import React from 'react';

const PriceInfo = ({ formData, setFormData, errors }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">
          Price <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          className={`w-full p-2 border rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1">Discount</label>
        <div className="flex gap-2">
          <input
            type="number"
            className="flex-1 p-2 border rounded border-gray-300"
            value={formData.discount.value}
            onChange={(e) => setFormData({
              ...formData,
              discount: { ...formData.discount, value: parseInt(e.target.value) }
            })}
          />
          <div className="flex border rounded border-gray-300 overflow-hidden">
            {['%', '$'].map(type => (
              <button
                key={type}
                className={`px-3 py-2 ${type === '%' ? '' : 'border-l'} ${
                  formData.discount.type === type ? 'bg-blue-100' : 'bg-white'
                }`}
                onClick={() => setFormData({
                  ...formData,
                  discount: { ...formData.discount, type }
                })}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;