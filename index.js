// console.log('toggle-', toggle)
const display = document.getElementById("display")
const toggleButton = document.getElementById("button")

let toggle = false
printToggle()

toggleButton.addEventListener("click", () => {
    toggle = !toggle
    printToggle()
});

function printToggle() {
    display.innerHTML = toggle ? 'ON' : 'OFF'
}