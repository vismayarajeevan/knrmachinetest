import commonAPI from "./commonAPI"
import SERVERURL from "./SERVERURL"

export const addProduct = async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/addProduct`,reqBody)
}

export const getProduct = async()=>{
    return await commonAPI("GET",`${SERVERURL}/getProduct`,{})
}