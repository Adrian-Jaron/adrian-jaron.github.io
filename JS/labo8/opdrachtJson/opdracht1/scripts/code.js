let student1 = {};
student1.firstName = "John";
student1.lastName = "Doe";
student1.age = new Date (2000,1,1);
student1.eyeColor = "blue";
let tekst = JSON.stringify(student1);


console.log(tekst);
