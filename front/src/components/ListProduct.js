import React  from "react";
//import {  getFilterOrderAsc, getFilterOrderDesc } from "../helpers/getData";
//import { getproducts } from "../helpers/getData";
import { useFetchDataProduct } from "../hooks/useFetchDataProduct";
import { CardProduct } from "./CardProduct";

export const ListProduct = () => {
  //const [products, setProduct] = useState([]);
  const { data:products, loading } = useFetchDataProduct();
  /*
  getFilterOrderAsc().then(r=>{
    console.log(r)
  })
  getFilterOrderDesc().then(r=>{
    console.log(r)
  })*/

  //useEffect(() => {
    //getproducts().then(setProduct)
    //getproducts().then(resp => setProduct(resp))
  //}, []);
  //enviar lista de dependencias, se ejecuta 1 vez
  //si una variable cambia se renderiza y se ejecuta effect nuevamente

  return (
    <div className="container-product--list">
      <ul>
        { loading &&  'Cargando Lista de Productos...' }
         { 
          products.map(product =>(
            <CardProduct
            key={product._id}
            {...product}/>
            ))
        }
        </ul>
    </div>
  );
};
