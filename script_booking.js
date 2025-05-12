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
    fcolorBf();
})

function filterBf() {
    if (bfFilter===0) {
        bfIndicator.forEach((p) => {
            p.parentNode.style.display = "block"
        })
    } else if (bfFilter===1) {
        bfIndicator.forEach((p) => {
            if (p.textContent.includes("✓")) {
                p.parentNode.style.display = "block"
            } else {
                p.parentNode.style.display = "none"
            }
        })
    } else {
        bfIndicator.forEach((p) => {
            if (p.textContent.includes("✓")) {
                p.parentNode.style.display = "none"
            } else {
                p.parentNode.style.display = "block"
            }
        })
    }
}

function fcolorBf() {
    if (bfFilter===0) {
        bfButton.style.backgroundColor = "white";
    } else if (bfFilter===1) {
        bfButton.style.backgroundColor = "green";
    } else {
        bfButton.style.backgroundColor = "red";
    }
}