import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { API_URL } from './view'
import { toast } from "sonner"
import { productServices, userServices } from '../services/apiServices'

const ProfilePage = () => {
    const [previewUrl, setpreviewUrl] = useState("")
    const [name, setName] = useState({
        user_id: "",
        fullname: "",
        email: "",
        mobile: ""

    })
    const fetchUser = async () => {
        try {
            const res = await userServices.getUser()
            // console.log("API Response", res)
            const user = Array.isArray(res) ? res[0] : null
            if (!user) throw new error("no user found")
            setName({
                user_id: user.user_id,
                fullname: user.fullname || "",
                email: user.email || "",
                mobile: user.mobile || ""
            })

        } catch (error) {
            console.error("error fetching user", error)
            toast.error("error fetching user")

        }
    }

    useEffect(() => {
        fetchUser()
    }, [])


    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            
            await userServices.updateUser(name, name.user_id)
            toast.success("profile updated successfully")
        } catch (error) {
            toast.error("failed to uodate profile")
            console.log(error)
        }
    }

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
        </>
    )
}

export default ProfilePage