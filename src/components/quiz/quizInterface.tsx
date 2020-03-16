import React, { useEffect, useState } from 'react';
import Counter from './counter';
import '../../scss/buttonStyle.scss';
import Button from '../button';
import { questions } from '../../utils/questionLoader';
import { any } from 'prop-types';

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

const Quiz = () => {
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



    /*
render counter only if the number of questions have been set correctly from the api
    */
	return (
		<div data-testid="quiz-container">
			{questionsList.length !== 0 ? (
				<div data-testid="quiz-component">
					<Counter totalNumber={questionsList.length} activeNumber={questionNumber.currentQuestion} />
					<div className="questionComponent">
						<form onSubmit={handleFormSubmit}>
							<div className="User">
								<label>Username</label>
								<input
									type="text"
									name="name"
									onChange={event => setAlias(event.target.value)}
									value={alias}
									placeholder="Please enter name/alias"
								/>
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
