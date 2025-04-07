let username = {
    firstName: "livanshu",
    isLoggedInt: true,
    "college name": "chitkara university",
};

username.firstName = "sam";
username.lastname = "saini";

console.log(username.firstName);
console.log(username.lastname);
console.log(username);
console.log(username["college name"]);

console.log(typeof(username));

let today = new Date();
console.log(today.getDate());

// Arrays

let anotherUser = ["livanshu", true];
console.log(anotherUser[0]);