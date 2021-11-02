export const getproducts = async () => {
    const resp = await fetch("http://localhost:5000/api/products");//${encodeURI(params)}
    const data = await resp.json();
    return data;
};

export const getproductsId = async (id) => {
  const resp = await fetch(`http://localhost:5000/api/products/${id}`);
  const data = await resp.json();
  return data;
};







/*
export const getFilterOrderDesc = async (id) => {
  const resp = await fetch("http://localhost:5000/api/products");
  const data = await resp.json();
  data.sort((a,b)=>{
    if(a.price > b.price){
      return -1;
    }
    if(a.price < b.price){
      return 1;
    }
  })
  return data;
};

export const getFilterOrderAsc = async (id) => {
  const resp = await fetch("http://localhost:5000/api/products");
  const data = await resp.json();
  data.sort((a,b)=> {
    if(a.price > b.price){
      return 1;
    }
    if(a.price < b.price){
      return -1;
    }
  })
  return data;
};
*/