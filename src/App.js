// import React, { useState } from 'react';
// import { X, Menu, Plus, ChevronRight, Upload } from 'lucide-react';

// // Layout Component
// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 h-full bg-white w-64 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-lg`}>
//         <div className="p-4 border-b">
//           <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
//         </div>
        
//         <nav className="p-4">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'Stores', path: '/stores' },
//             { name: 'Products', path: '/products', active: true },
//             { name: 'Catalogue', path: '/catalogue' },
//             { name: 'Promotions', path: '/promotions' },
//             { name: 'Reports', path: '/reports' },
//             { name: 'Docs', path: '/docs' },
//             { name: 'Settings', path: '/settings' }
//           ].map((item) => (
//             <button
//               key={item.path}
//               className={`w-full text-left p-2 rounded mb-1 ${item.active ? 'bg-blue-50 text-blue-500' : 'hover:bg-gray-100'}`}
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>
        
//         <div className="absolute bottom-0 w-full p-4 border-t">
//           <div className="flex items-center gap-3">
//             <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />
//             <div className="flex-1">
//               <div className="font-medium">Andy Samberg</div>
//               <div className="text-sm text-gray-500">andy.samberg@gmail.com</div>
//             </div>
//             <ChevronRight size={16} />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className={`transition-all duration-200 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
//         <div className="p-6">
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="fixed top-4 left-4 z-50 lg:hidden"
//           >
//             <Menu size={24} />
//           </button>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Products Grid Component
// const ProductsGrid = ({ products, categories, onAddCategory, onAddProduct }) => {
//   const [showCategoryModal, setShowCategoryModal] = useState(false);
//   const [newCategory, setNewCategory] = useState('');
  
