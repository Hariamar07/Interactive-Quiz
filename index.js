var click = document.getElementById("click")
var finalbox = document.getElementById("finalbox")
var result = document.getElementById("result")

document.addEventListener("DOMContentLoaded", function () {
    click.addEventListener("click", function () {
        const q1 = document.querySelector("input[name='q1']:checked")
        const q2 = document.querySelector("input[name='q2']:checked")
        const q3 = document.querySelector("input[name='q3']:checked")

        if (!q1 || !q2 || !q3) {
            alert("Answer all question")
            return
        }
        var score = 0
        if (q1.value === "option2") {
            score++
        }
        if (q2.value === "option2") {
            score++
        }
        if (q3.value === "option1") {
            score++
        }

        finalbox.style.display="inline-block"
        result.textContent = "score:  "  + score + "  out of 3"


    })

})




