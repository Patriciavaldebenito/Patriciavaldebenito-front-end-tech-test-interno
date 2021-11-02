import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import { ButtonAddToCard } from "./ButtonAddToCard";

export const CardProduct = ({
  _id,
  brand,
  category,
  countInStock,
  image,
  name,
  numReviews,
  price,
  rating,
}) => {

  return (
    <li className="container-card flex-card">
      <div className="effect-card">
        <div className="card-header">
          <div className="container-card--img">
            <Link to={`/api/products/${_id}`}>
              <img
                src={`http://localhost:5000${image}`}
                className="card-img"
                alt={name}
              />
            </Link>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title card-name">{name}</h5>
          <p className="card-text card-brand">
            <small>{brand}</small>
          </p>
          <p className="card-text card-price">{ `$ ${price}`}</p>
          <p className="card-text card-category">
            <span>{category}</span>
            <span><b>{rating} ptos</b></span>
          </p>
          <ButtonAddToCard id={ _id } />
        </div>
      </div>
    </li>
  );
};
