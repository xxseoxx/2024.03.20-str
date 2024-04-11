// 전개 구문: 배열

let fruits = ["banana", "watermelon", "apple"];
console.log(fruits);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(...fruits);

const addNums = (...nums)=>{ // 배열에 데이터가 몇 개가 들어갈지 모를 때 사용
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

console.log(addNums(1, 2, 3));
console.log(addNums(1, 2, 3, 4, 5));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];
const arr4 = [0, arr1, ...arr2, 7, 8, 9];