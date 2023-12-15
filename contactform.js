function processForm(form) {
    event.preventDefault()

    if (document.contains(document.getElementById("nameReturn"))) {
        document.getElementById("nameReturn").remove();
    }
    if (document.contains(document.getElementById("addressReturn"))) {
        document.getElementById("addressReturn").remove();
    }
    if (document.contains(document.getElementById("cityReturn"))) {
        document.getElementById("cityReturn").remove();
    }
    if (document.contains(document.getElementById("postcodeReturn"))) {
        document.getElementById("postcodeReturn").remove();
    }
    if (document.contains(document.getElementById("confirmReturn"))) {
        document.getElementById("confirmReturn").remove();
    }

    let name = form.name.value;
    let address = form.address.value;
    let city = form.city.value;
    let postcode = form.postcode.value;

    const nameReturn = document.createElement('div');
    nameReturn.id = "nameReturn"
    const addressReturn = document.createElement('div');
    addressReturn.id = "addressReturn"
    const cityReturn = document.createElement('div');
    cityReturn.id = "cityReturn"
    const postcodeReturn = document.createElement('div');
    postcodeReturn.id = "postcodeReturn"
    const confirmReturn = document.createElement('div');
    confirmReturn.id = "confirmReturn"

    if ((testName(name) === true) && (testAddress(address) === true) && (testCity(city) === true) && (testPostcode(postcode) === true)) {
        confirmReturn.innerHTML = `<p>Thanks for your submission!</p>`;
        document.getElementById("signUpForm").appendChild(confirmReturn)
    } else if (testName(name) === false) {
        nameReturn.innerHTML = `<p>Name is invalid</p>`;
        document.getElementById("name").appendChild(nameReturn)
    } else if (testAddress(address) === false) {
        addressReturn.innerHTML = `<p>Address is invalid</p>`;
        document.getElementById("address").appendChild(addressReturn)
    } else if (testCity(city) === false) {
        cityReturn.innerHTML = `<p>City is invalid</p>`;
        document.getElementById("city").appendChild(cityReturn)
    } else if (testPostcode(postcode) === false) {
        postcodeReturn.innerHTML = `<p>Postcode is invalid</p>`;
        document.getElementById("postcode").appendChild(postcodeReturn)
    }
}

function testName(name) {
    if (name == "") {
        return false
    } else {
        return true
    }
}

function testAddress(address) {
    if (address == "") {
        return false
    } else {
        return true
    }
}

function testCity(city) {
    if (city == "") {
        return false
    } else {
        return true
    }
}

function testPostcode(postcode) {
    const postcodePattern = " ^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$";
    let regex = new RegExp(postcodePattern);
    return regex.test(postcode)
}