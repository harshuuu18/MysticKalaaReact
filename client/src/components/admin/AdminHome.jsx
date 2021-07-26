import React, { useEffect, useState } from 'react'

function AdminHome() {
    const [adminData,setAdminData] = useState([])
    const [orderData,setOrderData] = useState([])
    const [isOpened,setIsOpened] = useState(false)

    useEffect(()=>{
        async function fetchAdmingData(){
      
      try{
        const response = await fetch('/users')
        const data = await response.json()
        
        setAdminData(data.posts)
        // console.log(data.posts)
      }
      catch(err){
        console.log(err)
      }
    }
    
    fetchAdmingData()
    },[])

    return (
        <div class="orderContainer">
        <section class="orders light-section">
            <div class="container mx-auto pt-12">
                <h1 class="font-bold text-lg mb-4">All orders</h1>
                <table class="w-full table-auto bg-white">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-left">Orders</th>
                            <th class="px-4 py-2 text-left">Customer</th>
                            <th class="px-4 py-2 text-left">Address</th>
                            <th class="px-4 py-2 text-left">status</th>
                            <th class="px-4 py-2 text-left">Placed at</th>
                            <th class="px-4 py-2 text-left">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody id="orderTableBody">
                        {/* single Order */}
                        {
                            adminData.map(({details,email,name,order,password,phone,role,_id,})=>{
                                {/* console.log(order) */}
                                return(
                                    <>
                                    {
                                        order.map(({details,discount,id,items,payment,status})=>{
                                            
                                            return (
                                                <tr>
                            <td class="border px-4 py-2 text-green-900">
                                <p onClick={()=>{
                                    setIsOpened(true)
                                    setOrderData(items)
                                }} >{id} </p>
                                <div> {""} </div>
                            </td>
                            <td class="border px-4 py-2">{name}/{phone}/{email}</td>
                            <td class="border px-4 py-2">{details.address} </td>
                            <td class="border px-4 py-2">
                                <div class="inline-block relative w-64">
                                    <form action="/admin/order/status" method="POST">
                                    <h3 style={{color:"#ee3364"}} >{status} </h3>
                                        <input type="hidden" name="orderId" value=" order._id " />
                                        <select name="status" 
                                            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option value="order_placed">
                                                Placed</option>
                                            <option value="confirmed">
                                                Confirmed</option>
                                            <option value="prepared">
                                                Shipped</option>
                                            <option value="delivered">
                                                Delivered
                                            </option>
                                            <option value="completed">
                                                Completed
                                            </option>
                                        </select>
                                    </form>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td class="border px-4 py-2">
                                Time of Payment
                            </td>
                            <td class="border px-4 py-2">
                                {payment}
                            </td>
                        </tr>
                                            )
                                        })
                                    }
                                    
                        </>
                                )
                            })
                        }
                        
                        {/* single Order */}
                    </tbody>
                </table>
            </div>
        </section>    

        <div className="modal" style={ isOpened ? {display:'flex'} : {display:'none'}} onClick={()=>setIsOpened(false)} >
            <div className="acutal-modal">
                {
                    orderData.map(({category,photo,price,title,_id})=>{
                        
                        return(
                            <div>
                                {"here will be all ordered products"}
                            </div>
                        )
                    })
                }
            </div>
        </div>

      </div>
    )
}

export default AdminHome
