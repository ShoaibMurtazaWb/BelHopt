import api from "./axios";

export default async function fetchCarts(){
    const {data} = await api.get('carts')
    console.log("fetchCarts Data: ", data.carts)
    return data.carts
}