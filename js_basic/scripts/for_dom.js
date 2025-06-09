//for(변수초기값;조건식;증감식){조건이 참일때 반복구문} 반복종료(조건거짓)
for(let i=0;i<5;i++){console.log(i)}
const li = document.querySelectorAll('ul li');
console.log(li) // 3 li 출력됨
for(let i=1;i<=2;i++){
    li[i].classList.add('list_active');
    li[i].style.backgroundColor = 'darkblue'
    li[i].style.textAlign = 'center';
    li[i].style.color = '#fff';
}

// 태그 2개 이상 다수 변수로 대입할 때 querySelectorAll 선언 후 사용시 변[index]활용하기 (주로 for 반복문과 함께 사용)
//-------------JS DOM 복제 붙여넣기 (데스크탑 내비와 모바일 내비에 주로 활용)
// 붙여넣기 위치 DOM, 복제 DOM 변수 만들기
const section = document.querySelector('section');
const ul = document.querySelector('ul'); // ul DOM 선택 (원본)
const ulClone = ul.cloneNode(true); // ul 자식,자손 포함 복제 (Ctrl+C)
console.log(section, ul,ulClone);

//복제할 요소 붙여넣기! (대상요소의 마지막 자식 위치로 붙여넣기)
section.appendChild(ulClone); //section의 마지막 자식 위치에 복제대상 붙여넣기 (Ctrl+v)