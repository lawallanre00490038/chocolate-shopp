import React from 'react'
import myImages from "../myImages"

const body = () => {
  return (
    <div className='containa'>
        <div>
            <h1 className='header-best'>Shop Best Sellers</h1>
        </div>


        <div className='imageContainer'>
            {myImages.map((image) => {
                return(
                    <div className='imageContainer' key={image.index}>
                        <img src={image.url} alt="the coffee"/>
                        <p className='image-details'><span>{image.name} </span><br /><span>{image.price}</span></p>
                    </div>
                )
            
            })}
        </div>
        
    </div>
  )
}

export default body