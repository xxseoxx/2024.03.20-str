// 배열 관련 함수 3형제 (map, filter, reduce)

// map: 일괄 계산
let nums50manjum = [10, 20, 30, 40, 50]; //1
let nums100manjum = [10, 20, 40, 30, 70];
let nums50to100 = [];
for(let i = 0; i < 5; i++){
    nums50to100[i] = nums50manjum[i]*2;
}
console.log(nums50to100);

let nums50to100_2 = nums50manjum.map(num=>num*2); //2
console.log(nums50to100_2);
// filter: 조건으로 걸러냄
// 60점 이상만 걸러내자
let filtered60=[];  //1
for(let i =0; i < nums50to100_2.length; i++){
    if(nums50to100_2[i] >= 60){
        filtered60.push(nums50to100_2[i]);
    }
}
console.log(filtered60);

let filtered60_2=[]; //2
filtered60_2 = nums50to100_2.filter(score => score >= 60);
console.log(filtered60_2);

// reduce: 누적 계산
let data = [1, 2, 3, 4, 5];      //1
let sum = 0;
for(let i = 0; i < data.length; i++){
    sum += data[i]
}
console.log(sum);

let sum2 = data.reduce( (total, now)=> total + now,  0);   //2
console.log(sum2);