const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular

console.log('Test');

// Interpolated

console.log('Test %s', 'with adding a string');

// Styled

console.log('%c Styled test', 'font-weight: 900');

// warning!

console.warn('Warning');

// Error :|

console.error('Error');

// Info

console.info('Info')

// Testing

console.assert(p.classList.contains('not right class'), 'Wrong');

// clearing

console.clear();

// Viewing DOM Elements

console.dir(p);

// Grouping together

dogs.forEach(item => {
    console.groupCollapsed(item.name);
console.log(item.name);
console.log(item.age);
console.groupEnd(item.name);
});

// counting

console.count('Element 1');
console.count('Element 1');
console.count('Element 1');
console.count('Element 1');
console.count('Element 2');
console.count('Element 2');
console.count('Element 2');
console.count('Element 1');

// timing

console.time('iterating through array');
for (var i = 0; i <= dogs.length - 1; i++) {
    dogs[i].lastName = "Brand new last name";
}
console.timeEnd('iterating through array');
console.table(dogs);