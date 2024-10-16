import './productCard.css';

import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState('M'); 

    const sizes = ['S', 'M', 'L', 'XL']; 

    return (
        <article className="article">
            <header className="header">
                <h2>{product.name}</h2>
            </header>
            <figure className="figure">
                <img src={product.image} alt={product.description} />
            </figure>
            <section className="section">
                <p>Price: {product.price}</p>
                <label>Choose a size:</label>
                <div className="size-selector">
                    {sizes.map(size => (
                        <div
                            key={size}
                            className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </section>
            <footer className="footer">
                <button>Add to Cart</button>
            </footer>
        </article>
    );
};


const App = () => {
    const products = [
        {
            name: "Algeria Jersey",
            image: "maillot.jpg",
            description: "Official Algeria football jersey",
            price: "$59.99"
        },
        {
            name: "France Jersey",
            image: "france-maillot.jpg",
            description: "Official France football jersey",
            price: "$69.99"
        },
        {
            name: "Brazil Jersey",
            image: "brasil-maillot.webp",
            description: "Official Brazil football jersey",
            price: "$79.99"
        },
        {
            name: "Argentina Jersey",
            image: "argentine-maillot.avif",
            description: "Official Argentina football jersey",
            price: "$89.99"
        }
    ];

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};

export default App;
