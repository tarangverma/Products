import React from 'react';
import { X } from 'lucide-react';

const AddCategoryModal = ({ show, onClose, newCategory, setNewCategory, onAddCategory }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Add category</h3>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm mb-1">
            Category name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={onAddCategory}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={!newCategory}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;