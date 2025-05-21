import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { toast } from "sonner"
import {  orderServices, userServices } from '../services/apiServices'
import {  Table } from 'antd'
import { Link } from 'react-router-dom'

import { GoTrash } from 'react-icons/go'

const ProfilePage = () => {
    const [previewUrl, setpreviewUrl] = useState("")
    const [order, setOrder]= useState([])
    const [name, setName] = useState({
        user_id: "",
        fullname: "",
        email: "",
        mobile: ""

    })
    const fetchUser = async () => {
        try {
            const res = await userServices.getUser()
            const user = Array.isArray(res) ? res[0] : null
            setName(user)

        } catch (error) {
            console.error("error fetching user", error)
            toast.error("error fetching user")

        }
    }
    

    useEffect(() => {
        fetchUser()
    }, [name, fetchUser, userServices.getUser])


    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await userServices.updateUser(name, name.user_id)
            toast.success("profile updated successfully")
        } catch (error) {
            toast.error("failed to update profile")
            console.log(error)
        }
    }


    const fetchAllOrder = async () => {
        try {
            const res = await orderServices.getOrder()
            setOrder(res)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    const columns=[
        {
            title: "S/NO",
            dataIndex: "no",
            key: "no"
        },
        {
            title:"product Name",
            dataIndex:"product_name",
            key:"product_name",
        },
        {
            title:"Quantity",
            dataIndex:"quantity",
            key:"quantity",
        },
        {
            title:"Delivery Status",
            dataIndex:"delivery_status",
            key:"delivery_status",
        },
        {
            title:"Delivery Address",
            dataIndex:"delivery_address",
            key:"delivery_address",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action"
        }
        
    ]
    useEffect(() => {
        fetchAllOrder()
    }, [])


    return (
        <>
            <div className='flex justify-center items-center '>
                <form>
                    {
                        previewUrl ?
                            <div className="flex flex-col justify-center items-center w-[100px] h-[100px] gap-3 cursor-pointer overflow-hidden">

                                {/* <img src={URL.createObjectURL(previewUrl)} alt="" /> */}

                            </div>

                            :

                            <div className="flex flex-col pt-[100px] gap-2">
                                <label htmlFor="file" className="flex flex-col  justify-center items-center w-[150px] h-[150px] gap-3 cursor-pointer bg-slate-300  rounded-full">
                                    <BiUserPin />
                                    <span>upload Image</span>
                                </label>
                                {/* <input type="file" id="file" className="hidden" onChange={getImagePreview} /> */}
                            </div>
                    }
                    <div >

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Fullname</label>
                            <input type="text" value={name.fullname} onChange={(e) => setName({ ...name, fullname: e.target.value })} className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input type="email" value={name.email} onChange={(e) => setName({ ...name, email: e.target.value })} className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Mobile.no</label>
                            <input type="tel" value={name.mobile} onChange={(e) => setName({ ...name, mobile: e.target.value })} className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" />
                        </div>
                    </div>
                    <div className='mt-3 justify-center items-center'>
                        <button type='submit' onClick={handleUpdate} className='px-6 py-2 bg-amber-500 text-white rounded-md text-xl cursor-pointer'>update User</button>
                    </div>
                </form>
            </div>
           <div className='p-15'>
            <h2 className='text-lg font-bold mb-4'>Order history</h2>
           
           </div>
      { order.length > 0 ?  <Table dataSource={order.map((order, index)=>(
                {
                    no: index + 1,
                    key: index,
                    user_id: order.user_id,
                    product_name: order.product_name,
                    delivery_address: order.delivery_address,
                    delivery_status : order.delivery_status,
                    quantity: order.product_quantity,
                    action:(
                        <Link>View </Link>

                    )
                    
                }
           ))}
           columns={columns}
           
           /> :
           <div className='flex flex-col items-center justify-center  h-96 bg-white rounded-md shadow-md'>
                    <GoTrash className='text-8xl text-gray-300 mb-4' />
               <h1 className='text-5xl text-gray-300 font-semibold'>No Order found for user</h1>
           </div>
           }
                
                    
        </>
    )
}

export default ProfilePage