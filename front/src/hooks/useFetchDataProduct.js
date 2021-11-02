import { useEffect, useState } from "react"
import { getproducts } from "../helpers/getData";

export const useFetchDataProduct = () => {

 const [state, setstate] = useState({
     data:[],
     loading:true
 })

    useEffect(() => {
        getproducts()
        .then(data=>{
            setTimeout(()=>{
                setstate({
                    data:data,
                    loading:false
                })
            },1000)
        })
    //getproducts().then(resp => setProduct(resp))
    }, []);


 return state;//información
}
