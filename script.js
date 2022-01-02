//Add Event Listener to all Expand/Collapse Button
document.addEventListener("click", e => {
    if (!e.target.matches(".expand-button")) return
    if (e.target.closest(".expand-button").innerHTML == "Expand") {
        addShow(e);
    } else {
    removeShow(e);
    }
})

// Show text when click "Expand"
function addShow(e) {

    const classCard = e.target.closest(".card").children
    classCard[1].classList.add("show")
    switchButton(e)

    console.log("HELP")
}

function removeShow(e) {
    const classCard = e.target.closest(".card").children
    classCard[1].classList.remove("show")
    switchButton(e)

    console.log("Oh fk")
}

// Remove text when click "collapse"

function switchButton(e) {
    if (e.target.closest(".expand-button").innerHTML == "Expand") {
        e.target.closest(".expand-button").innerHTML = "Collapse"
    } else {
        e.target.closest(".expand-button").innerHTML = "Expand"
    }
}