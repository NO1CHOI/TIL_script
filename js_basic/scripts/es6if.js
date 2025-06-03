// 삼항조건연산자기본문법
// 조건? 조건이참일때결과 : 조건이거짓일때결과;
let x = 5;
let y = x+10;
//삼항조건의 참 or 거짓 결과가 콘솔 로그에 출력되는 형태
console.log(y==15 ? 'o':'x');
let total = x>10 ? 'o':'x';
//alert(total);

//연습2. 성인 /미성년자 구분하기
// 18살 이상이면 '성인입니다.' 아니면 '미성년자입니다.'
// const useAge = prompt('당신의 나이는?')
// total = useAge>=18 ? '성인입니다.':'미성년자입니다.';
// console.log(total);

//봄 500점, 여름 600점
const game_score = [{
    name:'봄', //game_score[0].name
    score:700, // game_score[0].score
},{
    name:'여름',
    score:600,
}]
console.log(game_score);
//오늘의 1등은  00이고 점수는 000입니다!
// 조건 예시) 봄이가 여름이보다 점수가 더 큰가?
// 크면 봄이가 1등
// 작으면 여름이가 1등
// total = 조건 ? 참 : 거짓;
total =game_score[0].score > game_score[1].score ? game_score[0] : game_score[1];
console.log(game_score[0])
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`)
//-------------------삼항조건 + 리뷰 JS
const re = document.querySelector('textarea[name=re]')
const reBtn = document.querySelector('#re_btn')
console.log(re, reBtn)

reBtn.addEventListener('click',()=>{
    // 콘솔테스트 : 리뷰내용 출력
    console.log(re.value);
    // 콘솔테스트 : 리뷰글자 수 출력
    console.log(re.value.length);
    //result = 조건 ? 참 : 거짓;
    //리뷰 내용이 100자 이상인가?
    //100자 이상이면 등록완료
    // 100자 이하면 100자 이상 입력하세요.
    result = re.value.length>100 ? '등록완료' : '100자 이상등록하세요.';
    alert(result);
})
// 쇼핑 수량과 가격 알고리즘
// 1개 가격 기준 12500원
// 교핑몰 상품 데이터 베이스
const productDB = [{
    name:'떡닭도리탕',
    price:12500,
    stock:10, // 재고슈량 (최대구매개수)
},{
    name:'꼬막비빔장',
    price:5800,
    stock:20,
}]
console.log(productDB[0],productDB[1]);
//DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.price');
console.log(numInput, minusBtn, plusBtn, priceP);

// 증가버튼 클릭 시 재고수량 만큼 증가하고 재고수량 오버 시 '최고구매수량입니다.' 경고창 출력
// 주문수량 초기셋팅
let num = 1; 
let result = ''; // 결과출력 담을 변수
numInput.value = num;
// 증가버튼 클릭 시 재고수량만큼 수량 오버 시 경고창 출력 함수
plusBtn.addEventListener('click',()=>{
    // 조건 : 현재 수량(num)이 상품 수량(productDB[0])보다 크거나 같은가?
    // 참이면 '최대구매수량입니다.
    // 거짓이면 '수량증가'
    result = num >= productDB[0].stock ? '최대구매수량입니다.': ++num
    numOperatorFunc(0);
    // numInput.value = num;
    // priceP.textContent = (num*productDB[0].price).toLocaleString('ko-kr')+'원';
    // console.log(result); 
})

//감소버튼 클릭 시 현재 수량보다 1보다 작거나 같으면 '최소 구매수량입니다. 아니면 수량감소
minusBtn.addEventListener('click',()=>{
    result = num <= 1 ? '최소구매수량입니다.': --num;
    numOperatorFunc(0);
    // numInput.value = num;
    // priceP.textContent = (num*productDB[0].price).toLocaleString('ko-kr')+'원';
    // console.log(result);
})

//함수로 정리하기
function numOperatorFunc(index){
    numInput.value = num;
    priceP.textContent = (num*productDB[index].price).toLocaleString('ko-kr')+'원';
    console.log(result);
}