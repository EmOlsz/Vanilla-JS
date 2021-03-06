// start with strings, numbers and booleans

let string = 'One';
let string2 = string;
console.log(string, string2);
string = 'Two';
console.log(string, string2);
string2 = 'Three';
console.log(string, string2);


let number = 1;
let number2 = number;
console.log(number, number2);
number = 2;
console.log(number, number2);
number2 = 3;
console.log(number, number2);


// Let's say we have an array
let arr = ['One', 'Two', 'Three', 'Four'];

// and we want to make a copy of it.

let arr2 = arr;

// You might think we can just do something like this:

arr[0] = 'Five';

// however what happens when we update that array?

console.log(arr, arr2);

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

let arr3 = arr.slice();
arr3[0] = 'One again';
console.log(arr, arr2, arr3);

// one way

// or create a new array and concat the old one in

let arr4 = [].concat(arr);
arr4[0] = 'One again';
console.log(arr, arr2, arr3, arr4);

// or use the new ES6 Spread

let arr5 = [...arr];
arr5[0] = 'One again';
console.log(arr, arr2, arr3, arr4, arr5);

// or Array.from() method

let arr6 = Array.from(arr);
arr6[0] = 'One again';
console.log(arr, arr2, arr3, arr4, arr5, arr6);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a object

let obj = {
    name: 'Maksymilian',
    surname: 'Olszewski'
}

// with Objects

// and think we make a copy:

let obj2 = obj;
console.log(obj, obj2);
obj2.name = 'Max';
console.log(obj, obj2);
obj.surname = 'Olsz';
console.log(obj, obj2);

// how do we take a copy instead?

let obj3 = Object.assign({}, obj, {name: 'Maksymilian again'});
obj3.surname = 'Olszewski again';
console.log(obj, obj2, obj3);

// We will hopefully soon see the object ...spread
//    let obj4 = {...obj};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

let maksymilian = {
    name: 'Maksymilian',
    surname: 'Olszewski',
    skills: {
        CloneArrays: 'yes',
        CloneObjects: 'yes'
    }
}

let maksymilian2 = Object.assign({}, maksymilian);
maksymilian2.skills.CloneObjects = 'sure?';
console.log(maksymilian, maksymilian2);

//  Eventually we can use json methods to find way around, but it actually only change object to string and then immediately parse back to object.

let maksymilian3 = JSON.parse(JSON.stringify(maksymilian));
maksymilian3.skills.CloneObjects = 'yes, sure';
console.log(maksymilian, maksymilian2, maksymilian3);