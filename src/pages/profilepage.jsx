import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { toast } from "sonner"
import { orderServices, userServices } from '../services/apiServices'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { GoTrash } from 'react-icons/go'
import useAuth from '../hooks/useAuth'



const ProfilePage = () => {
    const [previewUrl, setpreviewUrl] = useState("")
    const [order, setOrder] = useState([])
    const [isLoadingOrders, setIsLoadingOrders] = useState(false)
    const [orderError, setOrderError] = useState("")
    const [name, setName] = useState({
        user_id: "",
        fullname: "",
        email: "",
        mobile: "",
        address:""
    })

    const fetchUser = async () => {
        try {
            const res = await userServices.getUser()
            const user = Array.isArray(res) ? res[0] : null
            console.log(user)
           setName({
            user_id: res[0].user_id,
            fullname: res[0].fullname,
            email: res[0].email,
            mobile: res[0].mobile,
            address: res[0].address
           })

        } catch (error) {
            console.error("error fetching user", error)
            toast.error("error fetching user")

        }
    }
    

    useEffect(() => {
        fetchUser()
    }, [])

    // const {user_id, fullname, email, mobile, address} = name
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
        setIsLoadingOrders(true)
        setOrderError("")
        try {
            const res = await orderServices.getUserOrders()
            setOrder(res || [])
            console.log("Orders fetched:", res)
        } catch (error) {
            console.error("Error fetching orders:", error)
            const errorMessage = error.response?.data?.message || "Failed to fetch order history"
            setOrderError(errorMessage)
            toast.error(errorMessage)
            setOrder([])
        } finally {
            setIsLoadingOrders(false)
        }
    }


    const columns = [
        {
            title: "S/NO",
            dataIndex: "no",
            key: "no",
            width: 60
        },
        {
            title: "Product Name",
            dataIndex: "product_name",
            key: "product_name",
            width: 200
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            width: 80
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
            width: 120,
            render: (amount) => amount ? `₦${Intl.NumberFormat().format(amount)}` : 'N/A'
        },
        {
            title: "Payment Status",
            dataIndex: "payment_status",
            key: "payment_status",
            width: 120,
            render: (status) => (
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                    status === 'paid' ? 'bg-green-100 text-green-800' :
                    status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    status === 'failed' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                }`}>
                    {status || 'pending'}
                </span>
            )
        },
        {
            title: "Delivery Status",
            dataIndex: "delivery_status",
            key: "delivery_status",
            width: 120,
            render: (status) => (
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                    status === 'delivered' ? 'bg-green-100 text-green-800' :
                    status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                    status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                    status === 'pending' ? 'bg-gray-100 text-gray-800' :
                    'bg-red-100 text-red-800'
                }`}>
                    {status || 'pending'}
                </span>
            )
        },
        {
            title: "Order Date",
            dataIndex: "createdAt",
            key: "createdAt",
            width: 120,
            render: (date) => date ? new Date(date).toLocaleDateString() : 'N/A'
        },
        {
            title: "Invoice",
            dataIndex: "invoice_no",
            key: "invoice_no",
            width: 120,
            render: (invoice) => invoice || 'N/A'
        }
    ]
    useEffect(() => {
        fetchAllOrder()
    }, [])


    function getImagePreview(e) {
        const file = e.target.files[0]
        const fileType = file.name.split(".").pop()
        if (file.size > 40000000) {
            toast.error("file too large")
        } else if (fileType !== "jpeg" && fileType !== "png" && fileType !== "jpg") {
            toast.error("file not supported")
        } else {
            setpreviewUrl(file)
        }
    }


    return (
        <>
            <style jsx>{`
                .order-history-table .ant-table-thead > tr > th {
                    background-color: #f8fafc;
                    font-weight: 600;
                    color: #374151;
                }
                .order-history-table .ant-table-tbody > tr:hover > td {
                    background-color: #f9fafb;
                }
                .order-history-table .ant-pagination {
                    margin-top: 16px;
                }
            `}</style>
            <div className='flex justify-center items-center pt-[100px] '>
                <form>
                    {
                        previewUrl ?
                            <div className="flex flex-col justify-center items-center w-[100px] h-[100px] gap-3 cursor-pointer overflow-hidden">

                                <img src={URL.createObjectURL(previewUrl)} alt="" />

                            </div>

                            :

                            <div className="flex items-center justify-center pt-[100px] mb-5 gap-5">
                                <label htmlFor="file" className="flex flex-col  justify-center items-center w-[150px] h-[150px] gap-3 cursor-pointer bg-slate-300  rounded-full">
                                    <BiUserPin />
                                    <span>upload Image</span>
                                </label>
                                <input type="file" id="file" className="hidden" onChange={getImagePreview} />
                                <h1 className='text-xl font-semibold text-gray-600'>{name.fullname}</h1>
                            </div>
                    }
                    <div  >
                        <div className='flex gap-5 flex-wrap mb-4'>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Fullname</label>
                            <input type="text" value={name.fullname} onChange={(e) => setName({ ...name, fullname: e.target.value })} className="w-80 px-4 py-2 mt-2 border text-center rounded-md outline-none" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input type="email" value={name.email} onChange={(e) => setName({ ...name, email: e.target.value })} className="w-80 px-4 py-2 mt-2 border text-center rounded-md outline-none" />
                        </div>
                        </div>
                        <div className='flex flex-wrap mb-4 gap-5'>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Mobile.no</label>
                            <input type="tel" value={name.mobile} onChange={(e) => setName({ ...name, mobile: e.target.value })} className="w-80 px-4 py-2 text-center mt-2 border rounded-md outline-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Address</label>
                            <input type="text" value={name.address} onChange={(e) => setName({ ...name, address: e.target.value })} className="w-80 px-4 py-2 text-center mt-2 border rounded-md outline-none" />
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button type='submit' onClick={handleUpdate} className='px-6 py-2 hover:bg-amber-600 bg-amber-500 text-white rounded-md text-xl cursor-pointer'>update User</button>
                    </div>
                </form>
            </div>
            <div className='p-5 mt-8'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Order History</h2>
                    <button
                        onClick={fetchAllOrder}
                        disabled={isLoadingOrders}
                        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
                    >
                        {isLoadingOrders ? 'Refreshing...' : 'Refresh'}
                    </button>
                </div>

                {isLoadingOrders ? (
                    <div className='flex justify-center items-center h-64'>
                        <div className='text-center'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4'></div>
                            <p className='text-gray-600'>Loading your orders...</p>
                        </div>
                    </div>
                ) : orderError ? (
                    <div className='flex flex-col items-center justify-center h-64 bg-red-50 rounded-md border border-red-200'>
                        <div className='text-center'>
                            <div className='text-red-500 text-6xl mb-4'>⚠️</div>
                            <h3 className='text-xl font-semibold text-red-800 mb-2'>Failed to Load Orders</h3>
                            <p className='text-red-600 mb-4'>{orderError}</p>
                            <button
                                onClick={fetchAllOrder}
                                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                ) : order.length > 0 ? (
                    <div className='bg-white rounded-lg shadow-sm border'>
                        <Table
                            dataSource={order.map((orderItem, index) => ({
                                key: orderItem.order_id || index,
                                no: index + 1,
                                product_name: orderItem.product_name,
                                quantity: orderItem.quantity,
                                amount: orderItem.amount,
                                payment_status: orderItem.payment_status,
                                delivery_status: orderItem.delivery_status,
                                delivery_address: orderItem.delivery_address,
                                createdAt: orderItem.createdAt,
                                invoice_no: orderItem.invoice_no
                            }))}
                            columns={columns}
                            pagination={{
                                pageSize: 10,
                                showSizeChanger: true,
                                showQuickJumper: true,
                                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} orders`
                            }}
                            scroll={{ x: 1000 }}
                            className="order-history-table"
                        />
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center h-64 bg-gray-50 rounded-md border border-gray-200'>
                        <GoTrash className='text-6xl text-gray-400 mb-4' />
                        <h3 className='text-xl font-semibold text-gray-600 mb-2'>No Orders Found</h3>
                        <p className='text-gray-500 mb-4'>You haven't placed any orders yet.</p>
                        <Link
                            to="/products"
                            className='px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>


        </>
    )
}

export default ProfilePage