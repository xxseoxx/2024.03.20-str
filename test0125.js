//프로그래밍 패러다임

    // // 선언형 프로그래밍
    // 결과를 묘사
    // <img>
    // const number = [ 1, 2, 3, 4];
    // const evenNumver = numbers.filter(num=>num%==0);

    // // 절차 지향 프로그램
    // for(let i = 0; i<numbers.length; i++){
    //     const num = numbers[i];
    //     if(num%2==0) evenNumver.push(num);
    // }


    // 객체 지향 프로그램
    //Java 개발자 모집(객체 지향 프로그래머 모집 + 스프링 부트 개발자 모집)
    //Java fundamental language
    //조직화,
    // 객체 = 프로퍼티(변수 값) + 메소드(함수)
    // 주변의 모습을 묘사
    // 자판기 설계(음료 캔 자판기)
    //      절차 지향적 사고
    //      1. 돈을 받는다. 얼마인지 검출한다.
    //      2. 구매 가능한 음료를 표시하고 기다린다.
    //      3. 사용자 제품 선택을 받는다.
    //      4. 캔을 제공한다.
    //      5. 잔돈을 반환한다.
    // 막막?: 돈을 누가 어떻게 검출해? 관리? => Money객체
    //          음료 표시/사용자 선택은 누가 관리? => Serving 객체
    //          캔은 누가?=>Goods 객체
    // 
    // 객체 지향적 설계 (클래스 다이어그램)
    // Money 객체
    // 프로퍼티: MoneyType, GoodsPrice, CardCompanyURL, jangum
    // 메소드: AuthCard(usercard), jangumUp(money), jangumDown(money),
    // Serving 객체
    // 프로퍼티: GoodsAvailable(Goods, Money), UserSelction
    // 메소드: WhatIsAvailable(Goods, Money)


    const Card ={
        CardCompanyURL : "samsungcard.com"
    }
    const MoneyType={
        CHOENWON: 1000,
        OCHOENWON: 5000,
        MANWON: 10000,
        OBAEKWON: 500,
        BAEKWON: 100
    }
    const GoodsPrice={
        MILKIS: 100,
        FANTAORANGE: 1500,
        ZEROCOKE: 1500,
    }