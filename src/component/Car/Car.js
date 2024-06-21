import React from 'react'
import "./Car.css"

const Car = ({ id,bgImg, title, dec }) => {
    return (
        <>
            <div className='carSection' id={id} style={{ backgroundImage: `url("/images/${bgImg}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='carModel'>
                    <div className='model' data-aos="fade">{title}</div>
                    <p  className='desc' data-aos="fade">{dec}</p>

                </div>
                <div className='buttonGrp'>
                    <button className='btn1'>Customer Order</button>
                    {dec && <button className='btn2'>Existing Inventory</button>
                    }

                </div>

            </div>

        </>

    )
}

export default Car