import React from 'react'

const SliderContainer = (props) => {
    return (
        <div className='box' style={{ backgroundImage: `url(${props.img})` }}>
            <div className='content'>
                <h3>{props.header}</h3>
                <p>{props.para}</p>

                <div className='button'>
                    <a href='#' className='btn'>shop now</a>
                </div>
            </div>
        </div>
    )
}

export default SliderContainer;