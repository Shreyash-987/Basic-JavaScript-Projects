const display = document.getElementById("display")
const buttons = document.getElementById("buttons")

function appendToDisplay(input){
    display.value += input
}
function calculate() {
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = ""
}