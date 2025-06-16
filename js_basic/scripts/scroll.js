// window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1')
console.log(btn1);

btn1.addEventListener('click',()=>{
    //window.scrollTo(0,200)/* 숫자는 자동으로 px로 변환된다 */
    window.scrollTo({
        left:0,
        top:700,
        behavior:'smooth'
    })
})
// behavior:'smooth'
// 위 동자은 css의 body,html {scroll-behavior:'smmoth';} 와 동일

const btn2 = document.querySelector('#btn2')
console.log(btn2)

btn2.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    })
})

//특정위치로 바로가기, 위치속성 offsetTop 활용방법
const cafeBtn = document.querySelector('#cafe_btn')
const blogBtn = document.querySelector('#blog_btn')
const newsBtn = document.querySelector('#news_btn')
const webtonBtn = document.querySelector('#webton_btn')
const section = document.querySelectorAll('section') // 4개
console.log(cafeBtn, blogBtn,newsBtn,webtonBtn, section)

// blogBtn.addEventListener('click',()=>{
//     window.scrollTo(0,section[0].offsetTop)
// })

// cafeBtn.addEventListener('click',()=>{
//     window.scrollTo(0, section[1].offsetTop)
// })

// newsBtn.addEventListener('click',()=>{
//     window.scrollTo(0, section[2].offsetTop)
// })

// webtonBtn.addEventListener('click',()=>{
//     window.scrollTo(0, section[3].offsetTop)
// })

//for Each 활용 navBtn, section 묶기
const navBtn = document.querySelectorAll('.nav button')
console.log(navBtn)

navBtn.forEach((obj, ind)=>{
    console.log(obj,ind);
    // obj 클릭 이벤트 생성
    obj.addEventListener('click',()=>{
        window.scrollTo({
            left:0,
            top:section[ind].offsetTop,
            behavior:'smooth'
        })
    })
    // 클릭 이벤트 내에서 window.scrollTO 동일 인덱스의 section top 위치 이동
})

//스크롤 상대적 이동 scrollBy
// 이전, 다음 버튼 클릭 시 웹툰 width 만큼 가로스크롤 이동하기 ( 윈도우 x ,toon_wrap 0)
const toonWrap = document.querySelector('.toon_wrap')
const toonNext = document.querySelector('.toon_wrap_all .next')
const toonPrev = document.querySelector('.toon_wrap_all .prev')
console.log(toonNext, toonWrap);

toonNext.addEventListener('click',()=>{
    toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth,0)
})
toonPrev.addEventListener('click',()=>{
    toonWrap.scrollBy(-(toonWrap.children[0].children[0].offsetWidth),0)
})