import React, { useState } from 'react';
import { X, Upload, ChevronRight } from 'lucide-react';

const ProductForm = ({ onCancel, onSubmit, categories }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    category: categories[0] || '',
    brand: '',
    image: null,
    variants: {
      size: ['M', 'L'],
      color: ['Black', 'Red']
    },
    combinations: [
      { sku: 'ABC12', inStock: true, quantity: 9, variant: 'M/Black' },
      { sku: 'SDF3', inStock: true, quantity: 9, variant: 'M/Red' },
      { sku: 'HWE2', inStock: false, quantity: 0, variant: 'L/Black' },
      { sku: 'ABC12', inStock: true, quantity: 9, variant: 'L/Red' }
    ],
    price: '',
    discount: {
      value: 0,
      type: '%'
    }
  });

  const [errors, setErrors] = useState({});

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "Product name is required";
      if (!formData.brand) newErrors.brand = "Brand is required";
    } else if (currentStep === 2) {
      if (!formData.variants.size.length) newErrors.size = "At least one size is required";
      if (!formData.variants.color.length) newErrors.color = "At least one color is required";
    } else if (currentStep === 4) {
      if (!formData.price) newErrors.price = "Price is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
      onSubmit(formData);
    }
  };

  const renderDescription = () => (
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

  const renderVariants = () => (
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
        
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value="Size"
              className="w-1/3 p-2 border rounded border-gray-300"
              readOnly
            />
            <div className="flex-1 p-2 border rounded border-gray-300 flex gap-1 flex-wrap">
              {formData.variants.size.map(size => (
                <span key={size} className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                  {size}
                  <X size={14} className="cursor-pointer" onClick={() => {
                    setFormData({
                      ...formData,
                      variants: {
                        ...formData.variants,
                        size: formData.variants.size.filter(s => s !== size)
                      }
                    });
                  }} />
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              value="Color"
              className="w-1/3 p-2 border rounded border-gray-300"
              readOnly
            />
            <div className="flex-1 p-2 border rounded border-gray-300 flex gap-1 flex-wrap">
              {formData.variants.color.map(color => (
                <span key={color} className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                  {color}
                  <X size={14} className="cursor-pointer" onClick={() => {
                    setFormData({
                      ...formData,
                      variants: {
                        ...formData.variants,
                        color: formData.variants.color.filter(c => c !== color)
                      }
                    });
                  }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="text-blue-500 flex items-center gap-1">
        + Add Option
      </button>
    </div>
  );

  const renderCombinations = () => (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="p-2">Variant</th>
            <th className="p-2">SKU</th>
            <th className="p-2">In stock</th>
            <th className="p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {formData.combinations.map((combo, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{combo.variant}</td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full p-1 border rounded border-gray-300"
                  value={combo.sku}
                  onChange={(e) => {
                    const newCombinations = [...formData.combinations];
                    newCombinations[index].sku = e.target.value;
                    setFormData({ ...formData, combinations: newCombinations });
                  }}
                />
              </td>
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={combo.inStock}
                  onChange={(e) => {
                    const newCombinations = [...formData.combinations];
                    newCombinations[index].inStock = e.target.checked;
                    setFormData({ ...formData, combinations: newCombinations });
                  }}
                />
              </td>
              <td className="p-2">
                <input
                  type="number"
                  className="w-full p-1 border rounded border-gray-300"
                  value={combo.quantity}
                  onChange={(e) => {
                    const newCombinations = [...formData.combinations];
                    newCombinations[index].quantity = parseInt(e.target.value);
                    setFormData({ ...formData, combinations: newCombinations });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPriceInfo = () => (
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
            <button
              className={`px-3 py-2 ${formData.discount.type === '%' ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => setFormData({
                ...formData,
                discount: { ...formData.discount, type: '%' }
              })}
            >
              %
            </button>
            <button
              className={`px-3 py-2 border-l ${formData.discount.type === '$' ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => setFormData({
                ...formData,
                discount: { ...formData.discount, type: '$' }
              })}
            >
              $
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Add Product</h1>
        <div className="space-x-2">
          <button
            onClick={step === 1 ? onCancel : handleBack}
            className="px-4 py-2 border rounded"
          >
            {step === 1 ? 'Cancel' : 'Back'}
          </button>
          <button
            onClick={step === 4 ? handleSubmit : handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {step === 4 ? 'Confirm' : 'Next'}
          </button>
        </div>
      </div>

      <div className="flex items-center mb-6 border-b">
        {['Description', 'Variants', 'Combinations', 'Price info'].map((label, index) => (
          <div
            key={label}
            className={`flex items-center ${index + 1 === step ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            <div className="px-4 py-2">
              {label}
            </div>
            {index < 3 && <ChevronRight size={16} />}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 border">
        {step === 1 && renderDescription()}
        {step === 2 && renderVariants()}
        {step === 3 && renderCombinations()}
        {step === 4 && renderPriceInfo()}
      </div>
    </div>
  );
};

export default ProductForm;