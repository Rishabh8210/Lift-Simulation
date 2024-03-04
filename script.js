let lift = document.querySelector(".lift");
let buttons = document.querySelector(".lift-btns");
let floor = document.querySelector("p");
let liftValue = 10;
let num = 10;

buttons.addEventListener("click", function(e){
    num = liftValue;
    if(e.target.innerText >= "0" && e.target.innerText <= "4" && e.target.innerText.length == 1)
    {
            liftValue = 80 * parseInt(e.target.innerText);
            console.log(e.target.innerText)
        
            console.log(liftValue)
            if(liftValue == 0)
            liftValue = 10
            // floor.innerText = e.target.innerText;

            var s = setInterval(function(){
                if(num == liftValue){
                    clearInterval(s)
                    floor.innerText = e.target.innerText;
                }
                else if(num <= liftValue){
                    num += 5;
                    lift.style.bottom = num +"px";
                    console.log(num)
                }
                else{
                    num -= 5
                    lift.style.bottom = num +"px";
                }
                
            }, 100)
    }
})