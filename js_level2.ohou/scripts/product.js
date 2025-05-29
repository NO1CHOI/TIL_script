// 상품옵션 선택 시 색상 선택 후 클릭(x) 변경(o) 사이즈 선택 가능, 색상 미선택시 사이즈 선택 불가
// 색상, 사이즈 select 태그 변수 선언
const colorSelect = document.querySelector('select[name=color]')
const sizeSelect =  document.querySelector('select[name=size]')
console.log(colorSelect, sizeSelect)

sizeSelect.disabled = true; // 색상을 고르기 전에 사이즈를 고르지못하게 미리 비활성화한다!

//색상  select를 변경했을 때 이벤트 생성
colorSelect.addEventListener('change',changeFunc)
function changeFunc(){
    return sizeSelect.disabled = false;
}