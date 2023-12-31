let count = 0;
let container = document.getElementById('container')
let wrapper1 = document.getElementById('wrapper1')
let wrapper2 = document.getElementById('wrapper2')
let wrapper3 = document.getElementById('wrapper3')
let wrapper4 = document.getElementById('wrapper4')
let nobtn = document.getElementById('no')
function yes() {
    container.classList.add('hide')
    wrapper4.classList.remove('hide')
}
function move(){
    nobtn.style.position = 'absolute'
    var x = Math.random() * (window.innerWidth - nobtn.offsetWidth)
    var y = Math.random() * (window.innerHeight - nobtn.offsetHeight)
    nobtn.style.left = `${x}px`
    nobtn.style.top = `${y}px`
}
function fw1() {
    container.classList.add('hide')
    wrapper1.classList.remove('hide')
    setTimeout(() => {
        document.getElementById('p2').classList.remove('hidep')
    }, 2000);
    setTimeout(() => {
        container.classList.remove('hide')
        wrapper1.classList.add('hide')
    }, 4000);
    count ++
    console.log(count)
}
function fw2() {
    container.classList.add('hide')
    wrapper2.classList.remove('hide')
    setTimeout(() => {
        document.getElementById('pp2').classList.remove('hidep')
    }, 3000);
    setTimeout(() => {
        container.classList.remove('hide')
        wrapper2.classList.add('hide')
        container.classList.add('third')
    }, 6000);
    count ++
    console.log(count)
}
function fw3() {
    container.classList.add('hide')
    wrapper3.classList.remove('hide')
    setTimeout(() => {
        document.getElementById('ppp2').classList.remove('hidep')
    }, 3000);
    setTimeout(() => {
        container.classList.remove('hide')
        wrapper3.classList.add('hide')
        container.classList.remove('third')
        document.getElementById('no').setAttribute('onmouseover','move()')
    }, 6000);
    count ++
    console.log(count)
}
function no() {
    if (count === 0) {
        fw1()
    }else
    if (count === 1) {
        fw2()
    }else
    if (count === 2) {
        fw3()
    }
}

