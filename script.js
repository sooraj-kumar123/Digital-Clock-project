const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const day = document.getElementById('day')
const periodElement = document.getElementById('period');

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()
    let period = h >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    h = h % 12;  // Convert to 12-hour format (0 becomes 12)
    h = h ? h : 12; // If hour is 0 (midnight), set it to 12
    
    // Add leading zero if needed
    h = h < 10 ? '0' + h : h;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    
    // Display the time
    console.log(h + ':' + min + ':' + sec + ' ' + period);
    

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h
    minute.textContent = min
    second.innerText = sec
    periodElement.innerText = period;
})
