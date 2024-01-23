"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage(){
    const [user, setUser]= useState({
        email:"",
        password:"",
    })
    const onLogin =async()=>{

    }
    return(
        <div className="text-center  bg-gradient-to-r from-black to-blue-500  flex flex-col items-center justify-center min-h-screen py-2">
        
        <h1 className="mb-2">
            Login
        </h1>
        <hr className="mb-2" />
        
        {/* <div className="mb-2"> */}

        <label htmlFor="email" className="mb-2">Email : </label>
        <input 
        className="p-2 border mb-2 border-gray-300 rounded-lg focus:outline-none"
        id ="email"
        value={user.email}
        onChange={(e)=>setUser({...user, email:e.target.value} )}
        type="email"
        placeholder="email"
        />
         
        <label htmlFor="password" className="mb-2">Password : </label>
        <input 
        className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none"
        id ="password"
        value={user.password}
        onChange={(e)=>setUser({...user, password:e.target.value} )}
        type="password"
        placeholder="password"
        />
        {/* </div> */}
        <button onClick={onLogin} className="p-2 mb-2 border border-yellow-600 rounded-lg  focus-outline-none focus:border-gray-500 ">
            Login
        </button>
       <Link href="/signup">
        Back to login
       </Link>
        </div>
    )
}