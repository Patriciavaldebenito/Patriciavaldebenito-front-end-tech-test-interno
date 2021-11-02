import React from "react";
import { useParams } from "react-router";
import { useFetchDataProductId } from "../hooks/useFetchProductId";
import { ButtonAddToCard } from "./ButtonAddToCard";

export const PageProduct = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetchDataProductId(id);
  const { name, description, price, brand, image } = product;
  //console.log(product)
  return (
    <div className="container-product product-flex">
      { loading ? (
        'Cargando ...'
      ) : (
        <>
          <div className="container-product-left">
            <img src={`http://localhost:5000${image}`} alt={name} />
          </div>
          <div className="container-product-right">
            <div className="container-product-information">
              <p className="product-name">
                <b>{name}</b>
              </p>
              <p className="product-brand">{brand}</p>
              <p className="product-price">{`$ ${price}`}</p>
              <p className="product-description">
                <span>
                  <b>Description : </b>
                </span>
                <br/>
                {description}
              </p>
            </div>
            <br />
            <ButtonAddToCard data={ product } />
          </div>
          <hr className="product-line-page"/>
        </>
       
      )}
    </div>
  );
};
