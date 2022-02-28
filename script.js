const containerSlider = document.querySelector(".container-slider")
const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")

const arrowDown = document.querySelector(".arrow-down")
const arrowUp = document.querySelector(".arrow-up")

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  výběr divů pomocí selector ALL !!!!!!!!!!!!!!!!!!!!! kolik jich je????
const slidesLength = slideRight.querySelectorAll("div").length
console.log(slidesLength)
// definujeme proměnnou slidů 0,1,2
let numberActiveSlide = 0

slideLeft.style.top = `-${(slidesLength - 1)*100}vh`



// posunování slidů

arrowUp.addEventListener("click", function(){
    changeSlide("up")
})

arrowDown.addEventListener("click", function(){
    changeSlide("down")

})

function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight
    if(direction === "up"){
        numberActiveSlide = numberActiveSlide + 1
        if(numberActiveSlide>=slidesLength){
            numberActiveSlide = 0
        }
    }   else{
        numberActiveSlide = numberActiveSlide - 1
        if(numberActiveSlide<0){
            numberActiveSlide = slidesLength - 1
        }

    }
    

    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHeight}px)`

}



