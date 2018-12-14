let myObj1 = {
	first: 3,
	second: "spgkjspg",
	third: function myFunc(){console.log('asoijf');},
	forth: [2, "32sdgs", 234]
}

/* ----------------------------------------------------- */

// DESTRUCTURE

myObj1.first

const {first, second} = myObj2;

const {first: prwto, second: deutero} = myObj2


// Real example from Social Authorization
responseGoogle(response) {
    const {name, email, imageUrl: picture} = response.profileObj;
    this.props.loginData(name, email, picture);
}

responseFacebook(response) {
    const {name, email, picture: {data: {url: picture}}} = response;
    this.props.loginData(name, email, picture);
}

/* ----------------------------------------------------- */

// SPREAD

let myObj21 = {...myObj1, fifth: "sigjsi"}

/* ----------------------------------------------------- */

// SHORTHAND

let myObject = {
    name: name,
    email: email,
    age: age
}

let myObject = {
    name,
    email,
    age
}

/* ----------------------------------------------------- */

// TEMPLATE LITERALS

const lesson = 'react';
const slogan = "Today's a very special day. We're going to learn " + lesson + " at work."
const slogan = `Today's a very special day. We're going to learn ${lesson} at work.`

/* ----------------------------------------------------- */

// ARROW FUNCTION

function myFunc(parameter) {
	return parameter;
}

const myFunc = parameter => parameter

/* ----------------------------------------------------- */

// CLASS ES6

let myObj2 = {
	"1st": myObj1,
	"2nd": 235
}

// is like saying:

class myObj2 extends myObj1 {
    constructor() {
        super() // ES6
    }
}

/* ----------------------------------------------------- */

// What is an array?
// https://www.w3schools.com/jsref/jsref_obj_array.asp

// Log one and analyze
var arr = [2, 5, 7, 3, 2];
console.log(arr);