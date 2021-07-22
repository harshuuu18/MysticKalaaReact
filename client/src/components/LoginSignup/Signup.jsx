import React, { useState } from 'react'

function Signup() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [pass,setPass] = useState("")
    const Signup = ()=>{
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                phone,
                email,
                password:pass
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
               console.log(data.error)
           }
           else{
               console.log(data.message)
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div className="login">
            <input type="text" name="" id="" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" name="" id="" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" name="" id="" placeholder="Mobile no." onChange={(e)=>{setPhone(e.target.value)}} />
            <input type="text" name="" id="" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}} />
            <a href="/login">Login?</a>
            <button onClick={()=>{
                Signup()
            }}>Signup</button>
        </div>
    )
}

export default Signup
