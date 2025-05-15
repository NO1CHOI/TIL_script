/* object_data.js | 25/05/15 배열공부*/
// const yoil = ['월','화','수','목','금','토','일'];
const yoil = new Array('월','화','수','목','금','토','일');
console.log(yoil);
console.log(yoil[0]);
console.log(yoil[1]);
console.log(yoil[2]);
console.log('-------------------')
//=========색상배열
const colorArray = ['빨강','주황','노랑','파랑','초록','보라','검정'];
//콘솔 결과 예시 : 빨강 노랑 보라 초록
console.log(colorArray)
console.log(colorArray[0],colorArray[2],colorArray[5],colorArray[4]);
//콘솔 결과 예시 : 제일 좋아하는 색상은 주황, 파랑, 보라색 입니다.
console.log(`제일 좋아하는 색상은 ${colorArray[1]},${colorArray[3]},${colorArray[5]}색 입니다.`)
console.log('-------------------')
// 과일 역순으로 출력하기
const fruitArray = ['바나나','딸기','망고','사과','귤'];
console.log(fruitArray); // 콘솔 확인하기
console.log(fruitArray.reverse(fruitArray)); // 역순으로 배치하기
console.log(fruitArray[4],fruitArray[3],fruitArray[2],fruitArray[1],fruitArray[0])
console.log('-------------------')
// (위) 요일배열과 새로운 날씨카드배열 활용 문자 출력하기
const weatherCard = ['비','눈','맑음','흐림'];
console.log(weatherCard);
// 목요일 날씨 : 비
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`)
// 금요일 날씨 : 맑음
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`)
//================================객체와 배열
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:160,
    actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
    releaseDate:'2025.05.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고...',
}
const movieInfo_v2 = {
    name:'파과',
    director:'민규동',
    genre:['드라마','미스터리','액션'],
    rating:122,
    actor:['이혜영','김성철','연우진','김무열','신시아'],
    releaseDate:'2025.04.30',
    age:15,
    story:'지킬 게 생긴 킬러 VS 잃을 게 없는 킬러',
}
// 동일한 분류의 객체가 많은 경우 묶는 방법
const movieAll = [
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:160,
        actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
        releaseDate:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    },{
        name:'파과',
        director:'민규동',
        genre:['드라마','미스터리','액션'],
        rating:122,
        actor:['이혜영','김성철','연우진','김무열','신시아'],
        releaseDate:'2025.04.30',
        age:15,
        story:'지킬 게 생긴 킬러 VS 잃을 게 없는 킬러',
    }
]
console.log(movieAll);
// 감독 : 크리스토퍼 맥쿼리
// 장르 : 액션 / 169분
// 등급 : 15세 이상 관람가
console.log(`감독 : ${movieAll[0].director}`);
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`)
console.log(`등급 : ${movieAll[0].age}세 이상 관람가 `)
console.log('-------------------')
//===============================산술연산자
const greeting = 'hello';
const lang = ['figma','html','css'];
//hello figma
console.log(greeting+lang[0]);
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log(num1+num7);
console.log(num1+global);
console.log((num1+num7)+global);
// ============= 빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여있을시 자동으로 숫자로 형변환시킨다.
const data1 = 1;
const data7 = "7";
console.log(data1+data7); // 17
console.log(data1-data7); // -6
console.log(data1*data7); // 7
console.log(data1/data7); // 0.14285714285714285
console.log(data1%data7); // 1
console.log(data1**data7); // 1
console.log(typeof data7); // string
console.log(typeof (data1+data7)); // string
console.log(typeof (data1-data7)); // number