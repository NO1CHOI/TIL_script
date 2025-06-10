//오늘의 할일 JS
//1.할 일 입력 후
//2.등록 버튼 클릭 (클릭 이벤트 내에서 1번 입력값 인식)
//3."여기에 할일이 등롭됩니다." 기존 li의 다음 형제 위치에 입력한 정보 등록
// 위 알고리즘 3번 작업시 주의사항
// ul태그의 마지막 자식 위치(appendChild)로 li추가 (문자열 생성 x, createElement 가능)

const toInput = document.querySelector('.to')
const toBtn = document.querySelector('#to_btn')
const ul = document.querySelector('ul')
console.log(toInput, toBtn, ul)

toBtn.addEventListener('click',()=>{
    if(toInput.value == ''){//input의 값이 입력되지 않았을 경우
        // 경고창으로 "입력 후 등록해야 합니다."메세지 출력하기
        alert('입력 후 등록해야합니다.')
    }else{
    // console.log(toInput.value);
    // ul.appendChild("<li>acsd<li>") // 문자열 삽입 에러 x 이렇게 하면 오류남!
    let li = document.createElement('li');
    li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`;
    console.log(li);
    ul.appendChild(li);
    //입력값 초기화
    toInput.value = '';

    // 등록된 할일 옆 X 클릭 시 부모 li제거
    const close = document.querySelectorAll('.del_btn');
    //console.log(close)
    for(let i of close){
        console.log(i); // 배열형태가 아닌 객체형태로 출력되서 바로 사용가능한 형태인지 확인
        i.addEventListener('click',()=>{
            i.parentNode.remove();
        })
        //스펜 클릭시 밑줄 그어지게 만들기
        const spanDel = document.querySelectorAll('li span')
        //console.log(spanDel)

        for(let i of spanDel){
    console.log(i);
    i.addEventListener('click',()=>{
        i.parentNode.style.textDecoration = 'line-through'
            })
        }
        }
    }
})

