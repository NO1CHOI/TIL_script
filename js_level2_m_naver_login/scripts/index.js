//main , lang_group 기준 알고리즘
// 초기설정 : .lang_open 한국어~ 중국어 옵션 숨기기
// #lang_select 클릭 시 .lang_open 보이기
// .lang_open이 보이는 상태라면 #lang_select 클릭 시 .lang_open 숨기기
// 변수 생성 -> 이벤트 제작 -> 이벤트 만족 시 실행 함수 (중간중간 콘솔 체크)
//-----------------------------언어설정 숨기기
const langGroup = document.querySelector('main .lang_group')
const langSelect = document.querySelector('#lang_select')
const langOpen = document.querySelector('.lang_open')

console.log(langGroup,langSelect,langOpen);

//초기설정 옵션 부분없애기
langOpen.style.display = 'none';

//-------------------방법 1
// langSelect.addEventListener('click',langWrapOpen);
// //보이게하는 함수
// function langWrapOpen(){
//     if(langOpen.style.display == 'none'){
//         langOpen.style.display = 'flex';
//         console.log('오류없음!!!보이기!!')
//     }else{
//         langOpen.style.display = 'none';
//         console.log('오류없음!!!안보임!!!')
//     }
// }

//-------------방법 2
let openif = false; //초기 숨겨진상태
langSelect.addEventListener('click',()=>{
    if(openif == false){
        //langOpen 숨기기상태면 보이기
        langOpen.style.display = 'flex';
        openif = true; //상태값 변경
    }else if(openif == true){
        langOpen.style.display = 'none';
        openif = false;
    }
})

