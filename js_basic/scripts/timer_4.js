// 회원가입 버튼 클릭 시 join _msg 에 '가입축하합니다' 메세지 출력되고
const joinBtn = document.querySelector('#join')
const joinMsg = document.querySelector('.join_msg')
console.log(joinBtn, joinMsg)
joinMsg.classList.add('hide') // 초기상태(숨기기)


joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide');
    joinMsg.textContent = '가입 축하합니다.' 
    // 3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide')
    },3000)
})

//결제완료 후 메세지 삭제 , 구글페이지로 이동
const payBtn = document.querySelector('#pay')
const payResetBtn = document.querySelector('#pay_reset')
const payMsg = document.querySelector('.pay_msg')
let payHideMsg;
console.log(payBtn, payMsg)

payMsg.classList.add('pay_hide')
payResetBtn.classList.add('pay_hide')

payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('pay_hide');
    payResetBtn.classList.remove('pay_hide');
    payMsg.textContent = '결제완료! 5초 후 광고 사이트로 이동합니다.';
    payHideMsg = setTimeout(()=>{
        payMsg.classList.add('pay_hide')
        window.location = './timer_3.html'
    },5000)
})

payResetBtn.addEventListener('click',()=>{
    clearTimeout(payHideMsg);
    payResetBtn.classList.add('pay_hide')
    payMsg.textContent = '결제취소되었습니다.'
    console.log('눌리긴함')
})

