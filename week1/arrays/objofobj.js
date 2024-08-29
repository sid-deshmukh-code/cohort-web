//objects of objects 

const user1 = {
	name: "sid",
	age: 19,
	address: {
		city: "nagpur",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;
console.log(city);
