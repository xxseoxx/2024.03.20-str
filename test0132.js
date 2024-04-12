// 배열 관련 함수 3형제 (map, filter, reduce)

// map: 일괄 계산
let nums50manjum = [10, 20, 30, 40, 50];
let nums100manjum = [10, 20, 40, 30, 70];
let nums50to100 = [];
for(let i = 0; i < 5; i++){
    nums50to100[i] = nums50manjum[i]*2;
}
console.log(nums50to100);

let nums50to100_2 = nums50manjum.map(num=>num*2);
console.log(nums50to100_2);
// filter: 조건으로 걸러냄

// reduce: 누적 계산
