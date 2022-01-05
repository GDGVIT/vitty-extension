import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from './../Context'
import { getLists, isAvailable } from '../utils/firestoreCalls'
import Upload from './Upload'
import Timetable from './Timetable'
import Loader from './Loader'
import './../styles/LoggedIn.css'

const LoggedIn: React.FC<any> = ({ db, name }) => {
  const { userState } = useContext(AppContext)
  const [user] = userState
  const [status, setStatus] = useState('loading')
  const [monSlots, setMonSlots] = useState()
  const [tueSlots, setTueSlots] = useState()
  const [wedSlots, setWedSlots] = useState()
  const [thuSlots, setThuSlots] = useState()
  const [friSlots, setFriSlots] = useState()

  useEffect(() => {
    isAvailable(user, db).then((bool) => {
      if (bool) {
        getLists(user, db).then((res) => {
          setMonSlots(res[0])
          setTueSlots(res[1])
          setWedSlots(res[2])
          setThuSlots(res[3])
          setFriSlots(res[4])
          setStatus('timetable')
        }, () => { })
      } else setStatus('upload')
    }, () => {})
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
