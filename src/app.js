const mon = document.querySelectorAll('.mon')[0]
const tue = document.querySelectorAll('.tue')[0]
const wed = document.querySelectorAll('.wed')[0]
const thu = document.querySelectorAll('.thu')[0]
const fri = document.querySelectorAll('.fri')[0]
const sat = document.querySelectorAll('.sat')[0]
const sun = document.querySelectorAll('.sun')[0]
const main = document.querySelectorAll('.main')[0]
const upload = document.querySelectorAll('.upload1')[0]
const change = document.querySelectorAll('.upload4')[0]
const logout = document.querySelectorAll('.upload6')[0]
const courseName = {
  CSE1003: 'Digital Logic and Design',
  CSE1004: 'Network and Communication',
  CSE1007: 'Java Programming',
  CSE2001: 'Computer Architecture and Organization',
  CSE2004: 'Database Management Systems',
  CSE2005: 'Operating Systems',
  CSE2006: 'Microprocessor and Interfacing',
  CSE2011: 'Data Structures and Algorithms',
  CSE2012: 'Design and Analysis of Algorithms',
  CSE2013: 'Theory of Computation',
  CSE3001: 'Software Engineering',
  CSE3002: 'Internet and Web Programming',
  CSE4001: 'Parallel and Distributed Computing',
  EEE1001: 'Basic Electrical and Electronics Engineering',
  MAT1014: 'Discrete Mathematics and Graph Theory',
  MAT3004: 'Applied Linear Algebra',
  CSE1006: 'Blockchain and Cryptocurrency Technologies',
  CSE2014: 'Compiler Design',
  CSE3006: 'Embedded System Design',
  CSE3009: 'Internet of Things',
  CSE3011: 'Robotics and its Applications',
  CSE3013: 'Artificial Intelligence',
  CSE3016: 'Computer Graphics and Multimedia',
  CSE3018: 'Content Based Image and Video Retrieval',
  CSE3020: 'Data Visualization',
  CSE3021: 'Social and Information Networks',
  CSE3024: 'Web Mining',
  CSE3025: 'Large Scale Data Processing',
  CSE3029: 'Game Programming',
  CSE3035: 'Principles of Cloud Computing',
  CSE3501: 'Information Security Analysis and Audit',
  CSE3502: 'Information Security Management',
  CSE4003: 'Cyber Security',
  CSE4004: 'Digital Forensics',
  CSE4011: 'Virtualization',
  CSE4014: 'High Performance Computing',
  CSE4015: 'Human Computer Interaction',
  CSE4019: 'Image Processing',
  CSE4020: 'Machine Learning',
  CSE4022: 'Natural Language Processing',
  CSE4027: 'Mobile Programming',
  CSE4028: 'Object Oriented Software Development',
  MAT2002: 'Applications of Differential and Difference Equations',
  CHY1701: 'Engineering Chemistry',
  CSE1001: 'Problem Solving and Programming',
  CSE1002: 'Problem Solving and Object Oriented Programming',
  CSE1901: 'Technical Answers for Real World Problems (TARP)',
  CSE1902: 'Industrial Internship',
  CSE1903: 'Comprehensive Examination',
  CSE1904: 'Capstone Project',
  ENG1901: 'Technical English - I',
  ENG1902: 'Technical English - II',
  ENG1903: 'Advanced Technical English',
  HUM1021: 'Ethics and Values',
  MAT1011: 'Calculus for Engineers',
  MAT2001: 'Statistics for Engineers',
  MGT1022: 'Lean Start-up Management',
  PHY1701: 'Engineering Physics',
  PHY1901: 'Introduction to Innovative Projects',
  FLC4097: 'Foreign Language Course Basket',
  ESP1001: 'ESPANOL FUNDAMENTAL',
  ESP2001: 'ESPANOL INTERMEDIO',
  FRE1001: 'Francais quotidien',
  FRE2001: 'Francais progressif',
  GER1001: 'Grundstufe Deutsch',
  GER2001: 'Mittelstufe Deutsch',
  GRE1001: 'Modern Greek',
  JAP1001: 'Japanese for Beginners',
  RUS1001: 'Russian for Beginners',
  STS1001: 'Introduction to Soft Skills',
  STS1002: 'Introduction to Business Communication',
  STS1101: 'Fundamentals of Aptitude',
  STS1102: 'Arithmetic Problem Solving',
  STS1201: 'Introduction to Problem Solving',
  STS1202: 'Introduction to Quantitative, Logical and Verbal Ability',
  STS2001: 'Reasoning Skill Enhancement',
  STS2002: 'Introduction to Etiquette - SS',
  STS2101: 'Getting Started to Skill Enhancement - SS',
  STS2102: 'Enhancing Problem Solving Skills - SS',
  STS2201: 'Numerical Ability and Cognitive Intelligence - SS',
  STS2202: 'Advanced Aptitude and Reasoning Skills - SS',
  STS3001: 'Preparedness for External Opportunities - SS',
  STS3004: 'Data Structures and Algorithms',
  STS3005: 'Code Mithra',
  STS3006: 'Preparedness for External Opportunities - SS',
  STS3007: 'Preparedness for Career Opportunities - SS',
  STS3101: 'Introduction to Programming Skills - SS',
  STS3104: 'Enhancing Programming Ability - SS',
  STS3105: 'Computational Thinking - SS',
  STS3201: 'Programming Skills for Employment - SS',
  STS3204: 'JAVA Programming and Software Engineering Fundamentals - SS',
  STS3205: 'Advanced JAVA Programming - SS',
  STS3301: 'JAVA for Beginners - SS',
  STS3401: 'Foundation to Programming Skills - SS',
  STS5002: 'Preparing for Industry - SS',
  CHY1002: 'Environmental Sciences',
  ENG1000: 'Foundation English - I',
  ENG2000: 'Foundation English - II',
  EXC4097: 'Co-Extra Curricular Basket',
  EXC1001: 'Service to the Society',
  EXC1002: 'Youth Red Cross - ECA',
  // EXC1002: 'Red Cross - ECA',
  EXC1003: 'ABCD-AnyBody Can Dance - ECA',
  EXC1004: 'Entrepreneurs Cell - ECA',
  // EXC1004: 'Building Entrepreneurship Competencies and Skills - ECA',
  EXC1005: 'Energy and Environmental Protection Club - ECA',
  EXC1006: 'Music - The Art of Culture - ECA',
  EXC1007: 'Sports for Healthy Life - ECA',
  EXC1008: 'Instrumentation for Engineers - ECA',
  EXC1009: 'Debating Skills - ECA',
  EXC1010: 'Mobility Engineering- Land, Air and Sea - ECA',
  EXC1011: 'Skills in Competitive Coding - ECA',
  EXC1012: 'Basics of Space Sciences - ECA',
  EXC1013: 'Roadmap to a Connected World - ECA',
  EXC1014: 'Dramatics Club - ECA',
  // EXC1014: 'The Art of Acting - ECA',
  EXC1016: 'ASCE - VIT Student Chapter - ECA',
  EXC1017: 'Health Club - ECA',
  // EXC1017: 'Health and Wellness - ECA',
  EXC1018: 'IETE - Student Chapter - ECA',
  // EXC1018: 'Electronics and Telecommunication for Skill Development - ECA',
  EXC1019: 'The Fine Arts Club - ECA',
  // EXC1019: 'Basic Art and Craft Techniques - ECA',
  EXC1020: 'Skills on Creativity - ECA',
  EXC1021: 'Computer Society of India',
  // EXC1021: 'Computer in Society - ECA',
  EXC1023: 'Hindi Literary Association - ECA',
  // EXC1023: 'Hindi Arts and Literature - ECA',
  EXC1025: 'Toastmasters International - VIT Chapter - ECA',
  EXC1027: 'Power and Energy for Societal Development - ECA',
  EXC1028: 'VIT Community Radio - ECA',
  EXC1030: 'Make a Difference - ECA',
  // EXC1030: 'Child Empowerment and Development - ECA',
  EXC1032: 'Fifth Pillar - ECA',
  // EXC1032: 'Building Blocks of Democracy - ECA',
  EXC1033: 'Robotics for Engineers - ECA',
  EXC1034: 'Techloop - ECA',
  EXC1035: 'Association for Computing Machinery - ECA',
  // EXC1035: 'Computing in Science and Engineering - ECA',
  EXC1049: 'Innovation for Engineering Applications - ECA',
  EXC1054: 'The Art and Skills of Photography - ECA',
  EXC1061: 'Skill Development in Manufacturing - ECA',
  EXC1068: 'Discussion through Media - ECA',
  EXC1069: 'Fep-Si - ECA',
  EXC1070: 'Working to Engineer a Better World - ECA',
  EXC1071: 'Culinary Crusade - ECA',
  EXC1072: 'VIT Film Society - ECA',
  // EXC1072: 'The Art and Skills of Film Making - ECA',
  EXC1073: 'Women Engineers and Society - ECA',
  // EXC1075: 'The Institution of Engineers (India) - ECA',
  EXC1075: 'ENGINEERING SKILLSET - ECA',
  EXC1076: 'Tamil Arts and Literature - ECA',
  EXC1077: 'National Cadet Corps (NCC) - ECA',
  EXC1078: 'VIT Spartans - ECA',
  // EXC1078: 'Learning with Spartans - ECA',
  EXC1079: 'Anokha - ECA',
  // EXC1079: 'Inception of Change - ECA',
  EXC1080: 'American Society of Mechanical Engineers - ECA',
  EXC1081: 'Open Source Development for Google Applications',
  EXC1082: 'Telugu Literary Association - ECA',
  EXC1083: 'Mozilla Firefox - ECA',
  // EXC1083: 'Open Source User Interface - ECA',
  EXC1084: 'Apple Developers Group - ECA',
  // EXC1084: 'IOS Platform - ECA',
  EXC1085: 'Technology And Gaming Club (TAG) - ECA',
  EXC1087: 'Engineering in Medicine and Biology - ECA',
  EXC1088: 'Energy for Societal Development - ECA',
  EXC1090: 'Economic Development and Commercial Sciences - ECA',
  EXC1095: 'Skills in Financial Investment - ECA',
  EXC1097: 'Practical Fundamentals of Chemical Engineering - ECA',
  EXC1100: 'Experiential Learning of Energy Engineers - ECA',
  EXC1101: 'Mathsomania - ECA',
  EXC1102: 'Art of Research and Publication - ECA',
  EXC1107: 'Skills on Chemical Engineering - ECA',
  EXC1110: 'Engineering for Industrial Applications - ECA',
  EXC1111: 'TechEd - ECA',
  EXC1112: 'Research for Biotechnology - ECA',
  EXC1114: 'Communication in Technology and Networking - ECA',
  EXC1120: 'Creativity Club - ECA',
  EXC1121: 'Social Entrepreneurship - ECA',
  EXC1124: 'Humanitarian Service - ECA',
  EXC1127: 'Debating on Internal Issues - ECA',
  EXC1129: 'Uddeshya - ECA',
  // EXC1129: 'Peer Educator Training Programme - ECA',
  EXC1132: 'The way of Living - ECA',
  EXC1134: 'Child Care and Education - ECA',
  EXC1135: 'Kannada Arts and Literature - ECA',
  EXC1157: 'Trekking Club - ECA'
  // EXC4097: 'Extra Curricular'
}
const mon1 = {
  A1: '08:00',
  L1: '08:00',
  F1: '09:00',
  // L2: '08:45',
  D1: '10:00',
  L3: '10:00',
  TB1: '11:00',
  // L4: '10:45',
  TG1: '12:00',
  L5: '11:30',
  // L6: '12:15',
  A2: '14:00',
  L31: '14:00',
  F2: '15:00',
  // L32: '14:45',
  D2: '16:00',
  L33: '16:00',
  TB2: '17:00',
  // L34: '16:45',
  TG2: '18:00',
  L35: '17:30',
  V3: '19:00'
  // L36: '18:15'
}
const tue1 = {
  B1: '08:00',
  L7: '08:00',
  G1: '09:00',
  // L8: '08:45',
  E1: '10:00',
  L9: '10:00',
  TC1: '11:00',
  // L10: '10:45',
  TAA1: '12:00',
  L11: '11:30',
  // L12: '12:15',
  B2: '14:00',
  L37: '14:00',
  G2: '15:00',
  // L38: '14:45',
  E2: '16:00',
  L39: '16:00',
  TC2: '17:00',
  // L40: '16:45',
  TAA2: '18:00',
  L41: '17:30',
  V4: '19:00'
  // L42: '18:15'
}
const wed1 = {
  C1: '08:00',
  L13: '08:00',
  A1: '09:00',
  // L14: '08:45',
  F1: '10:00',
  L15: '10:00',
  V1: '11:00',
  // L16: '10:45',
  V2: '12:00',
  L17: '11:30',
  // L18: '12:15',
  C2: '14:00',
  L43: '14:00',
  A2: '15:00',
  // L44: '14:45',
  F2: '16:00',
  L45: '16:00',
  TD2: '17:00',
  // L46: '16:45',
  TBB2: '18:00',
  L47: '17:30',
  V5: '19:00'
  // L48: '18:15'
}
const thu1 = {
  D1: '08:00',
  L19: '08:00',
  B1: '09:00',
  // L20: '08:45',
  G1: '10:00',
  L21: '10:00',
  TE1: '11:00',
  // L22: '10:45',
  TCC1: '12:00',
  L23: '11:30',
  // L24: '12:15',
  D2: '14:00',
  L49: '14:00',
  B2: '15:00',
  // L50: '14:45',
  G2: '16:00',
  L51: '16:00',
  TE2: '17:00',
  // L52: '16:45',
  TCC2: '18:00',
  L53: '17:30',
  V6: '19:00'
  // L54: '18:15'
}
const fri1 = {
  E1: '08:00',
  L25: '08:00',
  C1: '09:00',
  // L26: '08:45',
  TA1: '10:00',
  L27: '10:00',
  TF1: '11:00',
  // L28: '10:45',
  TD1: '12:00',
  L29: '11:30',
  // L30: '12:15',
  E2: '14:00',
  L55: '14:00',
  C2: '15:00',
  // L56: '14:45',
  TA2: '16:00',
  L57: '16:00',
  TF2: '17:00',
  // L58: '16:45',
  TDD2: '18:00',
  L59: '17:30',
  V7: '19:00'
  // L60: '18:15'
}
window.onload = function () {
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  window.console.log(monday)
  window.console.log(tuesday)
  window.console.log(wednesday)
  window.console.log(thursday)
  window.console.log(friday)
  let text = ''
  for (let i = 0; i < monday.length; i++) {
    const stime = mon1[monday[i].Slot]
    const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (monday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 90)
    } else {
      time1 = addMinutes(time, 45)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[monday[i].Course_Name] === undefined) {
      course = monday[i].Course_Name
    } else {
      course = courseName[monday[i].Course_Name]
    }
    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont1">${monday[i].Slot}</div>
        <div class="detcont2">${monday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
      document.querySelector('.upload').remove()
    }
  }
  for (let j = 0; j < monday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
          courseName[result.Slots[0].Course_Name]
          document.querySelectorAll('.detcont1')[j].innerHTML =
            result.Slots[0].Slot
          document.querySelectorAll('.detcont2')[j].innerHTML =
            result.Slots[0].Venue
          monday[j] = result.Slots[0]
          console.log(monday)
          window.localStorage.setItem('monday', JSON.stringify(monday))
        })
        .catch((error) => console.log('error', error))
    })
  }
}

