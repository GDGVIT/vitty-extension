import React, { useState } from 'react'
import Course from './Course'
import './../styles/Review.css'

const Timetable: React.FC<any> = ({ monSlots, tueSlots, wedSlots, thuSlots, friSlots }): JSX.Element => {
  const [activeSlots, setActiveSlots] = useState(monSlots)

  return (
    <>
      <div className='review-wrapper'>
        <div className='review'>
          <div className='days'>
            <div
              className={`day ${activeSlots === monSlots ? 'active' : ''}`}
              onClick={() => { setActiveSlots(monSlots) }}
            >
              Mon
            </div>
            <div
              className={`day ${activeSlots === tueSlots ? 'active' : ''}`}
              onClick={() => { setActiveSlots(tueSlots) }}
            >
              Tue
            </div>
            <div
              className={`day ${activeSlots === wedSlots ? 'active' : ''}`}
              onClick={() => { setActiveSlots(wedSlots) }}
            >
              Wed
            </div>
            <div
              className={`day ${activeSlots === thuSlots ? 'active' : ''}`}
              onClick={() => { setActiveSlots(thuSlots) }}
            >
              Thu
            </div>
            <div
              className={`day ${activeSlots === friSlots ? 'active' : ''}`}
              onClick={() => { setActiveSlots(friSlots) }}
            >
              Fri
            </div>
          </div>
          <Course
            slots={activeSlots}
          />
        </div>
      </div>
    </>
  )
}

export default Timetable
