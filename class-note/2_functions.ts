// 함수의 파라미터에 타입을 정의하는 방식
function sum3(a: number, b: number) {
    return a + b;
}

// 함수의 변환 값에 타입을 정의하는 방식
function add2(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식***(가장 기본적)
function sum4(a: number, b: number): number {
    return a + b;
}

sum(10, 20); //30


// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}

log('hello world');
log('hello ts', 'abc');

