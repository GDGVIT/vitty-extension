export {}

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create('upcomingclass', {
    title: 'You have an upcoming class in 5 mins!',
    type: 'basic',
    message: alarm.name.slice(2),
    iconUrl: './logo.png',
    priority: 2
  })
})
