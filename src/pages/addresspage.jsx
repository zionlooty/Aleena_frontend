import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

function Addresspage() {

    const navigate = useNavigate()


    return (
        <>
            <form action="">

                <div className="pt-[100px] p-5">

                    <div className="w-[70%] h-[400px] p-4 shadow">
                        <div className="w-full h-[40px] p-3 shadow mb-5">
                            <h3 className="text-xl font-semibold">1. CUSTOMER ADDRESS</h3>
                        </div>
                        <h3 className="font-semibold mb-3 text-gray-700 text-xl">ADDRESS BOOK</h3>
                        <div className="w-[80%] h-[40%] border-gray-300 rounded-md border p-4 ">
                            <div className="flex justify-between">
                                <div>

                                <h1 className='mb-2 text-xl'>Olamide Yusuf</h1>
                                <p>No16 anuoluwapo street | Kwara - Ilorin | +234 9067823827</p>
                                </div>
                                <div>
                                    <button onClick={()=>{
                                        navigate("/details")
                                    }} className="flex items-center gap-2 text-amber-500 text-xl cursor-pointer">Edit<MdEdit /></button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </form>
        </>
    );
}

export default Addresspage;