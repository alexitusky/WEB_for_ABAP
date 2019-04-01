function modifyUserName() {
    var username = prompt("Please enter your username for modification:");
    if (username != null || username != "") {
        if (checkContainsOfNumbers(username)) {
            username = username.toUpperCase();
        } else {
            username = reverseString(username);
        }

        alert("Result after modification: " + username);
    }
}

function checkContainsOfNumbers(string) {
    return /\d/.test(string);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}