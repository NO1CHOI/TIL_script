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
//------------------------------
//네이버 로그인 알고리즘
/* 
조건1) 아이디와 비밀번호 모두 입력하지 않고 로그인 클릭 시
조건1 결과 ) 아이디 또는 전화번호를 입력해주세요.
조건2) 아이디를 입력하고 비밀번호를 입력하세요 클릭 시
조건2 결과 ) 비밀번호를 입력해주세요.
조건3)아이디와 비밀번호 모두 입력하고 로그인 클릭 시 정보가 틀렸을 때
조건3 결과 ) 아이디, 비밀번호 입력정보가 잘못되었습니다. 다시 입력해주세요.
조건4) 영수증 퀴즈와 `아이디(로그인 전화번호, 로그인 전용 아이디), 비밀번호 또는 자동입력 방지 문자를 잘못 입력했습니다. `아이디 비밀번호를 확인해주세요.`메세지 출력
*/
// 조건1) 아이디와 비밀번호 모두 입력하지 않고 로그인 클릭 시
// 조건1 결과 ) 아이디 또는 전화번호를 입력해주세요.
const userId = document.querySelector('input[name=user_id]');
const userPw = document.querySelector('input[name=user_pw');
const errorMsg = document.querySelector('#login_frm .error_msg');
const loginBtn = document.querySelector('#login_btn');
console.log(userId, userPw, errorMsg, loginBtn);

loginBtn.addEventListener('click',()=>{
    // console.log(0) //콘솔확인용
    // if(userId.value == ''&& userPw.value == ''){
    //     errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요.'
    // }
    //삼항조건 활용 조건1
    //조건식 ? 조건식참결과 : 조건식거짓결과
    //조건결과대입변수 = 조건식 ? 조건식참결과 : 조건식거짓결과
    errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해주세요.' : '';
})
