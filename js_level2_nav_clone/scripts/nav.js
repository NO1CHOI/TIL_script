//데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpen, gnb, gnbClone);
//클론 복제 넣기
mNavOpen.appendChild(gnbClone);

// 데스크탑 nav-lnb 숨기기
// 모바일 m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb');
const mNavWrap = document.querySelector('.m_nav_wrap');
console.log(navLnb, mNavWrap);

// 모바일 애니메이션 주고싶어서 일단 적용해봄
// mNavWrap.style.display = 'none' 
mNavWrap.style.height = '0'

//nab lnb는 5개이기 때문에 이걸 숨기려면 for 반복문을 쓰는게 좋다
for(let i=0;i<5;i++){
    navLnb[i].style.display ='none'
}

//nav에 마우스 올렸을때 lnb(navLnb), lnb_bg보이기
const nav = document.querySelector('nav')
const lnbBg = document.querySelector('.lnb_bg')
console.log(nav, lnbBg)
lnbBg.style.display = 'none';

//마우스 올렸을때
nav.addEventListener('mouseover',()=>{
    lnbBg.style.display = 'block';
    for(let i=0;i<navLnb.length;i++){
        navLnb[i].style.display ='block'
    }
})

//마우스나갈때
nav.addEventListener('mouseout',()=>{
    lnbBg.style.display = 'none';
    for(let i=0;i<navLnb.length;i++){
        navLnb[i].style.display ='none'
    }
})

//모바일 메뉴 클릭 시 m_nav_wrap 보이기
const mNavBtn = document.querySelector('.m_nav')
const closeBtn = document.querySelector('.close')
console.log(mNavBtn)

//애니메이션
mNavWrap.style.transition = 'height 0.3s linear'

mNavBtn.addEventListener('click',()=>{
    // mNavWrap.style.display ='block'
    mNavWrap.style.height = '100vh'
})

// X 클릭 시 m_nav_wrap 숨기기
closeBtn.addEventListener('click',()=>{
    // mNavWrap.style.display ='none'
    mNavWrap.style.height = '0'
})