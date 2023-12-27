"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerUser(name, birthYear) {
    var value = checkAge(birthYear);
    if (value) {
        console.log("NAME : ", name);
        console.log("Birthyear : ", birthYear);
        console.log(name, "Successfully Registered !");
    }
    else {
        console.log("User registeration is failed !");
    }
    function checkAge(birthYear) {
        var year = 2023;
        var age = year - birthYear;
        return age >= 18;
    }
}
registerUser("Nishana", 2001);
