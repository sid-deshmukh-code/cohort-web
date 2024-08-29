const fs = require("fs");



function print(err, contents) {
    if (err) {
        console.error("Error reading a.txt:", err);
        return;
    }
    console.log(contents);
}

fs.readFile("b.txt", "utf-8", print);

fs.readFile("a.txt", "utf-8", print); 
