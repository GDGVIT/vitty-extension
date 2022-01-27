import React from 'react'
import './../styles/LoggedIn.css'

const Upload: React.FC = (): JSX.Element => {
  const handleClick = (): void => {
    const newURL = 'https://vitty.dscvit.com'
    void chrome.tabs.create({ url: newURL, active: true })
  }
  return (
    <div className='upload-wrapper'>
      <h1>Timetable Missing!</h1>
      <div className='upload'>
        <h2>Please upload your timetable on <span onClick={handleClick}>vitty.dscvit.com</span></h2>
      </div>
    </div>
  )
}

export default Upload
