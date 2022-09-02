import React from 'react'

const ProductsContainer = (props) => {
    
    return (
        
        <div className='pr-box'>
            <div className='icons'>
                <a href='#' className='fas fa-shopping-cart'></a>
                <a href='#' className='fas fa-eye'></a>
                <a href='#' className='fas fa-share'></a>
            </div>

            <div className='image'>
                <img src={props.img} alt="product" />
            </div>

            <div className='content'>
                <h3 className="productHeading">{props.heading}</h3>
                <div className='price'>
                    ${props.price} <span>${props.spanPrice}</span>
                </div>
            </div>

        </div>
    )
}

export default ProductsContainer;