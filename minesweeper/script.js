// Initialize an empty array to store generated numbers
const generatedNumbers = [];

function getRandomUniqueNumber(min, max) {
  if (generatedNumbers.length === max - min + 1) {
    // All possible numbers have been generated
    return null; // Return null to indicate that there are no more unique numbers
  }

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (generatedNumbers.includes(randomNumber));

  // Add the generated number to the array
  generatedNumbers.push(randomNumber);
  return randomNumber;
}

// Example usage:
for (let i = 0; i <= 99; i++) {
  const randomNum = getRandomUniqueNumber(1, 480);
    document.getElementById(`num${randomNum}`).classList.add('red');
};
for (let i = 1; i <= 480; i++) {
    let num = document.getElementById(`num${i}`);
    if(num.classList.contains('red') == false){
        num.classList.add('grey')
    }
    num.classList.add('number')

}
let array1 = [31,61,91,121,151,181,211,241,271,301,331,361,391,421];
let array2 = [60,90,120,150,180,210,240,270,300,330,360,390,420,450];
for (let i = 1; i <= 480; i++) {
    let element = document.getElementById(`num${i}`);
    if(element.classList.contains('red') == false){
        let s = 0;
        if(i==1){
            if (document.getElementById(`num2`).classList.contains('red')) {
                s++;
            };
            if (document.getElementById(`num32`).classList.contains('red')) {
                s++
            };
            if (document.getElementById(`num31`).classList.contains('red')) {
                s++
            };
            if (s != 0) {
                document.getElementById('num1').innerHTML = `<span>${s}</span>`
            };
        };if(2<= i <= 29){
            for (let j = 2; j <= 29; j++) {
                if(document.getElementById(`num${j}`).classList.contains('red') == false){
                    let s = 0;
                    if(document.getElementById(`num${j+1}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j+29}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j+30}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j+31}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j-1}`).classList.contains('red')){
                        s++
                    };
                    if (s != 0) {
                        document.getElementById(`num${j}`).innerHTML = `<span>${s}</span>`
                    };  
                }
            }
        };if(i == 30){
            if (document.getElementById(`num29`).classList.contains('red')) {
                s++;
            };
            if (document.getElementById(`num59`).classList.contains('red')) {
                s++
            };
            if (document.getElementById(`num60`).classList.contains('red')) {
                s++
            };
            if (s != 0) {
                document.getElementById('num30').innerHTML = `<span>${s}</span>`
            };
        };if (array1.includes(i)) {

            const adjacentIds = [i + 31, i + 30, i + 1, i - 29, i - 30];
            for (const id of adjacentIds) {
              const adjacentElement = document.getElementById(`num${id}`);
              if (adjacentElement && adjacentElement.classList.contains('red')) {
                s++;
              }
            }
            if (s != 0) {
                document.getElementById(`num${i}`).innerHTML = `<span>${s}</span>`
            };
        };if (i == 451) {
            if (document.getElementById(`num421`).classList.contains('red')) {
                s++;
            };
            if (document.getElementById(`num422`).classList.contains('red')) {
                s++
            };
            if (document.getElementById(`num452`).classList.contains('red')) {
                s++
            };
            if (s != 0) {
                document.getElementById('num451').innerHTML = `<span>${s}</span>`
            };
        };if (452 <= i <= 479) {
            for (let j = 452; j <= 479; j++) {
                if(document.getElementById(`num${j}`).classList.contains('red') == false){
                    let s = 0;
                    if(document.getElementById(`num${j+1}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j-29}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j-30}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j-31}`).classList.contains('red')){
                        s++
                    };
                    if(document.getElementById(`num${j-1}`).classList.contains('red')){
                        s++
                    };
                    if (s != 0) {
                        document.getElementById(`num${j}`).innerHTML = `<span>${s}</span>`
                    };  
                }
            }
        };if(i==480){
            if (document.getElementById(`num479`).classList.contains('red')) {
                s++;
            };
            if (document.getElementById(`num449`).classList.contains('red')) {
                s++
            };
            if (document.getElementById(`num450`).classList.contains('red')) {
                s++
            };
            if (s != 0) {
                document.getElementById('num480').innerHTML = `<span>${s}</span>`
            };
        };if (array2.includes(i)) {
            const adjacentIds = [i - 31, i - 30, i - 1, i + 29, i + 30];
            for (const id of adjacentIds) {
                const adjacentElement = document.getElementById(`num${id}`);
                if (adjacentElement && adjacentElement.classList.contains('red')) {
                    s++;
                }
            }
            if (s != 0) {
                element.innerHTML = `<span>${s}</span>`;
            }
        };if(32 <= i <= 449){
            for (let j = 32; j <= 449; j++) {

                if (array2.includes(j)==false && array1.includes(j)==false) {
                    if(document.getElementById(`num${j}`).classList.contains('red') == false){
                        let s = 0;
                        if(document.getElementById(`num${j+1}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j-29}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j+29}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j-30}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j+30}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j-31}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j+31}`).classList.contains('red')){
                            s++
                        };
                        if(document.getElementById(`num${j-1}`).classList.contains('red')){
                            s++
                        };
                        if (s != 0) {
                            document.getElementById(`num${j}`).innerHTML = `<span>${s}</span>`
                        };
                    }      
                }
            }
            
        }
    }
};
for (let i = 1; i <= 480; i++) {
    let cover = '<span class="cover" onclick="hide(this)""></span>'
    document.getElementById(`num${i}`).innerHTML += cover   
}

let hasRun = false;

// function runOnce(end) {
//     if (!hasRun) {
//     // Your code to run once goes here
//     var timer = 0;
//         let time = setInterval(() => {
//             timer++
//             document.getElementById('timer').innerHTML = `<p>${timer}</p>`
//         }, 1000);
    
//     // Set the flag to true to prevent further execution
//     hasRun = true;
//     }
//     if(end == true){
//         clearInterval(time)
//     }
// }
function endgame() {
    for (let i = 1; i <= 480; i++) {
        let element = document.getElementById(`num${i}`)
        if (element.children.length == 1) {
            element.childNodes[0].classList.remove('cover')
        }else{
            element.childNodes[1].classList.remove('cover')
        }
        
    }
}
let end = 1
let time
let smile= document.getElementById('smile')
function hide(element_clicked) {
    
    // runOnce(end)
    if (element_clicked.parentNode.classList.contains('red') == false) {
        element_clicked.classList.remove('cover')
    };if (element_clicked.parentNode.classList.contains('red')){
        end = 1000
        endgame();
        // runOnce(end)
        smile.src = 'sad.png'
    }
    if(end == 1){
        var timer = 0;
        time = setInterval(() => {
            timer++
            document.getElementById('timer').innerHTML = `<p>${timer}</p>`
        }, 1000);
        end ++
    }if(end == 1000){
        clearInterval(time)
    }

}
let reset = document.getElementById('reset')
reset.addEventListener('click', function () {
    // Reload the page when the button is clicked
    location.reload();
  });

