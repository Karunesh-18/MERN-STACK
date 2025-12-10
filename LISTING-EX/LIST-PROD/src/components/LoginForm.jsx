import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const PasswordRef = useRef("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, PasswordRef.current.value);
        if(username === "admin" && PasswordRef.current.value === "admin123"){
            toast.success("Login Successful as Admin");
            console.log("Login Successful as Admin");
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("role", "admin");
            navigate("/admin");
        } else if(username === "user" && PasswordRef.current.value === "user123"){
            toast.success("Login Successful as User");
            console.log("Login Successful as User");
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("role", "user");
            navigate("/products");
        } else {
            toast.error("Invalid credentials");
            console.log("Login Failed");
            console.log("Invalid credentials. Try admin/admin123 or user/user123");
        }
    }
    
    return(
        <>
            <div className="w-[300px] bg-red-50 border-2 border-red-200 mx-auto p-4 rounded-md shadow-lg flex flex-col items-center justify-center mt-4 mb-50">
                <h1 className="text-xl mb-2">Login Form</h1>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full" value={username} onChange={handleNameChange} />
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full" ref={PasswordRef} />
                <button className="bg-[#0064d2] hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full transition-colors" onClick={handleSubmit}>Login</button>
            </div>
        </>
    )
}

export default LoginForm;