document.getElementById("depart").addEventListener("click", function() {
    var selectedValue = document.getElementById("depart").value;
    let select1 = document.getElementById('sel2')
    if (selectedValue != 'depart') {
        select1.classList.remove('hide')
        document.getElementById('sub').removeAttribute('disabled')
    }
});
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
  });
function unhide() {
    ifr.classList.remove('hide')
  }

document.getElementById("reset").addEventListener("click", function() {
    ifr.classList.add('hide')
    document.getElementById('sel2').classList.add('hide')
    document.getElementById('sub').setAttribute('disabled',true)
    document.getElementById("str").setAttribute('selected',true)
});