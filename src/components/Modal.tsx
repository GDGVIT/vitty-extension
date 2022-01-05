import React, { useState, useEffect } from 'react'
import { addSlot, removeSlot } from '../utils/parseReview'
// import { FaTimes } from 'react-icons/fa'
import './../styles/Modal.css'

interface CourseProps {
  slot: string
  courseCode: string
  courseType: string
  courseName: string
  location: string
  startTime: Date
  endTime: Date
}

interface Props {
  onClose: any
  getActive: any
  resetActive: any
  slot: string
  status: string
  monSlots: CourseProps[]
  tueSlots: CourseProps[]
  wedSlots: CourseProps[]
  thuSlots: CourseProps[]
  friSlots: CourseProps[]
  setMonSlots: any
  setTueSlots: any
  setWedSlots: any
  setThuSlots: any
  setFriSlots: any
}

const Modal: React.FC<Props> = ({ onClose, getActive, resetActive, slot, status, monSlots, tueSlots, wedSlots, thuSlots, friSlots, setMonSlots, setTueSlots, setWedSlots, setThuSlots, setFriSlots }) => {
  const [slotAdd, setSlotAdd] = useState('')
  const [tip, setTip] = useState<string|undefined>('')

  useEffect(() => {
    if (status === 'remove') {
      if (slot.match(/[A-G]/) !== null) {
        if (slot.includes('T')) {
          setTip(`Tip: Don't forget to take out ${slot?.slice(1)} as well!`)
        } else setTip(`Tip: Don't forget to take out T${String(slot)} as well!`)
      }
    } else setTip('Tip: If the slot already exists, make sure you remove it from the timetable first!')
  }, [status, slot])

  const onSave = (dailySlots: CourseProps[][]): void => {
    const [m, t, w, th, f] = dailySlots
    setMonSlots(m)
    setTueSlots(t)
    setWedSlots(w)
    setThuSlots(th)
    setFriSlots(f)
    const s = getActive()
    resetActive([])
    if (s === 'm') resetActive(m)
    else if (s === 't') resetActive(t)
    else if (s === 'w') resetActive(w)
    else if (s === 'th') resetActive(th)
    else if (s === 'f') resetActive(f)
    onClose()
  }

  const onRemove = (): void => {
    const res = removeSlot(slot, monSlots, tueSlots, wedSlots, thuSlots, friSlots)
    onSave(res)
  }

  const onAdd = (): void => {
    addSlot(slotAdd, monSlots, tueSlots, wedSlots, thuSlots, friSlots).then(
      (res) => {
        onSave(res)
      }, () => {}
    )
    onClose()
  }

  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3>{`${status === 'remove' ? 'Remove' : 'Add'}`} Slot</h3>
          {/* <FaTimes onClick={onClose} /> */}
        </div>
        <div className='modal-body'>
          {
            status === 'remove'
              ? <div className='modal-message'>Are you sure you want to remove all <span>{slot}</span> slots?</div>
              : <div className='modal-message'>Enter course details (<span>A1-CSE2001-TH-SJT602-ALL</span>)</div>
          }
          {
            status === 'add' &&
              <input className='modal-input' type='text' value={slotAdd} onChange={e => setSlotAdd(e.target.value)} />
          }
          <div className='modal-buttons'>
            {
              status === 'remove'
                ?
                  <>
                    <button className='modal-yes' onClick={onRemove}>Yes</button>
                    <button className='modal-no' onClick={onClose}>No</button>
                  </>
                :
                  <>
                    <button className='modal-yes' onClick={onAdd}>Confirm</button>
                    <button className='modal-no' onClick={onClose}>Cancel</button>
                  </>
            }
          </div>
          <div className='modal-tip'>{tip}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
