import React from 'react'
import Image from 'next/image'
import '../styles/sliderPhoto.css'

const SliderPhotos = () => {
  return (
    <div style={{height: 630, overflow:'hidden'}}>
      <div className="slides">
        {/* Radio Buttons Start */}
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        {/* Slide Images Start */}
        <div className="slide first">
          <Image src={"/images/img1.jpg"} alt='Girl Using Computer' fill />
        </div>
        <div className="slide">
          <Image src={"/images/img2.jpg"} alt='Boy in Classroom' height={250} width={500} />
        </div>
        {/* Slider Text */}
        {/* Automatic Navigation Start */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
        </div>
      </div>
      {/* manual navigation start */}
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
      </div>
    </div>
  )
}

export default SliderPhotos