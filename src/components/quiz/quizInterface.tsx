import React, { useEffect, useState } from 'react';
import Counter from './counter';
import { questions } from '../../utils/questionLoader';
import '../../scss/buttonStyle.scss';
import Button from '../button';

/*
questionList: set the total number of questions from api call 
questionNumber: current question that user is attempting 
*/

const Quiz = () => {
	const [ questionsList, setQuestionsList ] = useState([]);
	const [ questionNumber, setQuestionNumber ] = useState(1);

	useEffect(
		() => {
			setQuestionsList(questions);
		},
		[ questionsList ]
	);

	const incrementNumber = () => {
		setQuestionNumber(questionNumber + 1);
    };
    
	/*
render counter only if the number of questions have been set correctly from the api
    */
	return (
		<div>
			{questionsList.length !== 0 ? (
				<Counter totalNumber={questionsList.length} activeNumber={questionNumber} />
			) : null}
			<Button text="submit" styles="back" onClick={incrementNumber} />
		</div>
	);
};

export default Quiz;
