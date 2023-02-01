
// 1 iterate of all properties in object through for loop
const student = {
    name: 'kuldeep',
    class: 7,
    age: 16
}

for (let key in student) {
    console.log(key, student[key]); //for both key value pairs
}

// output:
// name kuldeep
// class 7
// age 16