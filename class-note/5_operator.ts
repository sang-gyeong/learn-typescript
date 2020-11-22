// function logMessage(value: string){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);



function logMessage(value: string | number){
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number!');
}

logMessage('hello');
logMessage(100);



interface FEDeveloper{
    name: string;
    skill: string;
}

interface Student{
    name: string;
    grade: number;
}

function askSomeone(someone: Student & FEDeveloper){
    // someone.name = '상경';
    // someone.grade = 10;
    // someone.skill = 'FE'
}

askSomeone({name : '상경', grade : 10, skill:'react'});



// let sang: string | number | boolean; 
// let gyeong: string & number & boolean;


// function askSomeone(someone: Developer & Student){
//     someone.name = '상경';
//     someone.grade = 10;
//     someone.skill = 'FE'
//     someone.
// }


