// splice

var num = [ 1, 2, 3, 4, 5];
var newNum = num.splice(2);       // 2부터 시작해서 다음 배열
console.log(newNum);
console.log(num);


var num = [ 1, 2, 3, 4, 5];
var newNum = num.splice(2, 2);    // 2부터 시작해서 2개 꺼냄
console.log(newNum);
console.log(num);

var num = [ 1, 2, 3, 4, 5];
var newNum = num.splice(2, 2, 30);    
console.log(newNum);
console.log(num);


// slice                      기존 배열을 변경하지 않고 지정 배열을 꺼냄
var num = [ 1, 2, 3, 4, 5];
var newNum = num.slice(2)
console.log(newNum);
console.log(num);

var num = [ 1, 2, 3, 4, 5];
var newNum = num.slice(2, 4)         //2번 이상 4번 미만
console.log(newNum);
console.log(num);