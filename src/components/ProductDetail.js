import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/productDetail.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://6735e57f5995834c8a948dad.mockapi.io/api/product/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    }

    const handleSub = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;
    if (!product) return <h1>Product not found</h1>;

    return (
        <div className="productDetail-container">
            <div className="productDetail-group">
                <div className="productDetail-img">
                    <div className="product-img">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className="productDetail-info">
                    <div className="productDetail-name">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="productDetail-price">
                        <h3>{product.price}</h3>
                    </div>
                    <div className="productDetail-description">
                        <h5>Description</h5>
                        <h3>{product.description}</h3>
                    </div>
                    <div className="button-group">
                        <div className='btn'>
                            <div className="button-sub">
                                <button className="sub" onClick={handleSub}>-</button>
                            </div>
                            <input className="quantity" type="text" value={quantity} readOnly />
                            <div className="button-add">
                                <button className="add" onClick={handleAdd}>+</button>
                            </div>
                        </div>
                        <button className="addToCart" title="Add To Cart">Add</button>
                        <button className="buyNow" title="Buy Now">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
