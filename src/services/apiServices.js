import axios from "axios"
import { toast } from "sonner"

const token = localStorage.getItem("token")
const api = axios.create({
    baseURL: import.meta.env.VITE_API || "http://localhost:5000/",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})


export const productServices = {
    getAll: async () => {
        try {
            const { data } = await api.get("/products")
            return data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    getProduct: async (id) => {
        try {
            const { data } = await api.get(`/product/${id}`)
            return data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },
    addToCart: async (product_id, product_price, product_quantity) => {
        try {
            const { data } = await api.post("/add/cart", { product_id, product_price, product_quantity })
           return toast.success(data.message)
        } catch (error) {
          return  toast.error(error.response.data.message)
        }

    },
    getCart: async () => {
        try {
            const { data } = await api.get(`/cart`)
            return data.message
        } catch (error) {
            console.log(error)
           return error.response.data.message
        }
    },
    deleteCart: async (cart_id) => {
        try {
            const { data } = await api.delete(`/cart/${cart_id}`)
            toast.success(data.message || "item successfully delete")
            return data.message
        } catch (error) {
           return toast.error(error.response.data.message)
        }
    }, 
    updateCartQuantity: async (cart_id, quantity)=>{
        const res =await api.patch(`/cart/${cart_id}/quantity`,{
            product_quantity:quantity
        })
    }
}


export const orderServices={
    getOrder: async ()=>{
        const res = await api.get(`/order/${user_id}`)
        return res.data.message
    }
}


export const userServices = {
    getUser: async () => {
        const res = await api.get("/user")
        return res.data.message
    },
    updateUser: async(data, user_id)=>{
        const res = await api.patch(`/user/${user_id}`, {...data})
        res.data
    },
    logout: () => {
        localStorage.removeItem("token")
    }
}
