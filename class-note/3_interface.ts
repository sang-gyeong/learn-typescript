interface User{
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age : 10,
    name: '캡틴'
}
getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number
}

let sum: SumFunction;
sum = function(a: number, b: number): number{
    return a + b;
}

// 인덱싱
interface StringArray{
    [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // 'a'


// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp //키 밸류 타입을 지정가능 (string-정규표현식)
}

const obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj).forEach(function(){
    // 위에 타입을 지정함으로써, 이 안에 들어오는 값들에 대한 정의가 명확히 될 것.
    // 이를 추론이라고 한다.
})


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

const captain: Developer={
    age: 100,
    language: 'hi',
    name:'캡틴',
}




