import {questions} from './questionLoader';

/*
function obtains a value and returns a question obj from array
*/ 
const generateQuestion = (questionNumber: number): Object => {
    return questions[questionNumber];
}

export {generateQuestion}