// 연산자 25/05/16
//증감 연산자 (단항)
let a = 1;
let b = 10;
console.log(a, b);
b = a++;
console.log(a, b);
a = --b;
console.log(a,b);
console.log('---------------------')
// ======================예제2
let x = 5;
//let y =++x; // 1증가된 x 값을 대입받는 y 변수
// 증감 연산은 x변수 자체에 영향을 주기 때문에 일회성 연산으로 +1을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다.
let y =x+1;
console.log(x,y); // 5 6
y = x++; 
console.log(x,y); // 6 5
x = ++y;
console.log(x,y); // 6 6
++x;
console.log(x,y); // 7 6
--y; // 증감연산자는 대입이 없어도 변수에 영향을 준다.
console.log(x, y); // 7 5
x+1; // 더하기,빼기,곱하기,나누기 등 일반 산술 연산자는 대입 연산자가 없으면 변수에 영항을 주지 않는다.
console.log(x, y); // 7 5
console.log('---------------------')
// 연습하기
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
// num1, num2, num3, num4 의 값은? -> 10 20 30 40
console.log(num1, num2, num3, num4)
console.log('---------------------')
num1++;
num2--;
num3++;
num4--;
// num1, num2, num3, num4 의 값은? -> 11 19 31 39
console.log(num1, num2, num3, num4)
console.log('---------------------')
num1 = ++num2;
num2 = num1++;
// num1, num2, num3, num4 의 값은? -? 21 20 31 39
console.log(num1, num2, num3, num4)
console.log('---------------------')
num3 = num1+num2;
num4 = ++num3;
// num1, num2, num3, num4 의 값은?  -> 21 20 42 42
console.log(num1, num2, num3, num4)
console.log('---------------------')
num1 = ++num3 + 10;
num2 = --num4 + 1;
// num1, num2, num3, num4 의 값은? -> 53 42 43 41
console.log(num1, num2, num3, num4)
console.log('---------------------')
// =======================================복합대입연산자
let number = 10;
// number = 15; // 기존값을 제거하고 단순 새로운 값 삽입 X
// number = 5; // 위와 동일  
// number = number + 5; // 기존값을 유지하고 원하는 계사 추가 O
number += 5; // 복합대입 활용(위와 결과 동일)
console.log(number); // 15
number -= 5; // 빼기 복합
console.log(number); //10
number *=5; // 곱하기 복합
console.log(number); //50
number /=5; // 나누기 복합
console.log(number); //10
number %=5; // 나머지 복합 number = number
console.log(number); //0