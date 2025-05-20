// BOM (browser object model))내장함수
// const msg1 = window.alert('잠시 기다려주세요.')
// const msg1 = window.alert('잘못접근하셨습니다.')
// console.log(msg1);
// const userAge = window.prompt('나이를 입력하세요.');
// console.log(userAge);
// const userprint = window.confirm('인쇄하시겠습니까?');
// console.log(userprint);
// const userInfo = window.open('https://google.com','_blank')
// const userWrite = window.document.write('hello js');
// window.document.write('안녕하세요 자바스크립트!');
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 언선할 필요 없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장함수 : prompt(), comfirm()
// window.print();
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야한다.
//===================================DOM - html Node
const pTag = document.getElementsByTagName('p');
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const actCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(actCls);
console.log(wrapId);
//========================================DOM 객체 속성
// 객체.style = 'CSS 속성 :값';
pTag[0].style = 'background-color:red'; // 무조건 하나
pTag[1].style = 'font-weight:700';
ulCls[0].style = 'border:2px solid blue';
liCls[0].style = 'border-bottom:1px solid red';
liCls[1].style = 'border-bottom:1px solid orange';
liCls[2].style = 'border-bottom:1px solid yellow';
liCls[3].style = 'border-bottom:2px solid green';
actCls[0].style = 'background-color:#eeee';
actCls[1].style = 'background-color:#dddd';
// 위와 같이 style 속성을 이용한 css는 일반 css 선택자와 다르게 가장 우선수위가 높은 개념으로 적용된다. 적용후 모습은 웹 브라우저 F12 개발자도구에서만 확인 가능하다.
//CSS 우선순위 : 자바스크립트 style속성 > ID > Class > Tag
wrapId.style ='padding:30px';
func.style = 'color:red'
//==================================dl
const dlTag = document.getElementsByTagName('dl')
const dtTag = document.getElementsByTagName('dt')
const ddTag = document.getElementsByTagName('dd')
const dtId = document.getElementById('title')
// const dtTag = document.getElementByTagName('dt')[1];
console.log(dlTag)
console.log(dtTag)
console.log(ddTag)
console.log(dtId)
dlTag[0].style = 'background-color:#eee';
dtTag[0].style = 'font-size:2rem';
dtTag[1].style = 'font-size:2rem';
ddTag[0].style = 'border:2px solid blue';
ddTag[1].style = 'border:2px solid blue';
dtId.style = 'background-color:lightyellow';
//=============================================
console.log('==================================================')
// ES6 querySeletor 이용 DOM 선택하기
const orderO1 = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li')
const orderToday = document.querySelector('#today')
const orderCls = document.querySelector('.order .item')
console.log(orderO1);
console.log(orderLi);
console.log(orderToday);
console.log(orderCls);
orderLi[0].style = 'font-size:2.5rem';
orderToday.style = 'font-weight:700';
orderCls.style = 'background-color:lightpink';
//================================================
console.log('=========================================')
const aTag = document.querySelectorAll('nav a')
const nav = document.querySelector('nav')
const gnb = document.querySelectorAll('.gnb > li')
const lnb = document.querySelector('li .lnb')
console.log(aTag);
console.log(nav);
console.log(gnb);
console.log(lnb);
aTag[0].style = 'color:#000';
aTag[1].style = 'color:#000';
aTag[2].style = 'color:#000';
aTag[3].style = 'color:#000';
nav.style = 'background-color:lightblue';
gnb[0].style = 'border: 1px solid red';
gnb[1].style = 'border: 2px solid blue';
lnb.style = 'background-color:coral';
// 객체.속성 = '값';
// 객체.속성.속성 = '값';
lnb.style.backgroundColor = 'green';
//================================================
console.log('=========================================')
let a = 10;
let b = "10";
console.log(a, typeof a); // 10 number
console.log(b, typeof b); // 10 string
// let age = prompt('당신의 나이는?');
// alert(typeof age);
//prompt 로 사용자가 입력하는 값은 무조건 문자(String)으로 처리된다 (암시적형변환)
// 자동으로 형변환 된 데이터 타입이 문자인 경우 숫자로 바꾸고싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.ㄴ
// const age = Number(prompt('당신의 나이는?'));
// (위) 프로그래밍 동작 순서
// 1. prompt('당신의 나이는?') 사용자가 입력한 값을 문자로 자동변환
// 2. Number() prompt가 문자로 변환한값을 숫자로 면시적변환
// 3. age = : 변수 age에 숫자로 변환한 값을 대입
// console.log(`올해 당신의 나이는 ${age}살입니다.`)
// console.log(`올해 당신의 나이는 ${age+1}살입니다.`)
// console.log(`올해 당신의 나이는 ${Number(age)+1}살입니다.`)
// 이 경우 prompt가 받는 값을 숫자로 변환시켜야함!
//================================================
console.log('====================================쇼핑몰 구입 알고리즘')
//상품 1개 가격 기준 15700원
//현재 이벤트중 1+ 1
//사용자가 구입할 물건 개수 정하기
//개수에 따라 최종 가격 구하기
//결과 예) 구입할 물건은 ? 개이고 이벤트 상품 ? 개가 추가됩니다. 총 결제 가격은 ? 입니다.
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하게요.'));
const eventNum = productQa; //이벤트 증정개수
const total = price*eventNum; //최종 결제 가격
console.log(`구입할 물건은 ${eventNum}개 이고 이벤트 상품 ${eventNum}개가 추가됩니다. 총 결제 가격은 ${total}원 입니다.`)