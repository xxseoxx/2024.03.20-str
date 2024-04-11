// 기본 for문
let arr1 = ["a", "b", "c"];
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

// forEach문: 배열
arr1.forEach(   (char) => {
    console.log(char);
});

// for in문 : 객체
const student = {
    name: "조민성",
    age: "맏형",
    etc: "사람들 괴롭히지는 않습니다."
}
for(key in student){
    console.log(key + ":" + student[key]);
}
console.log(student[0]); //undefined 순서가 없음

// for of: iterable에 적합
//(베열, generator, Map, Set iterable에 속함)
for (let char of arr1){
        console.log(char);
}