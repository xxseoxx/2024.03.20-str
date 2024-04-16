// 비동기 처리 방식
// 동기 처리(주류) vs 비동기 처리
// 멀티  스레드(Java) vs 싱글 스레드(Js)
// 멀티스레드: 소회의실 5개(1조-5조) 1명 선생님 독점 간주
// 싱글스레드: 전체회의실(오류수정요청) 전체 학생 중 1명 선생님 상황 인식(양보)
// 양보: 급한 일 먼저


// function dispA(){console.log("A");}
// function dispB(){console.log("B");}
// function dispB_delay2(){setTimeout( ()=>console.log("B"), 2000);}
// function dispC(){console.log("C");}
// function proc1(){
//     dispA();
//     dispB();
//     dispC();
// }
// console.log("proc1()");
// proc1();

// function proc2(){  // 순서는 ABC이지만 B가 딜레이가 있기때문에 양보해서 ACB 순서
//     dispA();
//     dispB_delay2();
//     dispC();
// }
// proc2();
// function dispA(){console.log("A");}
// function dispC(){console.log("C");}
// function dispB_callback(callback){
//     setTimeout( ()=>{
//         console.log("B");
//         callback();
//     }, 2000);
// }
// function proc3(){
//     dispA();
//     dispB_callback(dispC)
// }
// console.log("proc3()");
// proc3();

// 햄버거 주문과정
// 1. 고객이 주문을 한다.   1000ms
// 2. 결제                  500ms
// 3. 조리 측에 주문 전달    300ms
// 4. 햄버거 조리           3000ms
// 5. 햄버거 포장            100ms
// 6. 고객에게 전달          500ms
// 7. 고객이 내용물을 확인하고 먹는다.  100ms
function order(){setTimeout(()=> {console.log("1. 고객이 주문을 한다.   1000ms")}, 1000);}
function pay(){setTimeout(()=> {console.log("2. 결제                  500ms")}, 500);}
function orderTx(){setTimeout(()=> {console.log("3. 조리 측에 주문 전달    300ms")}, 300);}
function cook(){setTimeout(()=> {console.log("4. 햄버거 조리           3000ms")}, 3000);}
function pack(){setTimeout(()=> {console.log("5. 햄버거 포장            100ms")}, 100);}
function out(){setTimeout(()=> {console.log("6. 고객에게 전달          500ms")}, 500);}
function confirm(){setTimeout(()=> {console.log("7. 고객이 내용물을 확인하고 먹는다.  100ms")}, 100);}
function getBurger(){order();pay();orderTx();cook();pack();out();confirm();}
// getBurger();

function getBurgerByCallback(){
    setTimeout(
        ()=>{
            console.log("1. 고객이 주문을 한다. 1000ms");
            setTimeout(()=> {
                console.log("2. 결제                  500ms");
                setTimeout(()=> {
                    console.log("3. 조리 측에 주문 전달    300ms")
                    setTimeout(()=> {
                        console.log("4. 햄버거 조리           3000ms")
                        setTimeout(()=> {
                            console.log("5. 햄버거 포장            100ms")
                            setTimeout(()=> {
                                console.log("6. 고객에게 전달          500ms")
                                setTimeout(()=> {
                                    console.log("7. 고객이 내용물을 확인하고 먹는다.  100ms")
                                }, 100);
                            }, 500);
                        }, 100);
                    }, 3000);
                }, 300);
            }, 500);
        }, 1000
)}    

getBurgerByCallback();