//   const handleAddCategory = () => {
//     onAddCategory(newCategory);
//     setShowCategoryModal(false);
//     setNewCategory('');
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">Products</h1>
//         <div className="space-x-2">
//           <button
//             onClick={() => setShowCategoryModal(true)}
//             className="px-4 py-2 border rounded hover:bg-gray-50"
//           >
//             Add Category
//           </button>
//           <button
//             onClick={onAddProduct}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Add Product
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((category) => (
//           <div key={category} className="bg-white rounded-lg shadow">
//             <div className="p-4 border-b">
//               <h2 className="text-lg font-medium">{category}</h2>
//             </div>
//             <div className="p-4 space-y-4">
//               {products
//                 .filter((product) => product.category === category)
//                 .map((product) => (
//                   <div key={product.id} className="flex items-center gap-4">
//                     <img
//                       src="/api/placeholder/48/48"
//                       alt={product.name}
//                       className="w-12 h-12 rounded object-cover"
//                     />
//                     <div>
//                       <div className="font-medium">{product.name}</div>
//                       <div className="text-sm text-gray-500">₹{product.price.toLocaleString()}</div>
//                       <div className="text-sm text-blue-500">{product.brand}</div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Category Modal */}
//       {showCategoryModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-medium">Add category</h3>
//               <button onClick={() => setShowCategoryModal(false)}>
//                 <X size={20} />
//               </button>
//             </div>
            
//             <div className="mb-4">
//               <label className="block text-sm mb-1">
//                 Category name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={newCategory}
//                 onChange={(e) => setNewCategory(e.target.value)}
//               />
//             </div>
            
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowCategoryModal(false)}
//                 className="px-4 py-2 border rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddCategory}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//                 disabled={!newCategory}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [showProductForm, setShowProductForm] = useState(false);
//   const [categories, setCategories] = useState(['Shoes', 'T-shirt']);
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Nike Air Jordan',
//       price: 12000,
//       brand: 'Nike',
//       category: 'Shoes',
//     },
//     {
//       id: 2,
//       name: 'Nike Dunk Low',
//       price: 85000,
//       brand: 'Nike',
//       category: 'Shoes',
//     }
//   ]);

//   const handleAddCategory = (category) => {
//     setCategories([...categories, category]);
//   };

//   const handleAddProduct = (product) => {
//     setProducts([...products, { ...product, id: products.length + 1 }]);
//     setShowProductForm(false);
//   };

//   return (
//     <Layout>
//       {showProductForm ? (
//         <ProductForm
//           onCancel={() => setShowProductForm(false)}
//           onSubmit={handleAddProduct}
//           categories={categories}
//         />
//       ) : (
//         <ProductsGrid
//           products={products}
//           categories={categories}
//           onAddCategory={handleAddCategory}
//           onAddProduct={() => setShowProductForm(true)}
//         />
//       )}
//     </Layout>
//   );
// };

// // Import the ProductForm component from the previous artifact
// // Reuse the ProductForm component we created earlier

// const ProductForm = ({ onCancel, onSubmit }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     category: 'Shoes',
//     brand: '',
//     image: null,
//     variants: {
//       size: ['M', 'L'],
//       color: ['Black', 'Red']
//     },
//     combinations: [
//       { sku: 'ABC12', inStock: true, quantity: 9, variant: 'M/Black' },
//       { sku: 'SDF3', inStock: true, quantity: 9, variant: 'M/Red' },
//       { sku: 'HWE2', inStock: false, quantity: 0, variant: 'L/Black' },
//       { sku: 'ABC12', inStock: true, quantity: 9, variant: 'L/Red' }
//     ],
//     price: 12000,
//     discount: {
//       value: 12,
//       type: '%'
//     }
//   });

//   const [errors, setErrors] = useState({});

//   const validateStep = (currentStep) => {
//     const newErrors = {};
    
//     if (currentStep === 1) {
//       if (!formData.name) newErrors.name = "Product name is required";
//       if (!formData.brand) newErrors.brand = "Brand is required";
//     } else if (currentStep === 2) {
//       if (!formData.variants.size.length) newErrors.size = "At least one size is required";
//       if (!formData.variants.color.length) newErrors.color = "At least one color is required";
//     } else if (currentStep === 4) {
//       if (!formData.price) newErrors.price = "Price is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep(step)) {
//       setStep(step + 1);
//     }
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     if (validateStep(4)) {
//       onSubmit(formData);
//     }
//   };

//   const renderDescription = () => (
//     <div className="space-y-4">
//       <div>
//         <label className="block text-sm mb-1">
//           Product name <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//       </div>
      
//       <div>
//         <label className="block text-sm mb-1">
//           Category <span className="text-red-500">*</span>
//         </label>
//         <select
//           className="w-full p-2 border rounded border-gray-300"
//           value={formData.category}
//           onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//         >
//           <option>Shoes</option>
//           <option>Clothing</option>
//           <option>Accessories</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm mb-1">
//           Brand <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
//           value={formData.brand}
//           onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
//         />
//         {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
//       </div>

//       <button className="flex items-center gap-2 text-blue-500 border border-blue-500 rounded px-3 py-2">
//         <Upload size={16} />
//         Upload Image
//       </button>
//     </div>
//   );

//   const renderVariants = () => (
//     <div className="space-y-4">
//       <div className="space-y-2">
//         <div className="flex justify-between items-center">
//           <label className="text-sm">
//             Option <span className="text-red-500">*</span>
//           </label>
//           <label className="text-sm">
//             Values <span className="text-red-500">*</span>
//           </label>
//         </div>
        
//         <div className="space-y-2">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value="Size"
//               className="w-1/3 p-2 border rounded border-gray-300"
//               readOnly
//             />
//             <div className="flex-1 p-2 border rounded border-gray-300 flex gap-1 flex-wrap">
//               {formData.variants.size.map(size => (
//                 <span key={size} className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
//                   {size}
//                   <X size={14} className="cursor-pointer" />
//                 </span>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value="Color"
//               className="w-1/3 p-2 border rounded border-gray-300"
//               readOnly
//             />
//             <div className="flex-1 p-2 border rounded border-gray-300 flex gap-1 flex-wrap">
//               {formData.variants.color.map(color => (
//                 <span key={color} className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
//                   {color}
//                   <X size={14} className="cursor-pointer" />
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="text-blue-500 flex items-center gap-1">
//         + Add Option
//       </button>
//     </div>
//   );

//   const renderCombinations = () => (
//     <div>
//       <table className="w-full">
//         <thead>
//           <tr className="text-left">
//             <th className="p-2">SKU</th>
//             <th className="p-2">In stock</th>
//             <th className="p-2">Quantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {formData.combinations.map((combo, index) => (
//             <tr key={index} className="border-t">
//               <td className="p-2">
//                 <input
//                   type="text"
//                   className="w-full p-1 border rounded border-gray-300"
//                   value={combo.sku}
//                   onChange={(e) => {
//                     const newCombinations = [...formData.combinations];
//                     newCombinations[index].sku = e.target.value;
//                     setFormData({ ...formData, combinations: newCombinations });
//                   }}
//                 />
//               </td>
//               <td className="p-2">
//                 <input
//                   type="checkbox"
//                   checked={combo.inStock}
//                   onChange={(e) => {
//                     const newCombinations = [...formData.combinations];
//                     newCombinations[index].inStock = e.target.checked;
//                     setFormData({ ...formData, combinations: newCombinations });
//                   }}
//                 />
//               </td>
//               <td className="p-2">
//                 <input
//                   type="number"
//                   className="w-full p-1 border rounded border-gray-300"
//                   value={combo.quantity}
//                   onChange={(e) => {
//                     const newCombinations = [...formData.combinations];
//                     newCombinations[index].quantity = parseInt(e.target.value);
//                     setFormData({ ...formData, combinations: newCombinations });
//                   }}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   const renderPriceInfo = () => (
//     <div className="space-y-4">
//       <div>
//         <label className="block text-sm mb-1">
//           Price <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="number"
//           className={`w-full p-2 border rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
//         />
//         {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
//       </div>

//       <div>
//         <label className="block text-sm mb-1">Discount</label>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             className="flex-1 p-2 border rounded border-gray-300"
//             value={formData.discount.value}
//             onChange={(e) => setFormData({
//               ...formData,
//               discount: { ...formData.discount, value: parseInt(e.target.value) }
//             })}
//           />
//           <div className="flex border rounded border-gray-300 overflow-hidden">
//             <button
//               className={`px-3 py-2 ${formData.discount.type === '%' ? 'bg-blue-100' : 'bg-white'}`}
//               onClick={() => setFormData({
//                 ...formData,
//                 discount: { ...formData.discount, type: '%' }
//               })}
//             >
//               %
//             </button>
//             <button
//               className={`px-3 py-2 border-l ${formData.discount.type === '$' ? 'bg-blue-100' : 'bg-white'}`}
//               onClick={() => setFormData({
//                 ...formData,
//                 discount: { ...formData.discount, type: '$' }
//               })}
//             >
//               $
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-semibold">Add Product</h1>
//         <div className="space-x-2">
//           <button
//             onClick={step === 1 ? onCancel : handleBack}
//             className="px-4 py-2 border rounded"
//           >
//             {step === 1 ? 'Cancel' : 'Back'}
//           </button>
//           <button
//             onClick={step === 4 ? handleSubmit : handleNext}
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             {step === 4 ? 'Confirm' : 'Next'}
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center mb-6 border-b">
//         {['Description', 'Variants', 'Combinations', 'Price info'].map((label, index) => (
//           <div
//             key={label}
//             className={`flex items-center ${index < step ? 'text-blue-500' : 'text-gray-500'}`}
//           >
//             <div className="px-4 py-2 border-b-2 border-transparent">
//               {label}
//             </div>
//             {index < 3 && <ChevronRight size={16} />}
//           </div>
//         ))}
//       </div>

//       <div className="bg-white rounded-lg p-6 border">
//         {step === 1 && renderDescription()}
//         {step === 2 && renderVariants()}
//         {step === 3 && renderCombinations()}
//         {step === 4 && renderPriceInfo()}
//       </div>
//     </div>
//   );
// };

// export default App;

// // import React, { useState } from 'react';
// // import Layout from './components/Layout/Layout';
// // import ProductsGrid from './components/ProductForm/ProductsGrid';
// // import ProductForm from './components/Products/ProductForm';

// // const App = () => {
// //   const [showProductForm, setShowProductForm] = useState(false);
// //   const [categories, setCategories] = useState(['Shoes', 'T-shirt']);
// //   const [products, setProducts] = useState([
// //     { id: 1, name: 'Nike Air Jordan', price: 12000, brand: 'Nike', category: 'Shoes' },
// //     { id: 2, name: 'Nike Dunk Low', price: 85000, brand: 'Nike', category: 'Shoes' },
// //   ]);

// //   const handleAddCategory = (category) => setCategories([...categories, category]);
// //   const handleAddProduct = (product) => setProducts([...products, { ...product, id: products.length + 1 }]);

// //   return (
// //     <Layout>
// //       {showProductForm ? (
// //         <ProductForm
// //           onCancel={() => setShowProductForm(false)}
// //           onSubmit={handleAddProduct}
// //           categories={categories}
// //         />
// //       ) : (
// //         <ProductsGrid
// //           products={products}
// //           categories={categories}
// //           onAddCategory={handleAddCategory}
// //           onAddProduct={() => setShowProductForm(true)}
// //         />
// //       )}
// //     </Layout>
// //   );
// // };

// // export default App;

import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import ProductsGrid from './components/Products/ProductsGrid';
import ProductForm from './components/Products/index';

const App = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  const [categories, setCategories] = useState(['Shoes', 'T-shirt']);
  const [products, setProducts] = useState([
    { id: 1, name: 'Nike Air Jordan', price: 12000, brand: 'Nike', category: 'Shoes' },
    { id: 2, name: 'Nike Dunk Low', price: 85000, brand: 'Nike', category: 'Shoes' },
  ]);

  const handleAddCategory = (category) => setCategories([...categories, category]);
  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
    setShowProductForm(false);
  };

  return (
    <Layout>
      {showProductForm ? (
        <ProductForm
          onCancel={() => setShowProductForm(false)}
          onSubmit={handleAddProduct}
          categories={categories}
        />
      ) : (
        <ProductsGrid
          products={products}
          categories={categories}
          onAddCategory={handleAddCategory}
          onAddProduct={() => setShowProductForm(true)}
        />
      )}
    </Layout>
  );
};

export default App;
