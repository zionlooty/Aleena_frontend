import axios from "axios"
import { toast } from "sonner"

const token = localStorage.getItem("token")
const api =  axios.create({
    baseURL: import.meta.env.VITE_API || "http://localhost:5000/",
    headers:{
        "Authorization": `Bearer ${token}`
    }
})


export const productServices = {
    getAll: async()=>{
        try {
            const {data} = await api.get("/products")
            return data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    getProduct:  async(id)=>{
        try {
            const {data} = await api.get(`/product/${id}`)
            return data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    addToCart: async(product_id, product_price, product_quantity)=>{
        try {
            const {data} =  await api.post("/add/cart",{product_id, product_price, product_quantity})
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }

    },
    getCart: async()=>{
        try {
            const {data} = await api.get(`/cart`)
            console.log (data)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}


export const userServices = {
    getUser: async()=>{
        const res = await api.get("/user")
        return res.data.message
    },
    logout: ()=>{
        localStorage.removeItem("token")
    }
}
