const aniImg = document.querySelector('main > img');
// aniImg.style.transform = 'translate(10px, 10px)';
const topBtn = document.querySelector('.control .top');
const downBtn = document.querySelector('.control .down');
const leftBtn = document.querySelector('.control .left');
const rightBtn = document.querySelector('.control .right');
const inputMove = document.querySelector('.io input');
let currentY = 0; // 이미지의 y 초기좌표
let currentX = 0; // 이미지의 X 초기좌표
console.log(topBtn, downBtn, leftBtn, rightBtn,inputMove);

// down 버튼 클릭 시 이미지를 아래방향으로 20px 이동시키기
downBtn.addEventListener('click',downFunc);
function downFunc(){
    currentY += 20;
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`;
}

//위로 버튼 누르면 위로가게 해보자!
topBtn.addEventListener('click',topFunc)
function topFunc(){
    currentY -=20;
    return aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
}
//왼쪽으로 가게 해보자!
leftBtn.addEventListener('click',leftFunc)
function leftFunc(){
    currentX += 20;
    return aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
}

//오른쪽으로 가게 해보자!
rightBtn.addEventListener('click',rightFunc)
function rightFunc(){
    currentX -= 20;
    return aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
}

//input 입력창에 허용키를 입력하고 enter 를 누르면 캐릭터가 이동하는 알고리즘
// 허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown',function(e){
    //console.log(e)
    if(e.key === 'Enter'){
        // 왼쪽 입력 후 enter 실행 시 이미지가 왼쪽 20px 만큼 이동
        if(inputMove.value === '왼쪽'){
            currentX -= 20;
            inputMoveFunc();
            // aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
            // inputMove.value=''; // 엔터를 치고나서 없어지게 만드는것!
        }else if(inputMove.value === '오른쪽'){//조건1 거짓일 때 검사하는 조건2
            currentX += 20;
            inputMoveFunc();
            // aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
            // inputMove.value=''; // 엔터를 치고나서 없어지게 만드는것!
        }else if(inputMove.value === '위'){//조건 1,2 거짓일때 검사하는 조건3
            currentY -= 20;
            inputMoveFunc();
            // aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
            // inputMove.value=''; // 엔터를 치고나서 없어지게 만드는것!
        }else if(inputMove.value === '아래'){
            currentY += 20;
            inputMoveFunc();
            // aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
            // inputMove.value=''; // 엔터를 치고나서 없어지게 만드는것!
        }
    }
})

function inputMoveFunc(){
    aniImg.style.transform = `translate(${currentX}px,${currentY}px)`;
    return inputMove.value=''; // 엔터를 치고나서 없어지게 만드는것!
}