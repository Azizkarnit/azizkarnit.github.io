let ifr = document.getElementById('ifr')
let btn = document.getElementById('sub')
let nord = document.getElementById('nord')
let sud = document.getElementById('sud')

document.getElementById("abn-train").addEventListener("click", function() {
    var selectedValue = document.getElementById("abn-train").value;
    let select1 = document.getElementById('sl2')
    let select2 = document.getElementById('sl3')
    if (selectedValue == 'ul') {
        select1.classList.remove('hide')
        select2.classList.add('hide')
        btn.removeAttribute('disabled')
    }
    if (selectedValue == 'dl') {
        btn.removeAttribute('disabled')
        select2.classList.remove('hide')
        select1.classList.add('hide')
    }
});
function unhide() {
    ifr.classList.remove('hide')
  }
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
  });
  document.getElementById("reset").addEventListener("click", function() {
    ifr.classList.add('hide')
    document.getElementById('sl2').classList.add('hide')
    document.getElementById('sl3').classList.add('hide')
    document.getElementById('sub').setAttribute('disabled',true)
    document.getElementById("str").setAttribute('selected',true)
});