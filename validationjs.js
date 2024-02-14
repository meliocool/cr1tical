function validateLogin() {
    // Get the username and password values from the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check the entered username and password
    if ((username === "FromSoftware" && password === "fromsoft123") ||
        (username === "brandon" && password === "brandon123") ||
        (username === "dreamy" && password === "dreamy123")) {
        // Redirect to the appropriate HTML page based on the credentials
        switch (username) {
            case "FromSoftware":
                window.location.href = "devmain.html";
                break;
            case "brandon":
                window.location.href = "mainpageaftrlogin.html";
                break;
            case "dreamy":
                window.location.href = "mainobs.html";
                break;
            default:
                break;
        }
    } else {
        alert("Invalid username or password. Please try again.");
    }
}