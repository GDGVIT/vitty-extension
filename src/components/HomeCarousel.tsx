// import React from 'react'
import React, { useState } from 'react'
import Carousel1 from './../assets/carousel1.png'
import Carousel2 from './../assets/carousel2.png'
import Carousel3 from './../assets/carousel3.png'
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import './../styles/HomeCarousel.css'

const HomeCarousel: React.FC = () => {
  const [value, setValue] = useState(0)
  const onChange: any = (value: any) => {
    setValue(value)
  }

  return (
    <div className='carousel'>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000
            }
          }
        ]}
        animationSpeed={1500}
      >
        <div className='carousel-model'>
          <div className='carousel-img'>
            <img src={Carousel1} alt='Carousel' />
          </div>
          <h3>Never miss a class</h3>
          <p>Notifications to remind you about your upcoming classes</p>
        </div>
        <div className='carousel-model'>
          <div className='carousel-img'>
            <img src={Carousel2} alt='Carousel' />
          </div>
          <h3>Get a sneak peek</h3>
          <p>View your upcoming classes and timetable via the widget</p>
        </div>
        <div className='carousel-model'>
          <div className='carousel-img'>
            <img src={Carousel3} alt='Carousel' />
          </div>
          <h3>Upload once, view anywhere</h3>
          <p>Instant sync across all your devices via the app and extension</p>
        </div>
      </Carousel>
      <div className='carousel-dots'>
        <Dots value={value} onChange={onChange} number={3} />
      </div>
    </div>
  )
}

export default HomeCarousel
