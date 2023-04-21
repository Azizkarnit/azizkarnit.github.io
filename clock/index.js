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
    // console.log(padWithLeadingZeros(h,2)+';'+padWithLeadingZeros(m,2)+';'+padWithLeadingZeros(s,2))
    second.style.rotate = 6*s.toString()+'deg'
    minute.style.rotate = 6*m.toString()+'deg'
    heure.style.rotate = 30*h.toString()+'deg'
// ****************************************
    s += 1
    if(s === 60){
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
document.getElementById('sub').onclick = function(){
    let test = document.getElementById('mytime').value;
    h = Number(test.slice(0,2))
    m = Number(test.slice(3,5))
}
document.getElementById('res').onclick = function(){
    let test = document.getElementById('mytime').value;
    s = date.getSeconds()
    m = date.getMinutes()
    h = date.getHours()
}
document.getElementById('calc').onclick = function(){
    let select_value = document.getElementById('select').value;
    let input_type_1 = document.getElementById('selec_time1').value;
    let input_type_2 = document.getElementById('selec_time2').value;
    let input_value_1 = document.getElementById('input1').value;
    let input_value_2 = document.getElementById('input2').value;
    if(input_type_1 === 'default' || input_type_2 == 'default'){
        document.getElementById('select_value').innerText = 'choose your time type'
    }
    else{
        if(input_type_1 === 'houre'){
            res1 = input_value_1 * 3600
        }
        else if(input_type_1 === 'minute'){
            res1 = input_value_1 * 60
        }
        else{
            res1 = input_value_1 * 1
        }
        if(input_type_2 === 'houre'){
            res2 = input_value_2 * 3600
        }
        else if(input_type_2 === 'minute'){
            res2 = input_value_2 * 60
        }
        else{
            res2 = input_value_2 * 1
        }
        if(select_value === '+'){
            res3 = res1 + res2
            h1 = parseInt(res3 / 3600)
            m1 = parseInt((res3 % 3600)/60)
            s1 = parseInt((res3 % 3600)%60)
            document.getElementById('select_value').innerText = '=' + h1 + 'h ;' + m1 + 'min ;' + s1 + 'sec'
        }
        else{
            res3 = res1 - res2
            h1 = parseInt(res3 / 3600)
            m1 = parseInt((res3 % 3600)/60)
            s1 = parseInt((res3 % 3600)%60)
            document.getElementById('select_value').innerText = '=' + h1 + 'h ;' + m1 + 'min ;' + s1 + 'sec'
        }
    }
    
}