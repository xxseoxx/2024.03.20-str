let num1 = [10, 20, 30];
console.log(num1.pop())
console.log(num1)

// 스택 push() / pop()
// let work = ["인터넷", "카톡", "유튜브"];
let work = Array();
work.push("인터넷")         // 차례대로 빈 배열에 집어넣기
console.log(work)
work.push("카톡")
console.log(work)
work.push("유튜브")
console.log(work)          // 배열의 뒷 부분부터 빼내기
console.log(work.pop())
console.log(work)
console.log(work.pop())
console.log(work)
console.log(work.pop())
console.log(work)