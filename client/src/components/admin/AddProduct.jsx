import React, { useState } from 'react'

function AddProduct() {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [pic,setPic] = useState("")
    const [category,setCategory] = useState("")
    const AddPrdct = async()=>{
        try{
            const response = await fetch('/createproduct',{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    title,
                    price,
                    pic,
                    category
                })
            })
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className="add-product">
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input type="text" value={pic} onChange={(e)=>setPic(e.target.value)} />
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
            <button onClick={()=>AddPrdct()} >Add</button>
        </div>
    )
}

export default AddProduct
