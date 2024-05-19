import React, { useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Open side Panel
  useEffect(() => {
    console.log(`selectedProduct CHANGED TO ${selectedProduct}`);
    if (selectedProduct) setSideOpen(() => true);
  }, [selectedProduct]);

  // Deselect product
  useEffect(() => {
    console.log(`sideOpen CHANGED TO ${sideOpen}`)
    if (!sideOpen) setSelectedProduct(() => null)
  }, [sideOpen]);

  // console.log('Product view return count');
  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              onClick={() => {
                console.log('SELECT PRODUCT', item);
                setSelectedProduct(() => item);
              }}
              isSelected={selectedProduct?.id === item.id ? true : false}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
            onClick={() => setSideOpen(() => !sideOpen)}>
            {sideOpen ? '>' : '<'}
          </div>
        </div>
        <ProductDetails visible={sideOpen} product={selectedProduct} />
      </div>
    </div>
  );
}

export default ProductView;
