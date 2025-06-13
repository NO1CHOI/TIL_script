// html li 상품 1개 준비 후 js를 이용한 다수의 상푸 ㅁ복제 준비
//1. 복제 전 복제 대상 선택
const productLi = document.querySelector('.product_list li')
console.log(productLi)
//2. (위) 오류 없는거 확인 후 복제변수 생성
const productLiClone = productLi.cloneNode(true);
//3. (위) 복제 후 붙여넣기 할 위치 변수 선택
const productUl = document.querySelector('.product_list');
// //4. (위) 오류 없으면 마지막 붙여넣기 진행
// productUl.appendChild(productLiClone);

// console.log(productLi, productLiClone, productUl);

//반복문 활용 7개 붙여넣기
for(let i=0;i<7;i++){
    const productLiClone = productLi.cloneNode(true);
    productUl.appendChild(productLiClone);
}

// 슬라이드 애니메이션 추가(타이머함수 활용)
const slideContainer = document.querySelectorAll('.slide_container')
console.log(slideContainer)

let num = 0;
/* 1920 / 4 = 480px */
// 0 = 480* 0
// 480 = 480*1
// 960 = 480*2
// ... 이렇게 이동한다
const productTimer = setInterval(()=>{
    //12345012345012345...
    num++
    if(num>5){num=0};
    for(let i of slideContainer){
        i.style.transform = `translateX(-${num*480}px)`
    }
    console.log(num)
},500)
