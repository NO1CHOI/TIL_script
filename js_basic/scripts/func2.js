/* func2.js */
let b = 20; // 전역변수 (블록 {}밖)
let c = 30; // 전역변수 (블록 {}밖)
function test(){ // 블록 선언(여기부터 지역시작)
    let a = 10; // 지역번수 (블록 {}안)
    console.log(a+b);
} // 블록 종료 (지역종료)
test(); //함수호출(함수밖에서)
// console.log(a); // 지역변수는 전역에서 호출하면 에러!
// console.log(a+b); // 위와 동일 에러
console.log(b+c); // 지역변수기 때문에 전역스코프 위치에 가능
console.log('==========================');
let d = 5; // 전역변수
let e = 15; // 전역변수
let f;
let g;
scropeTest(); //호출 (함수실행)
console.log(f); 
// 함수 대기상태는 절대 실행되지 않는다. 호출을 해야만 실행된다!
function scropeTest (){ 
    f = 25; // 지역변수
    g = 35; // 지역변수
    console.log(d+f); // O 5 + 25
    console.log(e+g); // O 15 + 35
}
console.log(g+d); // X
console.log(d+e); //O 
console.log('==========================');
// 함수선언 대기상태 안에서 다른 함수를 호출할 수 있다.
let x = 1;
let y;
function func1(){ // 함수 대기 상태 func1
    y = 5;
    console.log(x+y);
}
function func2(){ // 함수 대기 상태 func2
    let z = 10;
    func1 (); // 6
    console.log(x+y+z);
}
func1 (); // 6
func2 (); // 16
console.log('=========================헨젤과 그레텔 알고리즘');
function storyFunc1(){
    let person = ['헨젤','그레텔'];
    let src ='조약돌';
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`)
}
function storyFunc2(){
    let person = ['헨젤','그레텔'];
    let src ='빵부스러기';
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`)
}
storyFunc1(); // 함수호출
storyFunc2(); // 함수호출
console.log('=========================헨젤과 그레텔 알고리즘 매개변수');
function storyFunc(src){
    let person = ['헨젤','그레텔'];
    // let src ='조약돌';
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`)
}
storyFunc('조약돌')
storyFunc('빵부스러기')
console.log('=========================커피 레피시(기본값 포함)');
// function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다.
// function coffeeFunc1(data1){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
// function coffeeFunc1(data1, data2){} 함수를 생성한다. 결과 실생 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
// function coffeeFunc1(data1){}
// coffeeFunc1(10);
//(위)프로그래밍 해석: 함수 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성완료. 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
// 매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 합니다. function 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1, data2=0.5){
    let water = data1+'컵 물을 채운다';
    let espresso = data2+'샷 에스프레소를 넣는다.';
    console.log(water, espresso);
}
coffeeFunc1();
coffeeFunc1(2, 1);
coffeeFunc1(3, 5);
console.log('=========================커피주문 알고리즘(고객입장)');
function customer(menu, num=1){
    const msg = '잔 주문완료 했습니다.'
    console.log(menu, num, msg)
}
customer('카페라떼'); // 기본값이라 두버째 매개변수 생략
customer('아메리카노', 2); // 기본값이 아니라 매개변수 모두 작성
customer('녹차라떼');
customer('아메리카노', 4);
console.log('=========================커피주문 알고리즘(고객입장) + 추가');
function customer2(hotIce, menu, num=1){
    const msg = '잔 주문완료 했습니다.'
    const type = ['따뜻한','차가운']
    console.log(type[hotIce], menu, num, msg)
}
customer2(0, '카페라떼',1); 
customer2(1, '아메리카노', 2);
customer2(0, '녹차라떼');
customer2(1, '아메리카노', 4);
console.log('=========================함수의 리턴(return)');
//더하기 알고리즘
// 함수 내부 {}는 대기장소로 호출하지 않는 한 절대 실행되지 않는다.
// 함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행할 수 있는 위치다.
// 함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는것을 말한다.
function plusFunc(num){
    let total = num+1; 
    return total; // 리턴으로 실행함수가 아닌 값만 보냈다면?
}
plusFunc(2);
// 호출 할때 리턴이 보낸 반환값을 묶어주는 실행ㅎ마수를 별도로 작성한다.
console.log(plusFunc(2));
console.log('=========================구구단 알고리즘(리턴과 매개변수 활용)');
let dan99 = ''; // 전역변수(초기값) 앞으로 문자 데이터가 들어올 예정으로 빈문자초기값
function dan99Func(num){
    //기본 dan99 변수에 우측 데이터를 더해서 대입하라
    dan99 += `${num} x 1 = ${num * 1} `;
    dan99 += `${num} x 2 = ${num * 2} `;
    dan99 += `${num} x 3 = ${num * 3} `;
    dan99 += `${num} x 4 = ${num * 4} `;
    dan99 += `${num} x 5 = ${num * 5} `;
    dan99 += `${num} x 6 = ${num * 6} `;
    dan99 += `${num} x 7 = ${num * 7} `;
    dan99 += `${num} x 8 = ${num * 8} `;
    dan99 += `${num} x 9 = ${num * 9} `;
    return dan99;
}
console.log(dan99Func(1587));
//dan99Func(2); // 구구단 2단
// 27900원을 입력했을 때(가격은 달라 질 수있음)
//입력한 가격에 대한 0 ~ 50% 할인율 동시출력
// 10#할인율 계산법: 가격 *0.9
// 4% 할인율 계산법 :100-4= 96 ->0.96
// 결과 예시) 5% 할인율 결과 ??? 
console.log('=======================할인율 계산기');
let discountResult ='';
function discount(num){
    discountResult = `5% 할인율 결과 : ${num * 0.95}원`
    discountResult += `10% 할인율 결과 : ${num * 0.90}원`
    discountResult += `20% 할인율 결과 : ${num * 0.80}원`
    discountResult += `30% 할인율 결과 : ${num * 0.7}원`
    discountResult += `40% 할인율 결과 : ${num * 0.6}원`
    discountResult += `50% 할인율 결과 : ${num * 0.5}원`
    return discountResult;
};
// discount(27500);
console.log(discount(27500));
//====================================================5/20
console.log('=======================익명함수');
// 익명함수란? 변수 내 function 키워드를 지정해 대입하는 함수
// 함수 자체의 이름이 아닌 변수 이름에 의존해서 할당되기 때문에 익명함수라 부른다.
// function greeting(){} // 일반함수
const greeting = function(){
    console.log('hello');
} //익명함수
greeting(); // 익명함수 호출은 함수명이 아닌 변수명으로 호출한다.
// 익명 함수
console.log('=======================화살표함수 ES6이후');
// 화살표 함수는 일반함수가 아닌 익명함수일때 함수를 간결하게 줄이는 목적으로 사용한다.
//function을 => 기호로 바꿔서 사용한다.
// 대입연산자(=) 와 화살표 함수(=>)를 붙여서 사용할 수 없기 떄문에 매개변수와 함수선언표시 순서를 바꿔서 =()=> 로 사용한다.
// 일반함수일때
function bab(num){
    return '밥'+num+'공기 주세요';
}
console.log(bab(1))
// 익명함수와 화살표 함수일때
const bab2 = (num) => { return '밥'+num+'공기 주세요'; }
console.log(bab(2))
//함수 호출할때마다 아래와 같은 결과 출력하기 (매개변수 활용)
// const 변수 = (매개변수) => {return 함수변환값}
// 변수() // 익명함수 호출식
//밥 주세요
//반찬 주세요
//국 주세요
const bab3 = (menu) => { return menu+'주세요'};
console.log(bab3('국'));
console.log(bab3('반찬'));
console.log(bab3('밥'));
