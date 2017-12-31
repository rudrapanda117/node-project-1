let square = x => x * x;
console.log(square(9));

let user = {
    name: 'rudrasish',
    age: 25,
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi I am ${this.name} -- ${user.age}`)
    },
    sayHiAll() {
        console.log(arguments);
        console.log(`Hi I am ${this.name}`)
    }
};

user.sayHi(1, 2, 3);
user.sayHiAll(1, 2, 3);