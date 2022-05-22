function completeform() {
    const nameEl = document.getElementById("name").value;
    const emailEl = document.getElementById("e-mail").value;
    const phoneEl = document.getElementById("phone").value;
    const messageEl = document.getElementById("message").value;
    const errorEl = document.getElementById("error_message");

    // error message hidden in html only truggered when complete function is callled;
    errorEl.style.padding = "10px";
    if (nameEl.length < 5) {
        display = "Please Enter Valid Name";
        errorEl.innerHTML = display;
        return false;
    }
    if (emailEl.indexOf("@") == -1 || emailEl.length < 6) {
        display = "Please Enter Valid Email";
        errorEl.innerHTML = display;
        return false;
    }
    if (isNaN(phoneEl) || phoneEl.length != 11) {
        display = "Please Enter Valid Number";
        errorEl.innerHTML = display;
        return false;
    }
    if (messageEl.length <= 30) {
        display = "Please Enter more than 30 characters";
        errorEl.innerHTML = display;
        return false;
    }
    alert("Form submitted Sucessfully")
    return true
}