import React, { useEffect, useState } from 'react';
import Counter from './counter';
import { questions } from '../../utils/questionLoader';
import '../../scss/buttonStyle.scss';
import Button from '../button';

const Quiz = () => {
	const [ questionsList, setQuestionsList ] = useState([]);
	const [ questionNumber, setQuestionNumber ] = useState(1);
	useEffect(
		() => {
			setQuestionsList(questions);
			console.log(questionsList);
		},
		[ questionsList ]
	);

	let renderCounter;

	if (questionsList.length !== 0) {
		renderCounter = <Counter totalNumber={questionsList.length} activeNumber={questionNumber} />;
	}

	const incrementNumber = () => {
		setQuestionNumber(questionNumber + 1);
	};

	return (
		<div>
			{renderCounter}
			<p>{questionNumber}</p>
			<Button text="submit" styles="back" onClick={incrementNumber} />
		</div>
	);
};

export default Quiz;
