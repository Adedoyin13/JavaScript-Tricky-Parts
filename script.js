// CLOSURE ==>

const outer = () => {
    const outerVar = 'Bonjour Mossieur means';
    const inner = () => {
        const innerVar = 'Good Morning Teacher';
        console.log(outerVar, innerVar);
    }
    return inner();                    // First method
}
outer();

const inIt = () => {
    const hobby = 'Watching Movies';
    const displayHobby = () => {
        console.log(hobby);
    }
    return displayHobby;
}
let answer = inIt();          // Second method
answer();

function checkMate () {
    let name = 'Doyin'
    console.log(`Outer Function is for ${name}`);

    function checking (){
        console.log(`The user is ${name}`);
    }
    return checking 
}
// checkMate()

const checked = checkMate();
checked();

const outerFn = () => {
    const example = 'Example';
    console.log(example);

    const innerFn = () => {
        console.log('is an example');

        const nestedInnerFn2 = () => {
            console.log('Example');
        }
        return nestedInnerFn2()
    }
     return innerFn
}
// outerFn();
const answer2 = outerFn();
answer2()
