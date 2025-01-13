import React, { useState } from 'react';
import AddCategoryModal from './AddCategoryModal';

const ProductsGrid = ({ products, categories, onAddCategory, onAddProduct }) => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  
  const handleAddCategory = () => {
    onAddCategory(newCategory);
    setShowCategoryModal(false);
    setNewCategory('');
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="space-x-2">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Add Category
          </button>
          <button
            onClick={onAddProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium">{category}</h2>
            </div>
            <div className="p-4 space-y-4">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <img
                      src="/api/placeholder/48/48"
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">₹{product.price.toLocaleString()}</div>
                      <div className="text-sm text-blue-500">{product.brand}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <AddCategoryModal
        show={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        onAddCategory={handleAddCategory}
      />
    </div>
  );
};

export default ProductsGrid;