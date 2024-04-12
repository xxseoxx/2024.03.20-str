// 구조 분해 할당, 디스트럭팅(distructing)

let fruits = ["사과", "바나나"];
let apple = fruits[0];
let banana = fruits[1];

console.log(apple, banana);

let [apple2, banana2] = ["사과", "바나나"];

console.log(apple2, banana2);

let [a, b] =[];
console.log(a);  //undefined
console.log(b);  //undefined

let seasons = ["봄", "여름", "가을", "겨울"];
let spring = seasons[0];
let fall = seasons[2];

let[spring2, ,fall2, ] = ["봄", "여름", "가을", "겨울"];
console.log(spring2, fall2);

let [teacher, ...student] = ["서호준", "신수민", "조민성", "김용훈", "조찬증", "최윤정"]
console.log(teacher);
console.log(student);

let frontendClass={
    className : "front(react) ban",
    gisu : 8
}


let {className, gisu} = frontendClass;
console.log(className, gisu);
let {className: cName, gisu: gisoo} = frontendClass;
console.log( cName, gisoo);




