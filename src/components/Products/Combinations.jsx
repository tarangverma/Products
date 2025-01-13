import React from 'react';

const Combinations = ({ formData, setFormData }) => {
  const handleCombinationChange = (index, field, value) => {
    const newCombinations = [...formData.combinations];
    newCombinations[index][field] = value;
    setFormData({ ...formData, combinations: newCombinations });
  };

  return (
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
                  onChange={(e) => handleCombinationChange(index, 'sku', e.target.value)}
                />
              </td>
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={combo.inStock}
                  onChange={(e) => handleCombinationChange(index, 'inStock', e.target.checked)}
                />
              </td>
              <td className="p-2">
                <input
                  type="number"
                  className="w-full p-1 border rounded border-gray-300"
                  value={combo.quantity}
                  onChange={(e) => handleCombinationChange(index, 'quantity', parseInt(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Combinations;