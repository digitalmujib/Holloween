import React from 'react'
import "./arrivals.css"
import ArrivalsContainer from "./ArrivalsContainer"
import arrivalsData from "./arrivalsData"

const Arrivals = () => {
    return (
        <>

            <section className='arrivals' id="Arrivals">
                <h1 className='heading'>New <span>Arrivals</span> </h1>

                <div className='box-container' >

                    {arrivalsData.map((elem, index) => (
                        <ArrivalsContainer
                            key={index}
                            img={elem.img}
                            heading={elem.header}
                            price={elem.price}
                            spanPrice={elem.spanPrice}
                        />
                    ))}

                </div>
            </section>
        </>
    )
}

export default Arrivals