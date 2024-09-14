    import React, { useState } from 'react';
    import AddingComponent from './../AddingComponent/AddingComponent.jsx'; 
    import './Products.css';
    import { products as initialProducts } from './../../ProductData.js';

    function Products() {
    const [products, setProducts] = useState(initialProducts);

    // Function to add a new product when the button is clicked
    const addNewProduct = () => {
        const newProduct = {
        id: products.length + 1, // Unique id for new product
        name: `New Product ${products.length + 1}`,
        description: 'This is a newly added product.',
        price: (Math.random() * 100).toFixed(2), // Random price
        img: 'https://via.placeholder.com/150', // Placeholder image
        };
        setProducts([...products, newProduct]);
    };

    return (
        <div>
        {/* Button to add new products */}
        <button onClick={addNewProduct} className="add-button">
            Add New Product
        </button>
        
        {/* Products rendering */}
        <div className="products">
            {products.map((product) => (
            <div key={product.id} className="product">
                <img src={product.img} alt={product.name} className="productimage" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
                <AddingComponent />
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default Products;
