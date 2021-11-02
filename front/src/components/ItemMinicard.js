import React from "react";

export const ItemMinicard = ({ data }) => {

  console.log("ItemMinicard : ", data);
  const {image, name, price} = data;
  return (
    <>
      <div className="container-checkout--item">
        <div className="container-checkout--img">
          <img src={`http://localhost:5000${image}`} alt={ name } style={{width: "100%"}}/>
        </div>
        <div className="container-checkout--name">
          <p>{ name }</p>
        </div>
        <div className="container-checkout--price">
          <p>{ price }</p>
          <button class="btn btn-delete">Borrar</button>
        </div>
      </div>
    </>
  );
};
