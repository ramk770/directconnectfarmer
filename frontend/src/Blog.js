import React, { useState, useEffect } from 'react';

// Replace with your actual API endpoint for fetching market rates
const MARKET_RATES_API_URL = 'https://localhost:8000/api/v1/products';

export default function Blog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch market rates from the API
        fetch(MARKET_RATES_API_URL)
            .then(response => response.json())
            .then(data => setProducts(data)) // Adjusted to match provided JSON structure
            .catch(error => console.error('Error fetching market rates:', error));
    }, []);

    return (
        <div>
            <h1>Farmer Market Rates</h1>
            <div>
                {products.length === 0 ? (
                    <p>Loading market rates...</p>
                ) : (
                    products.map((product, index) => (
                        <div key={index} className="market-rate">
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Description: {product.description}</p>
                            <p>Category: {product.category}</p>
                            <p>Seller: {product.seller}</p>
                            <p>Stock: {product.stock}</p>
                            <p>Ratings: {product.ratings} ({product.numOfReviews} reviews)</p>
                            {product.images.map((img, imgIndex) => (
                                <img key={imgIndex} src={img.image} alt={product.name} className="product-image" />
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
