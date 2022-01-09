import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './../Context'
import { getLists, getVersion, isAvailable, isUpdated } from '../utils/firestoreCalls'
import Upload from './Upload'
import Timetable from './Timetable'
import Loader from './Loader'
import './../styles/LoggedIn.css'

interface CourseProps {
  slot: string
  courseCode: string
  courseType: string
  courseName: string
  location: string
  startTime: any
  endTime: any
}

const LoggedIn: React.FC<any> = ({ db }) => {
  const { userState } = useContext(AppContext)
  const [user] = userState
  const [status, setStatus] = useState('loading')
  const [monSlots, setMonSlots] = useState()
  const [tueSlots, setTueSlots] = useState()
  const [wedSlots, setWedSlots] = useState()
  const [thuSlots, setThuSlots] = useState()
  const [friSlots, setFriSlots] = useState()

  const addMinutes = (dt: Date, minutes: number): Date => {
    return new Date(dt.getTime() + minutes * 60000)
  }

  const addAlarms = (courses: CourseProps[], uuid: number): number => {
    courses.forEach((course) => {
      uuid += 1
      const today = new Date()
      let startTime = new Date(0)
      startTime.setUTCSeconds(course.startTime.seconds)
      startTime = addMinutes(startTime, -5)
      let date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startTime.getHours(), startTime.getMinutes(), startTime.getSeconds())
      date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7)
      if (date < today) date = addMinutes(date, 10080)
      window.chrome.alarms.create(uuid.toString() + course.courseName, {
        when: date.getTime(),
        periodInMinutes: 10080
      })
    })
    return uuid
  }

  useEffect(() => {
    isUpdated(user, db).then((updated) => {
      if (updated) {
        isAvailable(user, db).then((avail) => {
          if (avail) {
            getLists(user, db).then((res) => {
              chrome.alarms.clearAll((wasCleared) => {
                if (wasCleared) {
                  let uuid = 10
                  res.forEach((days: CourseProps[]) => {
                    uuid = addAlarms(days, uuid)
                  })
                }
                chrome.alarms.getAll((alarms) => {
                  console.log(alarms)
                })
              })
              localStorage.setItem('monday', JSON.stringify(res[0]))
              localStorage.setItem('tuesday', JSON.stringify(res[1]))
              localStorage.setItem('wednesday', JSON.stringify(res[2]))
              localStorage.setItem('thursday', JSON.stringify(res[3]))
              localStorage.setItem('friday', JSON.stringify(res[4]))
              setMonSlots(res[0])
              setTueSlots(res[1])
              setWedSlots(res[2])
              setThuSlots(res[3])
              setFriSlots(res[4])
              getVersion(user, db).then((ver) => localStorage.setItem('timetableVersion', ver.toString()), () => {})
              setStatus('timetable')
            }, () => { })
          } else {
            void chrome.alarms.clearAll()
            localStorage.removeItem('monday')
            localStorage.removeItem('tuesday')
            localStorage.removeItem('wednesday')
            localStorage.removeItem('thursday')
            localStorage.removeItem('friday')
            getVersion(user, db).then((ver) => localStorage.setItem('timetableVersion', ver.toString()), () => {})
            setStatus('upload')
          }
        }, () => {})
      } else {
        if (localStorage.getItem('monday') === null) setStatus('upload')
        else {
          setMonSlots(JSON.parse(localStorage.getItem('monday') ?? '{}'))
          setTueSlots(JSON.parse(localStorage.getItem('tuesday') ?? '{}'))
          setWedSlots(JSON.parse(localStorage.getItem('wednesday') ?? '{}'))
          setThuSlots(JSON.parse(localStorage.getItem('thursday') ?? '{}'))
          setFriSlots(JSON.parse(localStorage.getItem('friday') ?? '{}'))
          setStatus('timetable')
        }
      }
    }, () => { })
  }, [])

  return (
    <section className='logged-in'>
      {
        status === 'upload'
          ? <Upload />
          : status === 'timetable'
            ? <Timetable
                monSlots={monSlots}
                tueSlots={tueSlots}
                wedSlots={wedSlots}
                thuSlots={thuSlots}
                friSlots={friSlots}
              />
            : <Loader />
      }
    </section>
  )
}

export default LoggedIn
