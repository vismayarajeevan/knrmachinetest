import commonAPI from "./commonAPI"
import SERVERURL from "./SERVERURL"

export const addProduct = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/addProduct`,reqBody)
}

export const getProduct = async()=>{
    return await commonAPI("GET",`${SERVERURL}/getProduct`,{})
}

export const deleteProduct = async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/deleteProduct/${id}`,{})
}

export const updateProduct = async(id,reqBody)=>{
    return await commonAPI("PUT",`${SERVERURL}/updateproduct/${id}`,reqBody)
}