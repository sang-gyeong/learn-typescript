function Person(name, age){
    this.name = name;
    this.age = age;
}

// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

const gyeong = new Person('상경', 26); // 생성 되었습니다.
