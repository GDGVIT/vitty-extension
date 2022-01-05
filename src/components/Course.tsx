import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

interface CourseProps {
  slot: string
  courseCode: string
  courseType: string
  courseName: string
  location: string
  startTime: any
  endTime: any
}

const Course: React.FC<any> = ({ slots }) => {
  return (
    <div className='course-wrapper'>
      {
        slots.map((course: CourseProps) => {
          const startTime = new Date(0)
          startTime.setUTCSeconds(course.startTime.seconds)
          const endTime = new Date(0)
          endTime.setUTCSeconds(course.endTime.seconds)
          const sTime: string =
            startTime.toLocaleTimeString()
              .slice(0, startTime.toLocaleTimeString().lastIndexOf(':')) +
            startTime.toLocaleTimeString()
              .slice(startTime.toLocaleTimeString().length - 3)
          const eTime: string =
            endTime.toLocaleTimeString()
              .slice(0, endTime.toLocaleTimeString().lastIndexOf(':')) +
            endTime.toLocaleTimeString()
              .slice(endTime.toLocaleTimeString().length - 3)
          return (
            <div key={course.slot} className='course'>
              <div className='course-deets'>
                <div className='course-name'>{course.courseName}</div>
                <div className='course-time'>
                  {sTime} - {eTime}
                </div>
                <div className='course-slot-loc'>
                  <div className='course-slot'>{course.slot}</div>
                  <div className='course-loc'>{course.location} <FaMapMarkerAlt /></div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Course
