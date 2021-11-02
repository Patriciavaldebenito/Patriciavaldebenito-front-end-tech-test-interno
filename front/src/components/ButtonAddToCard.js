import React from "react";/* { useReducer }*/ 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
//import { getproductsId } from "../helpers/getData";
//import { miniCardReducer } from "../reducers/miniCardReducer";
export const ButtonAddToCard = ({ id }) => {
 // const [products, dispatch] = useReducer(miniCardReducer,[])
 // console.log("products . ",products);
 const MySwal = withReactContent(Swal)


  const addToCart = (e) => {
    e.preventDefault();
     
    MySwal.fire('Producto agregado.')
    //console.log(e);
    //const { name } = e.target.dataset;
  };

  return (
    <>
      <button className="btn btn-primary" onClick={addToCart} data-name={id}>
        Add item to cart
      </button>
    </>
  );
};



/*

    getproductsId(name).then((data) => {
        console.log(data)
      setTimeout(()=>{
        const { countInStock, image, price, _id } = data;
        const newProduct = {
            countInStock: countInStock,
            image: image,
            name: data?.name,
            price: price,
            _id: _id,
            quantity: 1,
          };
          
        console.log("newProduct . ",newProduct);
        const action = {
          type: "add",
          payload: newProduct,
        };
    
        dispatch(action);
     },1000)
      
    });

*/
