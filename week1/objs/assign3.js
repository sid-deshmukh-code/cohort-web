// Write a function that takes a new object as input which has name , age  and gender and 
// greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
//Also tell the user if they are legal to vote or not


function greet(name, age, gender) {
    //used if else ladder unknowingly  !!!!!!!!!!!!!refer theory and make programs!!!!!!!!!
        if ((gender) == "male") {
            if (age >=18) {
                console.log("Hello Mr.",name,"ur age is",age,"can vote");
            }
            else{
                console.log("Hello Mr.",name,"ur age is",age,"can't vote");
            }
        }
        else{
            if (gender == "female") {
                if (age >=18) {
                    console.log("Hello Miss.",name,"ur age is",age,"can vote");
                }
                else{
                    console.log("Hello Miss.",name,"ur age is",age,"can't vote");
                }
                
            }   
            else{ 
                if (age >=18) {
                    console.log("Hello",name,"ur age is",age,"can vote"); 
                }
                else{console.log("Hello",name,"ur age is",age,"can't vote");}

                    
                }
    }
        
    }
    
    let user = {
        name: "pasandida aurat",
        age: 19,
        gender:"female"
    }
    
    greet(user.name,user.age,user.gender)
    
    