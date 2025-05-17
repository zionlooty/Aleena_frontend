import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiUserPin } from 'react-icons/bi'
import { API_URL } from './view'
import { toast } from "sonner"
import { productServices, userServices } from '../services/apiServices'

const ProfilePage = () => {

    const [previewUrl, setpreviewUrl] = useState("")
    const [name, setName] = useState({
        fullname: "",
        email: "",
        mobile: ""

    })
    const fetchUser = async () => {
        try {
            const res = await userServices.getUser()
            setName({
                fullname:"" ,
                email :"",
                mobile:""
            })
          
        } catch (error) {
            console.error("error fetching user")
            toast.error("error fetching user")
           
        }
    }

    useEffect(() => {
        fetchUser()
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
                            <input type="text" name="fullname" value={name.fullname} onChange={(e)=>setName({...name,[e.target.name]: e.target.value})} className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" v />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" value={name.fullname} onChange={(e)=>setName({...name,[e.target.name]: e.target.value})} className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Mobile.no</label>
                            <input type="text" name='mobile' value={name.fullname} onChange={(e)=>setName({...name,[e.target.name]: e.target.value})} className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" />
                        </div>
                    </div>
                    <div className='mt-3 justify-center items-center'>

                        <button type='submit' className='px-6 py-2 bg-amber-500 text-white rounded-md text-xl cursor-pointer'>updated User</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfilePage