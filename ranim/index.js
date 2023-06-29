function getfocus() {
    document.getElementById("myAnchor").focus();
}
  
function losefocus() {
    document.getElementById("myAnchor").blur();
}
let h1 = document.getElementById('test')
setInterval(() => {
    h1.classList.add('test2')
    setTimeout(() => {
        h1.classList.remove('test2')
    }, 1000);
}, 2000);
function unhide1() {
    document.getElementById('cont2').classList.remove('hide1')
}
function unhide2() {
    document.getElementById('cont3').classList.remove('hide1')
}
document.getElementById('but').disabled = true;

setInterval(() => {
    let q1 = document.getElementById('sel1').value
    let q2 = document.getElementById('sel2').value
    let q3 = document.getElementById('q3').value
    if(q1=== 'slave' && q2==='d2' && q3==='i do more'){
        document.getElementById('but').disabled = false;
    }
}, 1000);
// Function to generate random number
function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let p1 = document.getElementById('span1')
let p2 = document.getElementById('span2')
let p3 = document.getElementById('span3')
let p4 = document.getElementById('span4')
let border = document.getElementById('cont3')
setInterval(() => {
    p1.style.color = "rgb("+randomNumber(0,225)+","+randomNumber(0,225)+","+randomNumber(0,225)+")"
    p2.style.color = "rgb("+randomNumber(0,225)+","+randomNumber(0,225)+","+randomNumber(0,225)+")"
    p3.style.color = "rgb("+randomNumber(0,225)+","+randomNumber(0,225)+","+randomNumber(0,225)+")"
    p4.style.color = "rgb("+randomNumber(0,225)+","+randomNumber(0,225)+","+randomNumber(0,225)+")"
    border.style.border = '2px solid rgb('+randomNumber(0,225)+','+randomNumber(0,225)+','+randomNumber(0,225)+')'
}, 1000);

