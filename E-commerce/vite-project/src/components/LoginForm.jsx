import { useRef, useState } from "react";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const PasswordRef = useRef("");

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, PasswordRef.current.value);
    }
    
    return(
        <>
            <div className="w-[300px] bg-purple-100 mx-auto p-4 rounded-md shadow-lg flex flex-col items-center justify-center mt-4 mb-50">
                <h1 className="text-xl mb-2">Login Form</h1>
                <input type="text" placeholder="Username" className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full" value={username} onChange={handleNameChange} />
                <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full" ref={PasswordRef} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full" onClick={handleSubmit}>Login</button>
            </div>
        </>
    )
}

export default LoginForm;