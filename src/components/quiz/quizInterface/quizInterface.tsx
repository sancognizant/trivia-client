import React, { useEffect, useState } from 'react';
import Counter from '../counter/counter';
import '../../button/buttonStyle.scss'
import './quiz.scss';
import Button from '../../button/button';
import {getQuestions} from '../../../service/questionsLoader';

/*
questionList: set the total number of questions from api call 
questionNumber: current question that user is attempting 

Component that displays the questions, options and the counter 
*/
export interface questionsListInter {
	question: string,
	choices: string[],
	answer: number
}

interface questionNumberInter {
	currentQuestion: number
}

interface answerInterface {
	answer: string;
}


const Quiz = () => {
	const [questionsList, setQuestionsList] = useState<questionsListInter[]>([]);

	const [questionNumber, setQuestionNumber] = useState<questionNumberInter>({ currentQuestion: 1 });

	const [currentQuestion, setCurrentQuestion] = useState<questionsListInter>({question: "test", choices: [], answer: 0});

	const[response, setResponse] = useState<answerInterface>({answer: ""});

	useEffect(
		() => {
			getQuestions().then((questions: any) => {
				setQuestionsList(questions);
				setCurrentQuestion(questions[0]);
			})
		},
		[]
	); 
	 
	// increment counter
	const handleIncrementNumber = () => {
		setQuestionNumber({ currentQuestion: questionNumber.currentQuestion + 1 });
	};

	// set the next question, increment the counter and display the results attempted
	const handleFormSubmit = (e: any) => {
		//console.log(`User answered ${response.answer} for ${currentQuestion.question}`);

		setCurrentQuestion(questionsList[questionNumber.currentQuestion]);

		handleIncrementNumber();
	}



	/*
render counter only if the number of questions have been set correctly from the api
    */
	return (
		<div data-testid="quiz-container">
			{questionsList.length !== 0 ? (
				<div data-testid="quiz-component">
					<Counter styles = "counter" totalNumber={questionsList.length} activeNumber={questionNumber.currentQuestion} />
					<div className="questionComponent">
						<form onSubmit={handleFormSubmit}>
						<label className = "questionLabel">{currentQuestion.question}</label>
						<div className = "choices">
							{currentQuestion.choices ? (
									currentQuestion.choices.map((choice, index) => {
										return (
											 <div key={index} className= "form-group">	
												<input
													className="form-check-input"
													type= "radio"
													name="choice"
													value = {index}
													onChange={(event) => setResponse({answer: event.target.value})}
												/>
												<label className="labelChoice" htmlFor="choice">{choice}</label>
											 </div>
										);
									})
								): null}
						</div>
						</form>
					</div>
					<Button text="submit" styles="back" onClick={handleFormSubmit} />
				</div>
			) : null}
		</div>
	);
};

export default Quiz;
