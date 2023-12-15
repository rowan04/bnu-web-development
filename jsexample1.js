function display_alert() {
    alert("Do NOT click the other two buttons")
}

function display_prompt() {
    const input = prompt("How do you plead?")
    document.write("<h3> You plead: " + input + "</h3>")
}

function display_confirm(objects) {
    const confirmed = confirm("Do you confirm to confirming?")
    if (confirmed) {
        document.write("<h3>Confirmation acceptable</h3>")
    }
    else {
        document.write("Objects that are smarter than you: " + objects.toString())
    }
}