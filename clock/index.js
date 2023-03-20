let second = document.getElementById('second')
let minute = document.getElementById('minute')
let heure = document.getElementById('heure')
let time = document.getElementById('time')
function padWithLeadingZeros(num,totalLength){
    return String(num).padStart(totalLength,'0')
}
const date = new Date()
let s = date.getSeconds()
let m = date.getMinutes()
let h = date.getHours()
setInterval(() => {
    time.innerHTML = padWithLeadingZeros(h,2)+';'+padWithLeadingZeros(m,2)+';'+padWithLeadingZeros(s,2)
    console.log(padWithLeadingZeros(h,2)+';'+padWithLeadingZeros(m,2)+';'+padWithLeadingZeros(s,2))
    second.style.rotate = 6*s.toString()+'deg'
    minute.style.rotate = 6*m.toString()+'deg'
    heure.style.rotate = 30*h.toString()+'deg'
// ****************************************
    s += 1
    if(s==60){
        m += 1
        s=0
    }
    if(m === 60){
        h += 1
        m = 0
    }
    if(h === 24){
        h=0
    }
}, 1000);
document.getElementById('mybutt').onclick = function(){
    let test = document.getElementById('mytime').value;
    h = Number(test.slice(0,2))
    m = Number(test.slice(3,5))
}