const bfButton = document.getElementById("bfButton")
const sheetButton = document.getElementById("sheetButton")

const lodgeBox = document.querySelectorAll(".lodgeBox")
const bfIndicator = document.querySelectorAll(".breakfast")
const sheetIndicator = document.querySelectorAll(".sheet")

let bfFilter = 0
let sheetFilter = 0

bfButton.addEventListener("click", () => {
    bfFilter = filterValueCycle(bfFilter);
    buttonStyleCycle(bfButton,bfFilter);
    applyFilter();
})

sheetButton.addEventListener("click", () => {
    sheetFilter = filterValueCycle(sheetFilter);
    buttonStyleCycle(sheetButton,sheetFilter);
    applyFilter();
})

function buttonStyleCycle(button,filter) {
    if (filter===0) {
        button.querySelector(".circle").style.backgroundColor = "white";
        button.querySelector(".circle").style.left = `${(button.querySelector(".circle").offsetWidth)/2}px`;
    } else if (filter===1) {
        button.querySelector(".circle").style.backgroundColor = "#B2FBA5";
        button.querySelector(".circle").style.left = `${(button.offsetWidth)/2}px`;
    } else {
        button.querySelector(".circle").style.backgroundColor = "#FF746C";
        button.querySelector(".circle").style.left = `${button.offsetWidth-((button.querySelector(".circle").offsetWidth)/2)}px`;
    }
}

function filterValueCycle(value) {
    if (value===0) {
        return 1
    } else if (value===1) {
        return 2
    } else {
        return 0
    }
}

function applyFilter() {
    
    lodgeBox.forEach((box) => {
            box.style.display = "block"
    })

    if (bfFilter===1) {
        bfIndicator.forEach((p) => {
            if (p.textContent.includes("✕")) {
               p.parentNode.style.display = "none"
            }
        })
    } else if(bfFilter===2) {
        bfIndicator.forEach((p) => {
            if (p.textContent.includes("✓")) {
               p.parentNode.style.display = "none"
            }
        })
    }

    if (sheetFilter===1) {
        sheetIndicator.forEach((p) => {
            if (p.textContent.includes("✕")) {
               p.parentNode.style.display = "none"
            }
        })
    } else if(sheetFilter===2) {
        sheetIndicator.forEach((p) => {
            if (p.textContent.includes("✓")) {
               p.parentNode.style.display = "none"
            }
        })
    }
}