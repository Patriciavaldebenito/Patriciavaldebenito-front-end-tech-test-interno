import React, { useReducer } from "react";
import { miniCardReducer } from "../reducers/miniCardReducer";
import { ItemMinicard } from "./ItemMinicard";

export const MiniCartPage = () => {
  const initialState = [
    {
      countInStock: 10,
      image: "/images/airpods.jpg",
      name: "Airpods Wireless Bluetooth Headphones",
      price: 89.99,
      _id: "1",
      quantity: 1,
    },
  ];
  const [state] = useReducer(miniCardReducer, initialState);
  return (
    <div className="container-checkout">
       <h3> MiniCartPage: ( { state.length } )</h3>
      <ul>
        {
            state.map((product) => (
                <ItemMinicard
                    key= {product._id } 
                    data={ product } />
            ))
        }
      </ul>
    </div>
  );
};
