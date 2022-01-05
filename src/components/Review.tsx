import React, { useContext, useState } from 'react'
import { AppContext } from './../Context'
import { deleteTimetable, uploadDailySlots } from '../utils/firestoreCalls'
import Course from './Course'
import Modal from './Modal'
import './../styles/Review.css'

const Review: React.FC<any> = ({ setStatus, monSlots, tueSlots, wedSlots, thuSlots, friSlots, setMonSlots, setTueSlots, setWedSlots, setThuSlots, setFriSlots, db }): JSX.Element => {
  const { userState } = useContext(AppContext)
  const [user] = userState
  const [activeSlots, setActiveSlots] = useState(monSlots)
  const [showModal, setShowModal] = useState(false)
  const [modalSlot, setModalSlot] = useState('')
  const [modalStatus, setModalStatus] = useState('')

  const handleConfirm = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault()
    if (monSlots.length === 0 && tueSlots.length === 0 && wedSlots.length === 0 && thuSlots.length === 0 && friSlots.length === 0) {
      deleteTimetable(user, db)
      setStatus('finished')
      return
    }
    uploadDailySlots(monSlots, 'monday', user, db)
    uploadDailySlots(tueSlots, 'tuesday', user, db)
    uploadDailySlots(wedSlots, 'wednesday', user, db)
    uploadDailySlots(thuSlots, 'thursday', user, db)
    uploadDailySlots(friSlots, 'friday', user, db)
    setStatus('finished')
  }

  const findActiveDay = (): String => {
    if (activeSlots === monSlots) return 'm'
    else if (activeSlots === tueSlots) return 't'
    else if (activeSlots === wedSlots) return 'w'
    else if (activeSlots === thuSlots) return 'th'
    else if (activeSlots === friSlots) return 'f'
    return 'm'
  }

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
            setShowModal={setShowModal}
            setModalSlot={setModalSlot}
            setModalStatus={setModalStatus}
          />
        </div>
        <button className='review-confirm' onClick={handleConfirm}>Confirm</button>
      </div>
      {showModal &&
        <Modal
          onClose={() => setShowModal(false)}
          getActive={findActiveDay}
          resetActive={setActiveSlots}
          slot={modalSlot}
          status={modalStatus}
          monSlots={monSlots}
          tueSlots={tueSlots}
          wedSlots={wedSlots}
          thuSlots={thuSlots}
          friSlots={friSlots}
          setMonSlots={setMonSlots}
          setTueSlots={setTueSlots}
          setWedSlots={setWedSlots}
          setThuSlots={setThuSlots}
          setFriSlots={setFriSlots}
        />}
    </>
  )
}

export default Review
