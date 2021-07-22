import React from 'react'

function Cart(props) {
    var Carts = JSON.parse(localStorage.getItem('items'));
    if(Carts){

        var NCart = [...new Map(Carts.map(item => [item._id, item])).values()]
    }
        var PrQuantity = []
        var TotalPrice = []
    
    
    return (
        <>
        {
            Carts
            ?
        <>

        <div className="cartContainer">
        <div className="cartheading">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
        </div>
        
        {
            NCart.map(({title,price,photo,category,_id},i)=>{
                var Quantity = Carts.filter((f)=> f._id === _id).length
                PrQuantity.push({
                    Quantity,
                    _id:_id
                })
                TotalPrice.push(parseInt(price)*Quantity)
                
                return (
                    <div className="cartelem" key={_id} >
                        <div className="elem">
                            <img
                            src="https://images.unsplash.com/photo-1602188324312-e1cd6383d2fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                            alt=""
                            />
                            <span>{title} </span>
                        </div>
                        <div className="elem">
                            <span>${parseInt(price)*Quantity} </span>
                        </div>
                        <div className="elem" style={{justifyContent:"space-around"}}>
                            <button id="minus" onClick={()=>props.RemoveFromCart({_id})} >-</button>
                            <span>{Quantity} </span>
                            <button id="minus" onClick={()=>props.AddToCart({title,price,photo,category,_id})} >+</button>

                        </div>
                    </div>
                )
            })
        }
        
    
    

        
      </div>
      <hr />
      <div id="summary">
      {/* {console.log("total", TotalPrice.reduce((a, b) => a + b, 0))} */}
        <h2>Cart totals</h2>
        {
            NCart.map(({title,price,photo,category,_id},i)=>{
                var Quantity = Carts.filter((f)=> f._id === _id).length
                PrQuantity.push({
                    Quantity,
                    _id:_id
                })
                return (
                    <div className="item" key={_id} >
                    <span>{title} {"  "} X {Quantity} </span>
                    <span>${parseInt(price)*Quantity} </span>
                    </div>
                )
                
                })
        }
       
        
        <hr />
        <div className="item total">
          <strong><span>TOTAL</span></strong>

          <strong> <span>${
            TotalPrice.reduce((a, b) => a + b, 0)
          } </span></strong>
        </div>
        <hr />
        <button>PROCEED TO CHECKOUT</button>
      </div>
      </>

      :

      <h2>Cart is empety</h2>
        }
        <br /><br />

</>
    )
}

export default Cart
