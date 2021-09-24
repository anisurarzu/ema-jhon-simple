import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
	const { name, price, star, img, stock, seller } = props.product;
	const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-details">
				<h4 className="product-name">{name}</h4>
				<p>
					<small>by:{seller}</small>
				</p>
				<p>Price:${price}</p>
				<p>
					<small>only {stock} left in stock - order soon</small>
				</p>
				<button
					onClick={() => props.handleAddToCart(props.product)}
					className="btn-regular"
				>
					{cartIcon}
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
