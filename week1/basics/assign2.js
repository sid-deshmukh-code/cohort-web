function vote(age) {

    if (age>=18) {

        return canVote = true;
        
    } else {
        return canVote = false;
    }
    
}

let ex1 = vote(19);
let ex2 = vote(9);

console.table([ex1, ex2])