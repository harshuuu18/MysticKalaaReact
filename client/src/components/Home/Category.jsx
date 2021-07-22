import React, { useContext } from 'react'

import { productData } from '../../App'

function Category() {
    const categoryData = useContext(productData)
    const Data = [...new Set(categoryData.map((i)=>{return i.category}))]
    
    return (
      
        <div id="categories">
      <h1 className="heading">Categories</h1>
      <div className="container">
      {
        Data.map((i,index)=>{
          
          return(
            <div className="card" key={index} >
              <a href={`/c/${i}`} >
              <div className="cardImg" ></div>

              <h6>{i} </h6>
              </a>            
            </div>
          )
        })
      }
        
      </div>
    </div>
    )
}

export default Category
