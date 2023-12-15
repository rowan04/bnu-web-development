function input(names) {
    let count = 0
    while (count < 3) {
        names[count] = prompt("Enter name:")
        count++
    }
    
    output(names)
}

function output(names) {
    for (name of names) {
        document.write("<p>Hello " + name + ", there are " + name.length + " letters in your name.</p>")
    }

    names.sort()
    document.write("Here is the list of names in alphabetical order:<br>")
    for (name of names) {
        document.write(name + "<br>")
    }

    document.write("<br>")

    names.reverse()
    document.write("Here is the list of names in reverse alphabetical order:<br>")
    for (name of names) {
        document.write(name + "<br>")
    }
}