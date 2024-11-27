// src/pages/ProductsPage.js
import React from 'react';
import products from '../products';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;