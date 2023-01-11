let search = document.querySelector('.sr1');
let bar = document.querySelector('.bar');
let sr = document.querySelector('.sr2');
search.addEventListener("click", function(){
    bar.classList.toggle('hide');
    sr.classList.toggle('hide');
    search.classList.toggle('hide');
});
sr.addEventListener("click", function(){
    bar.classList.toggle('hide');
    sr.classList.toggle('hide');
    search.classList.toggle('hide');
});
let menu1 = document.getElementById('menu1')
let menu2 = document.getElementById('menu2')
let menu3 = document.getElementById('menu3')
let shake1 = document.getElementById('shake1')
let shake2 = document.getElementById('shake2')
let shake3 = document.getElementById('shake3')
function test(u,v,w,x,y,z){

    x.classList.add('menu1animation')
    u.classList.add('cp')

    setTimeout(() => {
        u.classList.remove('cp')
        x.classList.remove('menu1animation')
        x.style.zIndex = 1;
        y.style.zIndex = 111;
        z.style.zIndex = 11;
        y.classList.add('menu2animation')
        v.classList.add('cp')
}, 8750);


    setTimeout(() => {
        v.classList.remove('cp')
        y.classList.remove('menu2animation')
        y.style.zIndex = 1;
        z.style.zIndex = 111;
        x.style.zIndex = 11;
        z.classList.add('menu3animation')
        w.classList.add('cp')
}, 8750 * 2);
    setTimeout(() => {
        w.classList.remove('cp')
        z.classList.remove('menu3animation')
        z.style.zIndex = 1;
        x.style.zIndex = 111;
        y.style.zIndex = 11;
    }, 8750 * 3);
}
test(shake1,shake2,shake3,menu1,menu2,menu3)
setInterval(() => {
    test(shake1,shake2,shake3,menu1,menu2,menu3)
}, 8750 * 3);
let hover1 = document.querySelector('.hover1');
let hover2 = document.querySelector('.hover2');
let hover3 = document.querySelector('.hover3');
let hover4 = document.querySelector('.hover4');
let hover5 = document.querySelector('.hover5');
let hover6 = document.querySelector('.hover6');
let hover7 = document.querySelector('.hover7');
let hover8 = document.querySelector('.hover8');
let hover = [hover1,hover2,hover3,hover4,hover5,hover6,hover7,hover8]
for (let index = 0; index < hover.length; index++) {
    const element = hover[index].getElementsByTagName('button')[0];
    element.classList.add('vis')
}
// hover 1
hover1.addEventListener('mouseover',function(){
    hover1.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover1.addEventListener('mouseout',function(){
    hover1.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 2
hover2.addEventListener('mouseover',function(){
    hover2.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover2.addEventListener('mouseout',function(){
    hover2.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 3
hover3.addEventListener('mouseover',function(){
    hover3.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover3.addEventListener('mouseout',function(){
    hover3.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 4
hover4.addEventListener('mouseover',function(){
    hover4.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover4.addEventListener('mouseout',function(){
    hover4.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 5
hover5.addEventListener('mouseover',function(){
    hover5.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover5.addEventListener('mouseout',function(){
    hover5.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 6
hover6.addEventListener('mouseover',function(){
    hover6.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover6.addEventListener('mouseout',function(){
    hover6.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 7
hover7.addEventListener('mouseover',function(){
    hover7.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover7.addEventListener('mouseout',function(){
    hover7.getElementsByTagName('button')[0].classList.toggle('vis')
})

// hover 8
hover8.addEventListener('mouseover',function(){
    hover8.getElementsByTagName('button')[0].classList.toggle('vis')
})
hover8.addEventListener('mouseout',function(){
    hover8.getElementsByTagName('button')[0].classList.toggle('vis')
})