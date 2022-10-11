const convertBtn = document.getElementById("convert-btn")
const inputNum = document.getElementById("input-num")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    lengthConverter()
    volumeConverter()
    massConverter()
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function lengthConverter() {
    const inputNum = document.getElementById("input-num").value
    let feetConvert = inputNum * 3.28084
    let meterConvert = inputNum * 0.3048
    lengthEl.innerHTML = `${inputNum} meters = ${feetConvert.toFixed(3)} feet | ${inputNum} feet = ${meterConvert.toFixed(3)} meters`
}

function volumeConverter() {
    const inputNum = document.getElementById("input-num").value
    let literConvert = inputNum * 0.264172 
    let gallonConvert = inputNum * 3.785412
    volumeEl.innerHTML = `${inputNum} liters = ${literConvert.toFixed(3)} gallons | ${inputNum} gallons = ${gallonConvert.toFixed(3)} liters`

}

function massConverter() {
    const inputNum = document.getElementById("input-num").value
    let kiloConvert = inputNum * 2.204
    let poundConvert = inputNum * 0.45359237
    massEl.innerHTML = `${inputNum} kilos = ${kiloConvert.toFixed(3)} pounds | ${inputNum} pounds = ${poundConvert.toFixed(3)} kilos`

}