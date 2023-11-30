document.getElementById("abn-train").addEventListener("click", function() {
    var selectedValue = document.getElementById("abn-train").value;
    let select1 = document.getElementById('sl2')
    let select2 = document.getElementById('sl3')
    if (selectedValue == 'ul') {
        select1.classList.remove('hide')
        select2.classList.add('hide')
    }
    if (selectedValue == 'dl') {
        select2.classList.remove('hide')
        select1.classList.add('hide')
    }
});
