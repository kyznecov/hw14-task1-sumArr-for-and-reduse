////////// С помощью reduce

let arr = [1,2,3,4];
let sumReduce = arr.reduce(function(previousValue, item, index, array) {
    return item + previousValue;
},);

console.log(sumReduce)

/////////// С помощью цикла

let result = 0;
let arr2 = [5,5,5,5,6];

for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
}

console.log(result);

////////// Функция принимает масси и возращает сумму с помощью цикла for

let myArray = [2,3,4,5,6,];

var arr3;

function sumArray (myArray) {
    let result = 0;
    for (let i = 0; i < myArray.length; i++) {
       // newArray.push(newArray += myArray[i]);
        result += myArray[i];
        
    };
    return result
};

arr3 = sumArray([2,3,4,5]);
console.log(arr3)

///////////////