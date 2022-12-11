
// Activity:

// In the below exercises, write code that achieves
// the desired result. To check your work, run this
// file in your Terminal.

// var foods = {
//   apples: 23, 
//   grapes: 507, 
//   eggs: 48
// };
// Object.keys(foods);
// console.log (Object.keys(foods));

// Object.values(foods); 
// console.log(Object.values(foods));

// foods.grapes
// console.log(foods.grapes);

// foods.oranges = 2
// console.log(Object.keys(foods));

// #-------------------
// // Part 2: Email
// #-------------------


// Think about all the pieces of information associated with one single email in your inbox.
// It has a sender, a subject, body, time stamp, signature

// Declare a variable that stores an object. Each key should be an attribute of an email and each
// value should be some appropriate value for that key. Work to have at least 5 key-value pairs.

// var emailComponents = {
//   sender: "turing@turing.edu",
//   subject: "FE",
//   body: "Welcome to Turing",
//   timeStamp: "12:00 pm - 11 Dec 2022", 
//   signature: "Turing"
// };

// Object(emailComponents); 
// console.log(emailComponents);

// Object.keys(emailComponents);
// console.log (Object.keys(emailComponents));

// Object.values(emailComponents); 
// console.log(Object.values(emailComponents));

// #-------------------
// // Part 3: Many Emails - CHALLENGE!
// #-------------------

// LONG EXAMPLE:
// Now that we've learned about Objects AND Arrays, we can combine them.

// Check out the following example of an array of Instagram posts:


// posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];


// An Array of Objects is probably more realistic. Objects are a data type that's great
// for storing more complex data. Below, we can store multiple key-value pairs
// that relate to each individual Instagram post:


posts = [
  {
    imageSrc: "./images/beach.png",
    caption: "At the beach with my besties",
    timestamp: "4:37 PM August 13, 2019",
    number_likes: 0,
    comments: []
  }, 
  {
    imageSrc: "./images/holiday-party.png",
    caption: "What a great holiday party omg",
    timestamp: "11:37 PM December 31, 2019",
    number_likes: 13,
    comments: []
  }
];

console.log(posts);
console.log(posts[0]);


// The code snippet above shows an Array with 2 elements. Each element in the Array is a 
// Objects. Each of those Objects has 4 key-value pairs. This may LOOK 
// a bit daunting - it's OK! You don't need to be 100% comfortable with this, but it's
// good to have some exposure before going into Mod 1.


// YOU DO: Create an array of at least 3 EMAIL Objects, using the same 
// key-value pairs you used in your email Object above.
// Then, print the email Array to the Terminal.

emailComponents = [
  {
    sender: "turing@turing.edu",
    subject: "FE",
    body: "Welcome to Turing",
  },
  {
  sender: "caitlin@gmail.com",
  subject: "hey girl, hey",
  body: "Go on a walk"
 },
 {
sender: "april@gmail,com",
subject: "Climbing",
body: "Let's go to the climbing gym"
 }
];
console.log(emailComponents);
console.log(emailComponents[0]);
