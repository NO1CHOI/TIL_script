// 인스타 알고리즘
// 1.프로필 클릭 시 개인 프로필 페이지로 이동기능 (o) - 페이지 제작 필요

const profileDOM = document.querySelector('.profile');
console.log(profileDOM);

profileDOM.addEventListener('click',profileGo)

function profileGo(){
    return window.location.href = 'insta_profile.html'
}

// 2.우측 ... 메뉴 클릭 시 저장~ 신고 등 기능 실행 (o)
// 3.사진 한번 터치 시 반응없음 
// 4.사진 두번 터치 시 좋아요 자동 등록 

const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img')
console.log(photo, likeImg);
console.log(likeImg.src);
//객체.속성 // 속성읽기
//객체.속성=값 // 속성 값 변경

photo.addEventListener('dblclick',likeOn)

function likeOn(){
    console.log('test')
    return likeImg.src = './images/icons/like_on.png';
}

// 5.좋아요 아이콘 한번 터치 시 좋아요, 다시 터치 시 좋아요 해제 반복 (o) 
// 이미지 더블클릭 하기 전 기준

likeImg.addEventListener('click',likeOn);

// 6.댓글 아이콘 터치 시 댓글 입력창 실행, 실행화면에서 바깥쪽 영역 터치 시 댓글 입력창 닫힘 
// 7.공유 아이콘 터치 시 공유 가능 계정들 표시된 창 실행, 바깥쪽 영역 터치 시 닫힘  (o)
// 8.즐겨찾기 아이콘 터치 시 즐겨찾기 저장이 됨과 동시에 컬렉션 선택 화면 출력, 바깥쪽 영역 터치 시 닫힘 
// 9.글 1줄, 날짜만 미리 표시, 글 터치 시 전체 내용 펼치기 (o)

const storyDOM = document.querySelector('.contents .story');
const dateDOM = document.querySelector('.contents .date');
const instaTag = document.querySelector('.tag')

console.log(storyDOM, dateDOM);
instaTag.style.display = 'none'; // 함수를 생성하지않고 바로 작성한 이유는 즉시 실행되고 반복되는게 아니라서
// 글 클릭시 태그가 다시 보이게 하려면

storyDOM.addEventListener('click',tagDisplay)

function tagDisplay(){
    return instaTag.style.display = 'block';
}

// 10.글 터치시 전체 내용 펼치기 (o)
// 11.날짜 터치 기능없음 (o)
// 12.태그 클릭시 태그 관련된 게시글들 열림 

// const instaTag = document.querySelector('.tag')
console.log(instaTag)

instaTag.addEventListener('click',tagGo)

function tagGo(){
    return window.location.href = 'insta_tag.html'
}
// 별도의 동적 기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크걸기
// 동적기능 예) 해외IP접속차단, 동일 ip접속차단, 성인사이트 접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무 확인등
// 눌러지는 느낌이 들게 만드려면 커서포인트로 변경하는방법이있다

// 추가 페이지 목록 )
// 프로필 페이지 (insta_profile.html)
// 태그 사용 게시글 (insta_tag)
