import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";





const Loginpage = () => {

    
    const [email, setEmail] = useState("");
    const [pass_word, setPassword] = useState("");
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const data = await axios.post("http://localhost:5000/user/login", { email_number: email, password: pass_word })
            localStorage.setItem("token", data.data.message)
            toast.success("login successfully")
            setTimeout(() => {
                navigate("/")
            }, 1000)
            
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            setLoading(false)
        }
    }







    return (
        <>
            <div className="min-h-screen flex justify-center items-center px-4">
                <div className="bg-white shadow-lg rounded-lg p-6  w-100 ">
                    <h2 className="text-2xl font-bold text-center text-gray-500">LOGIN</h2>

                    <form onSubmit={handleLogin} className="mt-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="block text-gray-500">Email</label>
                            <input type="email" placeholder="Enter your email" className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="block text-gray-500">Password</label>
                            <input type="password" placeholder="Enter your password" className="w-80 px-4 py-2 mt-2 border rounded-md outline-none" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 my-3">
                            <input
                                type="submit"
                                value={loading ? "Logging in..." : "Login"}
                                className="w-40 rounded-md border border-slate-300 bg-amber-500 text-white p-2  hover:bg-amber-600 cursor-pointer"
                                disabled={loading}
                            />
                        </div>
                    </form>
                    <p className="text-sm text-center text-gray-600 mt-4">Don't have an account? <Link to="/signup" className="text-blue-500">signup</Link></p>
                </div>
            </div>


        </>
    )
}


export default Loginpage;