
// setting the type for the object return type 
interface question {
    question: string;
    choices: string[];
    anwser: number;
}

/*
import questions from json file (database)
*/
const getQuestions = () => {
    return fetch('./jsonFiles/questions.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

// // getting 1 question object from the questions array 
// const getQuestionObject = (index: number, arr: any): question => {
//     return arr[index];
// }

export {getQuestions}