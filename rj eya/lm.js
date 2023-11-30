let metro1= document.getElementById('metro1')
let metro2= document.getElementById('metro2')
let metro4= document.getElementById('metro4')
let metro5= document.getElementById('metro5')
let metro6= document.getElementById('metro6')
let btn = document.getElementById('sub')
let ifr = document.getElementById('ifr')
setInterval(() => {
  if(metro1.checked || metro2.checked || metro4.checked || metro5.checked || metro6.checked){
    if(btn.hasAttribute('disabled')){
      btn.removeAttribute('disabled')
    }
  }else{
      btn.setAttribute('disabled',true)
      ifr.classList.add('hide')
  }
}, 1000);
function unhide() {
  ifr.classList.remove('hide')
}
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);
});