// for (초기변수; 조건문; 증감식){조건문이 참일때 반복실행결과}
// "자바스크립트" 문자열 10번반복
for(let i=1;i<11;i++){
    console.log('자바스크립트'+i);
}
console.log('-------------------------')
// "1월~ 12월" 12번 반복
// 개발자가 화면에 출력하고 싶은 첫번째 번호가 for 문의 초기변수에들어가는 값이된다
for(let i=1; i<=12; i++){
    console.log(i+'월');
}
console.log('-------------------------')
// 6월~ 12월 반복출력
for(let i=6; i<=12; i++){
    console.log(i+'월');
}
console.log('-------------------------')
const coffee =['아메리카노','카페라떼','에스프레소','녹차라떼','돌체라떼','차이라떼'];
console.log(coffee);
for(let i=0; i<6; i++){
    console.log(coffee[i]);
}
// 1번 메뉴 아메리카노
// 2번 메뉴 카페라떼 .. .반복
for(let i=0; i<coffee.length; i++){
    console.log(`${i+1}번 메뉴 ${coffee[i]}`)
}
console.log('-----------------------역순')
//역순 카페 메뉴 출력
for(let i=coffee.length-1; i>=0; i--){
    console.log((i)+ '번 메뉴 ' +coffee[i])
}
console.log('----------------------')
//구구단 2단~ 9단 출력하기
// 2단 2x1 = 2 형태로 출력하기
for(let i=1;i<10;i++){
    console.log(`2 X ${i} = ${i*2}`)
}
// for 반복 + if 조건
// 1~ 20까지 출력 반복문
for(let i=1;i<=20;i++){
    // console.log(i) // 콘솔확인
    // 조건문 if 활용 1~ 20까지 반복숫자 중 홀수만 출력 
    // 숫자%2 == 1 홀수일때
    // 숫자%2 == 0 짝수일때
    if(i%2 == 1){ // 홀수인 숫자들만 출력
        console.log(i) 
    }
}
console.log('----------------------')
//10~ 20까지 역순으로 짝수만 출력하는 반복문
for(let i=20;i>=10;i--){
    // console.log(i) // 콘솔확인
    if(i%2 ==0){
        console.log(i)
    }
}
console.log('----------------------')
const navA = document.querySelectorAll('nav a');
console.log(navA);
for(let i=0;i<navA.length;i++){
    //console.log(navA[i]);
    //모든 a 글자 색 빨강
    //navA[i].style.color = 'red'; // 전부 빨강으로 만들기
    //navA[0].style.color = 'red'; // 한개만 만들기
    //홀수 a는 빨강, 짝수 a는 파랑
    if(i%2 == 1){
        // navA[i].style.color = 'red'
        navA[i].classList.add('odd')
    }else {
        // navA[i].style.color = 'green'
        navA[i].classList.add('even')
    }
}
console.log('----------------------')
//li 변수만들고 배경색 노랑 변경
const mainList = document.querySelectorAll('.list li')
console.log(mainList) // 콘솔 확인
for(let i=0;i<=mainList.length; i++){
    mainList[0].style.backgroundColor = 'lightblue';
    mainList[3].style.backgroundColor = 'yellow';
}
