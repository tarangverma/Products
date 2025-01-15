import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductsGrid from './components/Products/ProductsGrid';
import ProductForm from './components/Products/ProductForm';

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

  // Route Components
  const Home = () => <div>Home Page</div>;
  const Stores = () => <div>Stores Page</div>;
  const Catalogue = () => <div>Catalogue Page</div>;
  const Promotions = () => <div>Promotions Page</div>;
  const Reports = () => <div>Reports Page</div>;
  const Docs = () => <div>Documentation Page</div>;
  const Settings = () => <div>Settings Page</div>;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route 
            path="/products" 
            element={
              showProductForm ? (
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
              )
            } 
          />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;