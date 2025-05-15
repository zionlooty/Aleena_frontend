import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";





const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddNewUser = async (e) => {
        e.preventDefault();

        const { fullname, email, mobile, password, confirmPassword } = formData;


        if (!fullname || !email || !mobile || !password || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }


        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }


        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const data = await axios.post("http://localhost:5000/new/user", { ...formData });
            toast.success(data.data.message);
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }



    return (
        <>
            <div className="min-h-screen pt-[100px] flex justify-center px-4 items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-center text-black text-3xl font-bold mb-6">Registration Form</h2>
                    <form onSubmit={handleAddNewUser}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">fullname: </label>
                            <input type="text" name="fullname" placeholder="First name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 mt-1 border rounded-md bg-white text-gray-800 outline-none" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Email:</label>
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 mt-1  border rounded-md bg-white text-gray-800 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">mobile no:</label>
                            <input type="text" name="mobile" placeholder="mobile no" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 mt-1  border rounded-md bg-white text-gray-800 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">password:</label>
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 mt-1  border rounded-md bg-white text-gray-800 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-semibold">Confirm password:</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 mt-1  border rounded-md bg-white text-gray-800 outline-none" />
                        </div>
                        <div className="flex justify-center mt-5">
                            <input type="submit" value="Register" className="w-40 rounded-md border border-slate-300 bg-black text-white p-2 hover:bg-blue-500 cursor-pointer" />

                        </div>
                    </form>
                </div>

            </div>




        </>
    )
}


export default Signup;