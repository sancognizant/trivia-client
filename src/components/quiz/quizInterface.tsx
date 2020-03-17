import React, { useEffect, useState } from 'react';
import Counter from './counter';
import '../../scss/buttonStyle.scss';
import '../../scss/quiz.scss';
import Button from '../button';
import { questions } from '../../utils/questionLoader';


/*
questionList: set the total number of questions from api call 
questionNumber: current question that user is attempting 
*/
export interface questionsListInter {
	question: string,
	choices: string[],
	answer: number
}

interface questionNumberInter {
	currentQuestion: number
}

const Quiz = (): React.ReactElement => {
	const [questionsList, setQuestionsList] = useState<questionsListInter[]>([]);

	const [questionNumber, setQuestionNumber] = useState<questionNumberInter>({ currentQuestion: 1 });

	const [alias, setAlias] = useState("");

	useEffect(
		() => {
			setQuestionsList(questions);
		},
		[questions]
	);

	const handleIncrementNumber = () => {
		setQuestionNumber({ currentQuestion: questionNumber.currentQuestion + 1 });
	};

	const handleFormSubmit = (e: any) => {
		console.log(alias);
		handleIncrementNumber();
		e.preventDefault();
	}

	const renderLoading = <span>Loading</span>

    /*
render quiz components only if the number of questions are greater than 0.
    */
	return (
		<div data-testid="quiz-container">
			{questionsList.length !== 0 ? (
				<div data-testid="quiz-component">
					<Counter styles = "counter" totalNumber={questionsList.length} activeNumber={questionNumber.currentQuestion} />
					<div className="questionComponent">
						<form onSubmit={handleFormSubmit}>
							<div className="User">
								<label className = "questionLabel">Username</label>
								<div className = "choices">
									
								</div>
							</div>
						</form>
					</div>
					<Button text="submit" styles="back" onClick={handleFormSubmit} />
				</div>
			) : (renderLoading)}
		</div>
	);
};

export default Quiz;
