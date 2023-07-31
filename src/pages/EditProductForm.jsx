import React, { useState } from 'react';

const EditProductForm = ({ product, onUpdate }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedProduct);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={editedProduct.title} onChange={handleChange} />
      </div>
      <div>
        <label>Brand:</label>
        <input type="text" name="brand" value={editedProduct.brand} onChange={handleChange} />
      </div>
      {/* Add other input fields for other product properties */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProductForm;
