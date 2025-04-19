import React from 'react'
import './hero.css'
import hand from '../../assets/hand_icon.png'
import arrow from '../../assets/arrow.png'
import model from '../../assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-exp' >
                <div className='hero-txt' >
                    <ul>
                        <li><h3 className='f-exp' >NEW ARRIVAL ONLY</h3> </li>
                        <li className='hand-exp' > <p>new</p> <img className='hands' src={hand} alt="" /> </li>
                        <li><p>collection</p></li>
                        <li><p>for everyone</p></li>
                        <li  ><button className='btn'>Latest Collection <img src={arrow} alt="" /></button>  </li>
                    </ul>
                </div>
                <div className='model-img' >
                    <img className='img-model' src={model} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
