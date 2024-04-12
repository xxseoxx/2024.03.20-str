let book = {
    title:"front tech", 
    totalPages:3,
    nowPage:1,
    read: function(){
        if(this.nowPage >= this.totalPages) console.log("다 읽었어요.")
        else{
    
        
        console.log(`${this.title}을 읽습니다. 지금 ${this.nowPage}를 읽고 있습니다.`);
        
        }
        this.nowPage++;
    }
}

book.read();
book.read();
book.read();


//복사 (값을 복사)
let number1= 100;
let number2= number1;
console.log("number1: ",number1);
console.log("number2: ",number2);

number2 = 200;
console.log("number1: ",number1);
console.log("number2: ",number2);

//객체 복사 (참조ref 복사: 얕은 복사)
let car1 = {
    name: "Avante",
    color: "blue",
    engineSize: 1.6
}
let car2 = car1;
console.log("car1: ",car1);
console.log("car2: ",car2);

car2.color = "red";
console.log("car1: ",car1);
console.log("car2: ",car2);

// 배열 복사 - 얕은 복사
const arr1 = [10, 20, 30];
const arr2 = arr1.reverse();
console.log("arr1: ",arr1);
console.log("arr2: ",arr2);
// 배열 복사 - 깊은 복사
const array1 = [10, 20, 30];
const array2 = [...array1].reverse();
console.log("array1: ",array1);
console.log("array2: ",array2);

let sedan1 = {name: "Avante", color: "blue", engineSize: 1.6}
let sedan2 = {...sedan1};
sedan2.color = "red";
console.log("sedan1: ",sedan1);
console.log("sedan2: ",sedan2);             //깊은 복사를 해야 값의 변화가 생김.
// ...의 약점: 더 깊은 레벨은 안됨.
