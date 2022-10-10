// import { without } from 'lodash'
var _ = require('lodash')

const array = [3,4,5,6,5,6,76,7,6]
console.log('answer: ', _.without(array, 3));
var css = document.querySelector("h3")
var color1 = document.querySelector("input.color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

color1.addEventListener("input", (event) => {
    body.style.background = "linear-gradient(to right," 
        + color1.value + ", " + color2.value + ")";
        css.textContent = body.style.background + ";";
})

color2.addEventListener("input", (event) => {
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
})
