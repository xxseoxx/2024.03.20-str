// async await 문
// promise: ~~.then().then()

// 일반 함수 상태
function generalFunc(){
    console.log("일반 함수네요");
}

// async
async function asyncFunc(){
    console.log("async 함수네요");
}

function whatIsYourOrder(){
    let myOrder = "한솥도시락";
    return new Promise((resolve, reject)=>resolve(myOrder));
}
function showYourOrder(mes){
    return new Promise(
        (resolve, reject)=>resolve(`promise로부터 ${mes}를 주문 받았습니다.`)
    )
}
whatIsYourOrder().then(showYourOrder).then(console.log);





async function asyncwhatIsYourOrder(){
    let myOrder = "한솥도시락";
    return myOrder;
}
async function asyncShowYourOrder(mes){
    let myOrder = "한솥도시락";
    return `promise로부터 ${mes}를 주문 받았습니다.`;
}
asyncwhatIsYourOrder().then(asyncShowYourOrder).then(console.log);




async function order(){
    const res = await asyncwhatIsYourOrder();
    const res2 = await asyncShowYourOrder(res);
    console.log(res2);
}
order();