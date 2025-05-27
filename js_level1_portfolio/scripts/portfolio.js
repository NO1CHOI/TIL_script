// 프로젝트 소개 팝업 알고리즘
// 1. 팝업숨기기
// 2. 썸네일 이미지(a) 클릭 시 팝업 보이기 (popup_bg)
// 3. (팝업 실행 기준) 배경 클릭 시 팝업 숨기기 (popup_bg)

//알고리즘 기준 반복해야 하는 데이터를 변수로 생성하기
//1. 클릭한 대상의 이미지 경로 확인
//2. 위 경로를 팝업 이미지의 경로에 대입.
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a');
console.log(popupBg, thumbNailA);

//1. 팝업 숨기기
popupBg.style.display = 'none';
//변수로 만든 DOM 요소가 여러개일경우 이벤트를 위해 접근할때는 인덱스를 사용해 하나씩 개별접근해야한다.
thumbNailA[0].addEventListener('click',function(){
    console.log(0); // 작동테스트
    console.log(this); // 이벤트객체자동인식 하는지 확인
    console.log(this.children[0].src); // 내가 누른 자식의 src
    console.log(popupBg.children[0].children[0].src); // 팝업 bg의 자식의 자식의 src 확인
    popupShow(); // 팝업출력함수 호출
    popupBg.children[0].children[0].src = this.children[0].src
})
thumbNailA[1].addEventListener('click',function(){
    console.log(1); // 작동테스트
    console.log(this); // 이벤트객체자동인식 하는지 확인
    console.log(this.children[0].src); // 내가 누른 자식의 src
    console.log(popupBg.children[0].children[0].src); // 팝업 bg의 자식의 자식의 src 확인
    popupShow(); // 팝업출력함수 호출
    popupBg.children[0].children[0].src = this.children[0].src
})
// thumbNailA[1].addEventListener('click',popupShow)
thumbNailA[2].addEventListener('click',popupShow)
thumbNailA[3].addEventListener('click',popupShow)
thumbNailA[4].addEventListener('click',popupShow)
thumbNailA[5].addEventListener('click',popupShow)
thumbNailA[6].addEventListener('click',popupShow)
thumbNailA[7].addEventListener('click',popupShow)
thumbNailA[8].addEventListener('click',popupShow)

function popupShow(){
    return popupBg.style.display = 'flex';
}

//배경 클릭 시 팝업 숨기기
popupBg.addEventListener('click',popupClose)

function popupClose(){
    return popupBg.style.display = 'none';
}

// 내가 클릭한 이미지가 팝업으로 떠야함!