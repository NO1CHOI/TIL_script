function greeting(){
    return console.log('hello');
}
//setInterval(greeting,3000);
//타이머 함수 setInterval 일정시간바복
// num1 이라는 애를 1초간격으로 1씩 증가시키고싶다!
let num1 = 0;
function num1Func(){
    num1++;
    if(num1>4){num1=1}
    console.log(num1);
}
//setInterval(num1Func,1000)

let num2 = 0;

function num2Func(){
    console.log(num2);
    num2++;
    if(num2>5){num2=0};
}
//setInterval(num2Func,1000)

//6~0 출력타이머 만들기 654321065432106543210..

let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--
    if(num3<0){num3=6};
}
setInterval(num3Func,1000)
