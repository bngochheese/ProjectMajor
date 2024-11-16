import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/products.scss';
// thanh navbar: home, course, checkout, about us, contact
// giao dien: home, login, signup, checkout, wishlist, contact
// code css: chuyen thanh sass hoac scss
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://6735e57f5995834c8a948dad.mockapi.io/api/product/products');
                setProducts(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <div className="products-container">
            {products.map((product) => (
                <div className="product-info" key={product.id}>
                    <Link to={`/Productdetail/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                        <div className='product-info-detail'>
                            <h4 className="product-name">{product.name}</h4>
                            <h5 className="product-price">{product.price}</h5>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Products;