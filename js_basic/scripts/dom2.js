//5/22 이벤트 함수
//함수의 매개변수, 익명함수, 화살표함수
//function 함수명(매개변수,매개변수){실행}
//const 변수명 = function(매개변수){실행}
//const 변수명 = (매개변수) => {실행}
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');

console.log(bg, bg1Btn);
bg.style.height = '100vh';
bg.style.backgroundColor = 'lightpink';

//버튼으로 배경변경제어 알고리즘
//이벤트
bg1Btn.addEventListener('mouseover',bgChangeBtn)
bg1Btn.addEventListener('mouseout',bgChangeBtnOut)
// bg2Btn.addEventListener('mouseout',bgChange('coral'))
// (위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능하다.
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral'); // 익명함수 내 매개변수가 있는 함수 호출
})
//매개변수 ver 함수
function bgChange(color){
    return bg.style.backgroundColor = color;
}
//화살표 함수 내 매개변수가 있는 함수 호풀
bg2Btn.addEventListener('mouseout',()=>bgChange('lightblue'))
//함수
function bgChangeBtn(){
    bg.style.backgroundColor = 'aqua';
    bg.style.padding = '20px';
    return
}
function bgChangeBtnOut(){
    return bg.style.backgroundColor = 'lightpink';
}
