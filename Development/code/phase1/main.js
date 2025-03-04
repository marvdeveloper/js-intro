let username = "breakout4";
console.log(username);
let age = 72;
let isMember = true;
if(age >=65 && isMember) {
    console.log("Eligible for discount");
}

let city = "";

if (!city) {
    console.log("City is not set");
}
let userage = 20;
let isStudent = true;

if ((userage >=18 && userage <= 30) || isStudent) {
    console.log("Eligible for youth program");
}
let isRaining = false;

if (!isRaining) {
    console.log("Let's go outside!");
}
let temperature = 31;
console.log(temperature > 30 ? "Hot day" : "Comfortable day")

let isLoggedIn = false;
let guestAccess = true;

if (isLoggedIn || guestAccess) {
    console.log("Access granted");
}

let score =100;

if (typeof score === "number") {
    console.log("Valid score");
} else {
    console.log("Invalid score");
}

let hasTickets = true
let isVIP = false;
 
if (hasTickets || isVIP) {
    console.log("Access granted");
}

function canDrive(age, hasLicense) {
    return age >= 18 && hasLicense;
}