
// Array/масив


const arr = [1, 2, 3, 4, 5];
const arr1 = new Array(3);
const arr2 = new Array();

console.log(arr);
console.log(arr1);
console.log(arr2);

const student = 'John';
const student1 = 'Doe';
const student2 = 'Jane';
const student3 = 'Smith';
const student4 = 'Emily';

const students = [student, student1, student2, student3, student4];
console.log(students);

//отримання елементів масиву за індексом

console.log(students[3]);
console.log(student.at[4]);

//довжина масиву
 console.log(students.length);

 //перебір масиву

 for (let i = 0; i < students.length; i++) {
    students[i] = 'student: ' + students[i]
    console.log(students[i]);
 };


//додавання елементів в масив

students.push('Michael');
console.log(students);


//видалення елементів з масиву
students.pop();
console.log(students);

//об'єднання масивів
const cssSelectors = ['.tag', 'Bob[ = "x"]'];

const xpathSelectors = ['//tag', '//Bob[@name="x"]'];
const allSelectors = cssSelectors.concat(xpathSelectors);
console.log(allSelectors);

//for(...of)

const items = ['apple', 'ipad', 'e-book'];
for(let i= 0; i < items.length; i++) {
    console.log(items[i]);
};

for(const item of items) {
    console.log(item);
}

