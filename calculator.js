function ask_numbers() {
    var value1=parseInt(prompt("Please enter first number:"))
    var value2=parseInt(prompt("Please enter second number:"))
    display_alert("To see the results, agree to being a test-subject for Dr Luttenhauser!")
    display_info(value1, value2)
}

function display_info(value1, value2) {
    document.write("The sum of " + value1 + " and " + value2 + " is " + add(value1, value2) + "<br>")
    display_alert("The sum of " + value1 + " and " + value2 + " is " + add(value1, value2))

    document.write("Subtracting " + value2 + " from " + value1 + " gives you " + subtract(value1, value2) + "<br>")
    display_alert("Subtracting " + value2 + " from " + value1 + " gives you " + subtract(value1, value2))

    document.write("The product of " + value1 + " and " + value2 + " is " + product(value1, value2) + "<br>")
    display_alert("The product of " + value1 + " and " + value2 + " is " + product(value1, value2))

    document.write("Dividing "+ value2 + " from " + value1 + " gives you " + divide(value1, value2) + "<br>")
    display_alert("Dividing "+ value2 + " from " + value1 + " gives you " + divide(value1, value2))

    document.write(value1 + " to the power of " + value2 + " is " + pow(value1, value2) + "<br>")
    display_alert(value1 + " to the power of " + value2 + " is " + pow(value1, value2))

    document.write("The larger of " + value1 + " and " + value2 + " is " + max(value1, value2) + "<br>")
    display_alert("The larger of " + value1 + " and " + value2 + " is " + max(value1, value2))

    document.write("The smaller of " + value1 + " and " + value2 + " is " + min(value1, value2) + "<br>")
    display_alert("The smaller of " + value1 + " and " + value2 + " is " + min(value1, value2))

window.setTimeout(display_confirm, 1000)
}

function display_alert(text) {
    alert(text)
}

function display_confirm() {
    const confirmed = confirm("Do you wish to math?")
    if (confirmed) {
        ask_numbers()
    }
    else {
        window.stop()
    }
}

function product(a, b) {
    return (a*b)
}

function divide(a, b) {
    return (a/b)
}

function add(a, b) {
    return (a+b)
}

function subtract(a, b) {
    return (a-b)
}

function max(a, b) {
    return Math.max(a, b)
}

function min(a, b) {
    return Math.min(a, b)
}

function pow(a, b) {
    return Math.pow(a, b)
}