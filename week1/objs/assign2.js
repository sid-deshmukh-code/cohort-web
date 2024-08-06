// Write a function that takes a new object as input which has name , age  and gender and 
// greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(name, age, gender) {
//used if else ladder unknowingly  !!!!!!!!!!!!!refer theory and make programs!!!!!!!!!
    if ((gender) == "male") {
        console.log("Hello Mr.",name,"ur age is",age);
    }
    else{
    if (gender == "female") {
        console.log("Hello Miss.",name,"ur age is",age);
    }   else
    { console.log("Hello",name,"ur age is",age); }
}
    
}

let user = {
	name: "sid",
	age: 19,
    gender:"male"
}

greet(user.name,user.age,user.gender)

