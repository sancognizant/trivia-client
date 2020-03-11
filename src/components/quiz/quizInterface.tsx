import React, { useEffect, useState } from 'react';
import Counter from './counter';
import { questions } from '../../utils/questionLoader';
import '../../scss/buttonStyle.scss';
import Button from '../button';
import { any } from 'prop-types';

/*
questionList: set the total number of questions from api call 
questionNumber: current question that user is attempting 
*/

interface questionsListInter {
	question: string,
	choices: string,
	answer: number
}

interface questionNumberInter {
	currentQuestion: number
}

const Quiz = () => {
	const [ questionsList, setQuestionsList ] = useState<questionsListInter[]>([]);
	const [ questionNumber, setQuestionNumber ] = useState<questionNumberInter>({currentQuestion: 1});

	useEffect(
		() => {
			setQuestionsList(questions);
		},
		[ questions ]
	);

	const handleIncrementNumber = () => {
		setQuestionNumber({currentQuestion: questionNumber.currentQuestion+ 1});
    };
    
	/*
render counter only if the number of questions have been set correctly from the api
    */
	return (
		<div>
			{questionsList.length !== 0 ? (
				<Counter totalNumber={questionsList.length} activeNumber={questionNumber.currentQuestion} />
			) : null}
			<Button text="submit" styles="back" onClick={handleIncrementNumber} />
		</div>
	);
};

export default Quiz;
