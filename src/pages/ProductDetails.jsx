import React, { Fragment } from "react";
import { useNavigate  } from 'react-router-dom';
import { useState } from "react";
import EditProductForm from './EditProductForm';
import { testProducts } from '../dataSet/products';
import Header from "../components/Header";

const ProductDetails = () =>{
    
    const navigate = useNavigate();
    const [products, setProducts] = useState(testProducts);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductUpdate = (updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
        );
        setShowEditForm(false);
      };
    
      const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setShowEditForm(true);
      };

      return (
        <Fragment>
          <Header></Header>
        <div>
          <div>
            {products.map((product) => (
              <div key={product.id}>
                <p>{product.title}</p>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
              </div>
            ))}
            {showEditForm && selectedProduct && (
              <EditProductForm product={selectedProduct} onUpdate={handleProductUpdate} />
            )}
          </div>
        </div>
        </Fragment>
      );
}

export default ProductDetails