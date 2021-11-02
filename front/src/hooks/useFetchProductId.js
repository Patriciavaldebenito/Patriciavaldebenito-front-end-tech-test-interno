import { useEffect, useState } from "react"
import { getproductsId } from "../helpers/getData";


export const useFetchDataProductId = (id) => {
    console.log(typeof id)
 const [state, setstate] = useState({
     data:[],
     loading:true
 })

    useEffect(() => {
      getproductsId(id)
        .then(data=>{
            setTimeout(()=>{
                setstate({
                    data:data,
                    loading:false
                })
            },1000)
        })
    }, []);


 return state;//información
}


export const UseFetchDataProductId = (id) => {


    const [state, setstate] = useState({
        data:[],
        loading:true
    })
   
       useEffect(() => {
         getproductsId(id)
           .then(data=>{
               setTimeout(()=>{
                   setstate({
                       data:data,
                       loading:false
                   })
               },1000)
           })
       }, []);
   
   
    return state;//información
   }
