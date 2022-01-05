import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

interface CourseProps {
  slot: string
  courseCode: string
  courseType: string
  courseName: string
  location: string
  startTime: Date
  endTime: Date
}

const Course: React.FC<any> = ({ slots, setShowModal, setModalSlot, setModalStatus }) => {
  return (
    <div className='course-wrapper'>
      {
        slots.map((course: CourseProps) => {
          const sTime: string =
            course.startTime.toLocaleTimeString()
              .slice(0, course.startTime.toLocaleTimeString().lastIndexOf(':')) +
            course.startTime.toLocaleTimeString()
              .slice(course.startTime.toLocaleTimeString().length - 3)
          const eTime: string =
            course.endTime.toLocaleTimeString()
              .slice(0, course.endTime.toLocaleTimeString().lastIndexOf(':')) +
            course.endTime.toLocaleTimeString()
              .slice(course.endTime.toLocaleTimeString().length - 3)
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