function remove () {
  mon.removeAttribute('id')
  tue.removeAttribute('id')
  wed.removeAttribute('id')
  thu.removeAttribute('id')
  fri.removeAttribute('id')
  sat.removeAttribute('id')
  sun.removeAttribute('id')
}

mon.addEventListener('click', function () {
  remove()
  mon.id = 'special'
  const monday = JSON.parse(window.localStorage.getItem('monday'))
  let text = ''
  for (let i = 0; i < monday.length; i++) {
    const stime = mon1[monday[i].Slot]
    const time = new Date('April 1 2021 ' + mon1[monday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (monday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 90)
    } else {
      time1 = addMinutes(time, 45)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[monday[i].Course_Name] === undefined) {
      course = monday[i].Course_Name
    } else {
      course = courseName[monday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${monday[i].Slot}</div>
        <div class="detcont">${monday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
  for (let j = 0; j < monday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
          courseName[result.Slots[0].Course_Name]
          monday[j] = result.Slots[0]
          console.log(monday)
          window.localStorage.setItem('monday', JSON.stringify(monday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
tue.addEventListener('click', function () {
  remove()
  tue.id = 'special'
  const tuesday = JSON.parse(window.localStorage.getItem('tuesday'))
  let text = ''
  for (let i = 0; i < tuesday.length; i++) {
    const stime = tue1[tuesday[i].Slot]
    const time = new Date('April 1 2021 ' + tue1[tuesday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (tuesday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 90)
    } else {
      time1 = addMinutes(time, 45)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[tuesday[i].Course_Name] === undefined) {
      course = tuesday[i].Course_Name
    } else {
      course = courseName[tuesday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${tuesday[i].Slot}</div>
        <div class="detcont">${tuesday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
  for (let j = 0; j < tuesday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
          courseName[result.Slots[0].Course_Name]
          tuesday[j] = result.Slots[0]
          console.log(tuesday)
          window.localStorage.setItem('tuesday', JSON.stringify(tuesday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
wed.addEventListener('click', function () {
  remove()
  wed.id = 'special'
  const wednesday = JSON.parse(window.localStorage.getItem('wednesday'))
  let text = ''
  for (let i = 0; i < wednesday.length; i++) {
    const stime = wed1[wednesday[i].Slot]
    const time = new Date('April 1 2021 ' + wed1[wednesday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (wednesday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 90)
    } else {
      time1 = addMinutes(time, 45)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[wednesday[i].Course_Name] === undefined) {
      course = wednesday[i].Course_Name
    } else {
      course = courseName[wednesday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${wednesday[i].Slot}</div>
        <div class="detcont">${wednesday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
  for (let j = 0; j < wednesday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
          courseName[result.Slots[0].Course_Name]
          wednesday[j] = result.Slots[0]
          console.log(wednesday)
          window.localStorage.setItem('wednesday', JSON.stringify(wednesday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
thu.addEventListener('click', function () {
  remove()
  thu.id = 'special'
  const thursday = JSON.parse(window.localStorage.getItem('thursday'))
  let text = ''
  for (let i = 0; i < thursday.length; i++) {
    const stime = thu1[thursday[i].Slot]
    const time = new Date('April 1 2021 ' + thu1[thursday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (thursday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 90)
    } else {
      time1 = addMinutes(time, 45)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[thursday[i].Course_Name] === undefined) {
      course = thursday[i].Course_Name
    } else {
      course = courseName[thursday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${thursday[i].Slot}</div>
        <div class="detcont">${thursday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
  for (let j = 0; j < thursday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
          courseName[result.Slots[0].Course_Name]
          thursday[j] = result.Slots[0]
          console.log(thursday)
          window.localStorage.setItem('thursday', JSON.stringify(thursday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
fri.addEventListener('click', function () {
  remove()
  fri.id = 'special'
  const friday = JSON.parse(window.localStorage.getItem('friday'))
  let text = ''
  for (let i = 0; i < friday.length; i++) {
    const stime = fri1[friday[i].Slot]
    const time = new Date('April 1 2021 ' + fri1[friday[i].Slot] + ':00')
    const addMinutes = function (dt, minutes) {
      return new Date(dt.getTime() + minutes * 60000)
    }
    let time1
    if (friday[i].Course_type === 'Lab') {
      time1 = addMinutes(time, 90)
    } else {
      time1 = addMinutes(time, 45)
    }
    const eth = time1.getHours()
    const rep = time1.getMinutes().toString().length % 2
    let etm = ''
    if (rep === 1) {
      etm = '0' + time1.getMinutes().toString()
    } else {
      etm = time1.getMinutes().toString()
    }
    const etime = eth.toString() + ':' + etm
    const fintime = stime.toString() + ' - ' + etime
    let course
    if (courseName[friday[i].Course_Name] === undefined) {
      course = friday[i].Course_Name
    } else {
      course = courseName[friday[i].Course_Name]
    }

    text =
      text +
      `
  <div class="main1">
  <div class="details">
      <div class="name">${course}</div>
      <div class="time">${fintime}</div>
      <div class="det">
        <div class="detcont">${friday[i].Slot}</div>
        <div class="detcont">${friday[i].Venue}</div>
      </div>
  </div>
  <div class="edit">Edit</div>
</div>
  `
  }
  main.innerHTML = text
  if (window.localStorage.getItem('found') !== null) {
    if (window.localStorage.getItem('found') === 'true') {
      console.log(document.querySelectorAll('.edit'))
      document.querySelectorAll('.edit').forEach(function (a) {
        a.remove()
      })
      document.querySelectorAll('.details').forEach(function (a) {
        a.style.width = '100%'
        a.style.marginRight = '20px'
      })
    }
  }
  for (let j = 0; j < friday.length; j++) {
    document.querySelectorAll('.edit')[j].addEventListener('click', () => {
      const det = window.prompt('Enter details')
      console.log(det)
      const myHeaders = new Headers()
      myHeaders.append('Accept', 'application/json')
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

      const urlencoded = new URLSearchParams()
      urlencoded.append('request', det)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      }

      fetch('http://13.233.74.155/uploadtext/', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          document.querySelectorAll('.name')[j].innerHTML =
          courseName[result.Slots[0].Course_Name]
          friday[j] = result.Slots[0]
          console.log(friday)
          window.localStorage.setItem('friday', JSON.stringify(friday))
        })
        .catch((error) => console.log('error', error))
    })
  }
})
sat.addEventListener('click', function () {
  remove()
  sat.id = 'special'
  main.innerHTML =
  `
  <div class="holiday">
  <div class="bold">
    No classes today!
  </div>
  Up for some Valorant grind?
  </div>
  `
})
sun.addEventListener('click', function () {
  remove()
  sun.id = 'special'
  main.innerHTML =
  `
  <div class="holiday">
  <div class="bold">
    No classes today!
  </div>
  Up for some Valorant grind?
  </div>
  `
})

upload.addEventListener('click', function () {
  window.chrome.runtime.sendMessage('upload-data', (response) => {
    console.log('uploaded data ', response)
    if (window.localStorage.getItem('found') !== null) {
      if (window.localStorage.getItem('found') === 'true') {
        console.log(document.querySelectorAll('.edit'))
        document.querySelectorAll('.edit').forEach(function (a) {
          a.remove()
        })
        document.querySelectorAll('.details').forEach(function (a) {
          a.style.width = '100%'
          a.style.marginRight = '20px'
        })
        document.querySelector('.upload').remove()
      }
    }
  })
})

change.addEventListener('click', function () {
  window.localStorage.setItem('found', 'false')
  window.localStorage.removeItem('monday')
  window.localStorage.removeItem('tuesday')
  window.localStorage.removeItem('wednesday')
  window.localStorage.removeItem('thursday')
  window.localStorage.removeItem('friday')
  window.chrome.runtime.sendMessage('delete-data', (response) => {
    console.log('deleted data ', response)
    window.location.assign('instructions.html')
  })
})

logout.addEventListener('click', function () {
  window.localStorage.removeItem('uid')
  window.chrome.runtime.sendMessage('logout', (response) => {
    console.log('Logged out ', response)
    if (response === 'successfully') {
      window.location.assign('popup.html')
    }
  })
})
