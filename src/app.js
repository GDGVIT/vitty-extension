const mon = document.querySelectorAll('.mon')[0]
const tue = document.querySelectorAll('.tue')[0]
const wed = document.querySelectorAll('.wed')[0]
const thu = document.querySelectorAll('.thu')[0]
const fri = document.querySelectorAll('.fri')[0]
const sat = document.querySelectorAll('.sat')[0]
const sun = document.querySelectorAll('.sun')[0]
const main = document.querySelectorAll('.main')[0]

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
  main.innerHTML =
  `
  <div class="main1">
  <div class="details">
      <div class="name">Java Programming</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
<div class="main1" id="special1">
  <div class="details">
      <div class="name">Python Programming</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
<div class="main1">
  <div class="details">
      <div class="name">C Programming</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
})
tue.addEventListener('click', function () {
  remove()
  tue.id = 'special'
  main.innerHTML =
  `
  <div class="main1">
  <div class="details">
      <div class="name">Java</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
<div class="main1" id="special1">
  <div class="details">
      <div class="name">Python</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
<div class="main1">
  <div class="details">
      <div class="name">C</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
})
wed.addEventListener('click', function () {
  remove()
  wed.id = 'special'
  main.innerHTML =
  `
  <div class="main1">
  <div class="details">
      <div class="name">hello</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
<div class="main1" id="special1">
  <div class="details">
      <div class="name">world</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
<div class="main1">
  <div class="details">
      <div class="name">how</div>
      <div class="time">8:00 AM - 8:40 AM</div>
  </div>
  <div class="arrow"><img src="../images/Vector.svg" alt="dropdown arrow" class="src"></div>
</div>
  `
})
thu.addEventListener('click', function () {
  remove()
  thu.id = 'special'
  main.innerHTML = ''
})
fri.addEventListener('click', function () {
  remove()
  fri.id = 'special'
  main.innerHTML = ''
})
sat.addEventListener('click', function () {
  remove()
  sat.id = 'special'
  main.innerHTML = ''
})
sun.addEventListener('click', function () {
  remove()
  sun.id = 'special'
  main.innerHTML = ''
})
