// Create an object

const setup = () => {
let student = {}; // een leeg object
student.firstName = "John";
student.lastName = "Doe";
student.age = new Date (2000,1,1);
student.eyeColor = "blue";

console.log (student.firstName);
console.log(student.age);
    };




// uitbreiding

let student2 = {
    firstName: "John",
    lastName: "Doe",
    address : {
        zipCode : 8500,
        city : "Kortrijk"
    }
};



let students = [
    {
        firstName: "John",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    },
    {
        firstName: "VIVES",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    }
];

tekst = JSON.stringify(students);
console.log(tekst);
tekstJS = JSON.parse(tekst);
console.log("JSONparse:" + tekstJS[0].firstName)
