import React, { useEffect, useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import { productServices, userServices, orderServices } from '../services/apiServices'
import { Modal, Table, Button } from 'antd';


const Orderpage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [carts, setCart] = useState([])
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    const location = useLocation()
    const navigate = useNavigate()
    const { subtotal, deliveryFee, total } = location.state || {}

    const [name, setName] = useState([])

    const fetchUser = async () => {
        try {
            const res = await userServices.getUser()
            setName(res[0])

        } catch (error) {
            console.error("error fetching user", error)
            toast.error("error fetching user")

        }
    }

    const fetchCart = async () => {
        try {
            const res = await productServices.getCart()
            console.log("Cart data received:", res)
            setCart(res)
        } catch (error) {
            console.error("Error fetching cart:", error)
        }
    }
    useEffect(() => {
        fetchCart()
    }, [])

    const columns = [
        {
            title: "S/NO",
            dataIndex: "no",
            key: "no"
        },
        {
            title: "Product Name",
            dataIndex: "product_name",
            key: "product_name",
        },
        {
            title: "product price",
            dataIndex: "product_price",
            key: "product_price",
        },
        {
            title: "product quantity",
            dataIndex: "product_quantity",
            key: "product_quantity",
        },
    ]


    useEffect(() => {
        fetchUser()
    }, [])

    const handlePlaceOrder = async () => {
        if (!name.address) {
            toast.error("Please add a delivery address in your profile")
            return
        }

        setIsPlacingOrder(true)
        try {
            const response = await orderServices.placeOrder(name.address, total)
            toast.success(response.message)
            setIsModalOpen(false)
            setIsSuccessModalOpen(true)
        } catch (error) {
            console.error("Error placing order:", error)
            toast.error(error.response?.data?.message || "Failed to place order")
        } finally {
            setIsPlacingOrder(false)
        }
    }

    const handleSuccessModalOk = () => {
        setIsSuccessModalOpen(false)
        navigate('/cart') // Redirect to cart page or home
    }


    return (
        <>
            <section className='grid  bg-gray-200 pt-[150px] justify-center px-7 gap-4'>
                <main >
                    <div>

                        <div className='w-full h-[180px] bg-white px-5 py-3 rounded-md shadow mb-5 '>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 items-center'>
                                    <IoCheckmarkCircle className='text-2xl text-green-400' />
                                    <h1 className='text-xl font-semibold'> 1.CUSTOMER ADDRESS</h1>
                                </div>
                                <div className='flex items-center text-blue-500 text-xl gap-4'>
                                    <Link to={"/profile"}>change</Link>
                                    <MdNavigateNext />
                                </div>
                            </div>
                            <div className='w-full border border-gray-200 mb-5'></div>
                            <div>
                                <h1 className='mb-2 text-xl uppercase'>{name.fullname}</h1>
                                <p>{name.address}</p>
                            </div>
                        </div>
                        <div className='w-full h-[200px] bg-white px-5 py-3 rounded-md shadow mb-5 '>
                            <div className='flex gap-2 items-center'>
                                <IoCheckmarkCircle className='text-2xl text-gray-400' />
                                <h1 className='text-xl font-semibold'>2.DELIVERY DETAILS</h1>

                            </div>
                            <div className='w-full border border-gray-200 mb-5'></div>
                            <div>
                                <h1 className='mb-2 text-xl'>pick up</h1>
                                <p>Delivery  between <span className='font-semibold'>29 may</span> <span className='font-semibold'>30 may</span></p>
                            </div>
                            <div className='pt-4 mt-auto'>
                                <button className='w-[300px] text-xl bg-amber-400  hover:bg-amber-600 cursor-pointer text-white py-3 rounded'>Confirm Delivery Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full  bg-white px-5 py-3 rounded-md shadow mb-5 '>
                        <div className='flex gap-4 items-center'>
                            <IoCheckmarkCircle className='text-2xl text-gray-400' />
                            <h1 className='text-gray-400 text-2xl'>PAYMENT METHOD</h1>
                        </div>
                    </div>
                    <div className='flex gap-2 text-blue-400   text-sm items-center'>
                        <GrFormPrevious className='text-xl' />
                        <Link className='hover:underline' to={"/cart"}> go back & continue shopping</Link>
                    </div>

                </main>


                <article className='p-5'>
                    <div className='w-[500px] h-[370px] rounded bg-white shadow'>

                        <h1 className='text-xl font-semibold p-4'>order summary</h1>
                        <div className='w-full border border-gray-200 mb-5'></div>
                        <div>
                            <div className='flex justify-between p-3 text-xl '>
                                <h3 className='text-xl'>subtotal</h3>
                                <p className='font-semibold'>&#8358;{Intl.NumberFormat().format(subtotal)}</p>

                            </div>
                            <div className='flex justify-between p-3 '>
                                <h3 className='text-xl'>Delivery fee</h3>
                                <p className='font-semibold'>&#8358;{Intl.NumberFormat().format(deliveryFee)}</p>

                            </div>
                            <div className='w-full border border-gray-200 mb-5'></div>
                        </div>
                        <div className='flex justify-between p-3 text-xl ' >
                            <h3 className='font-semibold'>Total</h3>
                            <p className='font-bold'> &#8358;{Intl.NumberFormat().format(total)}</p>

                        </div>
                        <div className='flex flex-col justify-center items-center  p-4'>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className='text-xl py-3 px-4 mb-3 text-white rounded  hover:bg-amber-600 bg-amber-400 cursor-pointer w-full'>Confirm order</button>
                            <h3 className='text-gray-500'>(Complete the steps in other to proceed)</h3>
                        </div>
                    </div>
                    <div className='text-center mt-2  text-gray-500'>

                        <p>By proceeding, you are automatically accepting the <br /><Link className='text-blue-400 hover:underline '>Terms & Conditions</Link></p>
                    </div>
                </article>


            </section>
            <Modal
                title="Confirm Your Order"
                open={isModalOpen}
                onOk={handlePlaceOrder}
                onCancel={() => setIsModalOpen(false)}
                okText="Place Order"
                cancelText="Cancel"
                confirmLoading={isPlacingOrder}
            >
                <Table
                    dataSource={carts.map((cart, index) => ({
                        key: index,
                        no: index + 1,
                        product_name: cart.product_name,
                        product_price: cart.product_price,
                        product_quantity: cart.product_quantity,
                    }))}
                    columns={columns}
                    pagination={false}
                />
                <div className="mt-4 p-3 bg-gray-50 rounded">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Amount:</span>
                        <span className="font-bold text-lg">&#8358;{Intl.NumberFormat().format(total)}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                        <strong>Delivery Address:</strong> {name.address || "Please add address in profile"}
                    </div>
                </div>
            </Modal>

            <Modal
                title="Order Placed Successfully!"
                open={isSuccessModalOpen}
                onOk={handleSuccessModalOk}
                onCancel={handleSuccessModalOk}
                okText="Continue Shopping"
                cancelText="View Orders"
                footer={[
                    <Button key="orders" onClick={() => {
                        setIsSuccessModalOpen(false)
                        navigate('/profile') // Assuming orders are viewed in profile
                    }}>
                        View Orders
                    </Button>,
                    <Button key="continue" type="primary" onClick={handleSuccessModalOk}>
                        Continue Shopping
                    </Button>
                ]}
            >
                <div className="text-center py-4">
                    <IoCheckmarkCircle className="text-6xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thank you for your order!</h3>
                    <p className="text-gray-600 mb-4">
                        Your order has been placed successfully and will be processed soon.
                    </p>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                        <p className="text-sm text-green-700">
                            You will receive a confirmation email shortly with your order details.
                        </p>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Orderpage