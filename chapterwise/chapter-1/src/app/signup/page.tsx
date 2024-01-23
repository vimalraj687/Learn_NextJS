"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
export default function SignupPage(){
    const router = useRouter()
    const [user, setUser]= useState({
        email:"",
        password:"",
        userName:""
    })
    const [disbled, setDisbled]= useState(false)
    const [loading, setLoading]= useState(false)
    const singnup =async()=>{
    try{
    setLoading(true)

    const response= await axios.post("/src/app/api/users/signup")
    console.log("res", response.data);
    router.push("/login")
    }catch(error:any){
    console.log("singnup failded", error.message);
    }finally{
        setLoading(false)
    }
    }
    useEffect(()=>{
     if(user.email.length>0&&user.password.length>0&&user.userName.length>0){
        setDisbled(false)
     }else{
        setDisbled(true)
     }
    },[user])
    return(
        < div className="text-center  bg-gradient-to-r from-black to-blue-500  flex flex-col items-center justify-center min-h-screen py-2">
        
        <h1 className="mb-2">
            Signup
        </h1>
        <hr className="mb-2 mix-blend-color" />
        
        <label htmlFor="userName "   className="mb-2">UserName : </label>
        <input 
        className="p-2 border mb-2 border-gray-300 rounded-lg focus:outline-none"
        id ="userName"
        value={user.userName}
        onChange={(e)=>setUser({...user, userName:e.target.value} )}
        type="text"
        placeholder="userName"
        />
        

        <label htmlFor="email"  className="mb-2">Email : </label>
        <input 
        className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none"
        id ="email"
        value={user.email}
        onChange={(e)=>setUser({...user, email:e.target.value} )}
        type="email"
        placeholder="email"
        />
        

        <label htmlFor="password"  className="mb-2">Password : </label>
        <input 
        className="p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none"
        id ="password"
        value={user.password}
        onChange={(e)=>setUser({...user, password:e.target.value} )}
        type="password"
        placeholder="password"
        />
        
        <button onClick={singnup} className="p-2 mb-2 border border-yellow-600 rounded-lg  focus-outline-none focus:border-gray-500 ">
            {disbled?"No Signup":"Signup"}
        </button>
       <Link href="/login">
        Back to login
       </Link>
        </div>
    )
}