const arr1 = ['test', 'example', 'code'];
const arr2 = new Array(3);

console.log(arr1[0]); //

const stu = {};
const stu2 = [];
console.log(typeof stu);
console.log(typeof stu2);


const student1 = {
    '1': 'John Doe',
    'lastname': 'Doe',
    "3": 'Computer Science'
};

console.log(student1['1']); // John Doe
console.log(student1['lastname']); // Doe



// створення об'єкта
const student = {
    name: 'John Doe',
    lastName: 'Doe',
    course: 'Computer Science'
};

console.log(student.name); // John Doe
console.log(student['lastName']);


//розширення об'єкта
student.age = 20;
student['tommorow'] = new Date(-1);
console.log(student.tommorow); // Invalid Date
console.log(student.age); // 20

// видалення властивості
delete student.age;
console.log(student);


//CRUD - Create, Read, Update, Delete

// створення об'єкта з вкладеними властивостями

function sayHi1() {
    console.log('Hello, my name is John' + this.lastName);
};

const student3 = {
    name: 'John Doe',
    lastName: 'Doe',
    course: 'Computer Science',
    addresses: ['kyiv', 'Lviv', 'Odesa'],
    parents: {
        firstName: 'John Sr.',
        lastName: 'Jane Doe'
    },
    
    sayHi() {
        console.log('Hello, my name is ' + this.name, 'I live in ' + this.addresses[2]);
    },
    sayHi1: sayHi1,
    sayBe () {
        console.log(`Goodbye, my name is ${this.parents.firstName}`);
    }
    
};

student3.sayBe();

console.log(student3.sayHi());
console.log(); // John Doe


console.log(student3.addresses[2]);
console.log(student3.parents.firstName);

















