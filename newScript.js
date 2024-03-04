let lift = document.querySelector(".lift");
let buttons = document.querySelector(".lift-btns");
let floor = document.querySelector("p");
let liftValue = 10;
let num = liftValue;

let liftVal = [];
let itr = 0;
buttons.addEventListener("click", function (e) {
    if(e.target.innerText >= "0" && e.target.innerText <= "4" && e.target.innerText.length == 1)
        liftVal.push(parseInt(e.target.innerText));
})
let floorPosi = 0;
let isRun = true;
let liftCall = setInterval(function(){
    console.log(liftVal, itr);
    if(itr != liftVal.length && isRun){
        isRun = false;
        liftValue = liftVal[itr] * 80;
        floorPosi = liftVal[itr]
        if(liftValue == 0)
            liftValue = 10
        floor.innerText = floorPosi;
        var s = setInterval(function () {
            if (num == liftValue) {
                itr++;
                isRun = true;
                clearInterval(s)
            }
            else if (num <= liftValue) {
                num += 5;
                lift.style.bottom = num + "px";
                console.log(num)
            }
            else {
                num -= 5
                lift.style.bottom = num + "px";
            }
        }, 100)
    }
}, 1000)


































// if (e.target.innerText >= "0" && e.target.innerText <= "4" && e.target.innerText.length == 1) {
//     liftValue = 80 * parseInt(e.target.innerText);
//     console.log(e.target.innerText)

//     console.log(liftValue)
//     if (liftValue == 0)
//         liftValue = 10
//     // floor.innerText = e.target.innerText;

// }