import React, { useState } from 'react'
import { uploadText, uploadImage } from '../utils/apiCalls'
import { parseAndReturn } from '../utils/parseResponse'

const Upload: React.FC<any> = ({ setStatus, setMonSlots, setTueSlots, setWedSlots, setThuSlots, setFriSlots }): JSX.Element => {
  const [text, setText] = useState('')
  const [photo, setPhoto] = useState()
  const [label, setLabel] = useState('No file chosen')

  const onUploadPicture = (e: React.BaseSyntheticEvent): void => {
    if (e.target.files !== null && e.target.files.length !== 0) {
      const size = e.target.files[0].size / 1000 / 1000 // file size in MB
      if (size > 30) {
        alert('File exceeded 30MB')
        e.target.value = ''
        return
      }
      setPhoto(e.target.files[0])
      setLabel(e.target.files[0].name)
    }
  }

  const onParse = (res: any): void => {
    const [monSlots, tueSlots, wedSlots, thuSlots, friSlots] = parseAndReturn(res.Slots)
    setMonSlots(monSlots)
    setTueSlots(tueSlots)
    setWedSlots(wedSlots)
    setThuSlots(thuSlots)
    setFriSlots(friSlots)
    setStatus('review')
  }

  const submitImage = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault()
    if (photo === undefined || label === 'No file chosen') {
      alert('Please upload an image first!')
      return
    }
    setStatus('loading')
    uploadImage(photo).then((res) => { onParse(res) }, () => { setStatus('upload') })
  }

  const submitText = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault()
    if (text === '') {
      alert('Please paste the text first!')
      return
    }
    setStatus('loading')
    uploadText(text).then((res) => { onParse(res) }, () => { setStatus('upload') })
  }

  return (
    <div className='upload-wrapper'>
      <h1>Upload Timetable</h1>
      <div className='upload'>
        <div className='upload-text'>
          <h2>As Text</h2>
          <ol className='steps'>
            <li>Go to the Time Table tab on VTOP</li>
            <li>Scroll down to see the table with your schedule</li>
            <li>Select the text from <span>Theory</span> in the top left to <span>L94</span> in the bottom right</li>
            <li>Copy all of the selected text</li>
            <li>Paste it below </li>
            <input
              autoFocus
              type='text'
              id='input-text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <li>Submit to continue! :)</li>
            <button type='submit' onClick={submitText}>Submit Text</button>
          </ol>
        </div>

        <div className='upload-divider'>
          <div />
          <h2>OR</h2>
          <div />
        </div>

        <div className='upload-pic'>
          <h2>As Picture</h2>
          <ol className='steps'>
            <li>Go to the Time Table tab on VTOP</li>
            <li>Scroll down to see the table with your schedule</li>
            <li>Take a single screenshot that includes the entire table and save it</li>
            <li>It's preferable to take the screenshot yourself and not use one compressed through social media</li>
            <li>Upload the image below</li>
            <div className='add-file'>
              <input
                type='file'
                id='input-file'
                onChange={onUploadPicture}
                accept='.png, .jpg'
              />
              <label className='input-file-label' htmlFor='input-file'>Add Picture</label>
              <p className='file-details'>{label}</p>
            </div>
            <li>Submit to continue! :)</li>
            <button type='submit' onClick={submitImage}>Submit Picture</button>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Upload
