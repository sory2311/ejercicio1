// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }
// [5, 6].map(n => console.log(n));


var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9},
    {name: 'John', age: 40},
    {name: 'Ann', age: 19},
    {name: 'Elisabeth', age: 16}
    ]
    function teenager(person) {
    return person.age > 10 && person.age < 20
    }
    var thereAreTeenagers = people.some(teenager)
    console.log('There are teenagers:', thereAreTeenagers)
    document.write('There are teenagers:', thereAreTeenagers)