import React, { useState } from 'react'

function Login() {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const Login = ()=>{
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password:pass,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
               console.log(data.error)
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="login">
            <input type="text" name="" id="" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" name="" id="" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}} />
            <a href="/forgot">Forgot Password?</a>
            <a href="/signup">Create Account</a>
            <button onClick={()=>{
                Login()
            }} >Login</button>
        </div>
    )
}

export default Login
