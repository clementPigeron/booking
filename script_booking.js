const bfButton = document.getElementById("bfButton")
const bfIndicator = document.querySelectorAll(".breakfast")
let bfFilter = 0

bfButton.addEventListener("click", () => {
    if (bfFilter===0) {
        bfFilter = 1
    } else if (bfFilter===1) {
        bfFilter = 2
    } else {
        bfFilter = 0
    }

    filterBf();
})

function filterBF() {
    if (bfFilter===0) {
        bfIndicator.forEach((p) => {
            p.parentNode.style.display = "none"
        })
    } else if (bfFilter===1) {
        bfFilter = 2
    } else {
        bfFilter = 0
    }
}