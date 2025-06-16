// 스크롤 이벤트 문법
const topBtn = document.querySelector('#top')
topBtn.style.display = 'none'

topBtn.addEventListener('click',(e)=>{
    console.log(e)
    e.preventDefault(); // 태그의 기본이벤트 막기
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    })
})

//검색 폼 복제 변수
const searchClone = document.querySelector('header form').cloneNode(true);
let isSearchClone = false;//안보이면 false 보이면 true

// window.addEventListener('scroll',()=>{실행결과})
window.addEventListener('scroll',()=>{
    const headerBtm = document.querySelector('.bottom');    
    //console.log('스크롤 이벤트 실행중..')
    console.log(window.scrollY)
    if(window.scrollY > 100){
        headerBtm.classList.add('active');
        headerBtm.appendChild(searchClone)
        isSearchClone = true;
    }else{
        if(isSearchClone){//(위) else 100보다 작으면 바로 실행하지 않고 이중검사 후 실행
            headerBtm.classList.remove('active');
            headerBtm.removeChild(searchClone)
            isSearchClone = false;
        }
    }
    //2. 스크롤 이벤트에 따라 맨위로 디자인 변경
    // 맨 위로 숨기기
    // 스크롤 위치가 500보다 크면 맨 위로 보이기 (반대면 숨기기)
    // 맨 위로 클릭 하면 스크롤 Y 0 위치로 올리기
    if(window.scrollY > 500){
        console.log('500임여기')
        topBtn.style.display = 'block'
    }else{
        topBtn.style.display = 'none'
    }
})// 스크롤이벤트 종료위치
