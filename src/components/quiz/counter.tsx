import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

/*
    items: array containing the pagination numbers
    questionLength: total number of questions
    active: current question
*/

 export interface questionLengthInterface {
	numberQuestions: number;
}

export interface activeInterface {
	currentQuestion: number;
}

export interface propTypes {
	totalNumber: number;
	activeNumber: number;
}
const Counter = ({ totalNumber, activeNumber }: propTypes) => {
	const [items, setItems] = useState([]);
	const [questionLength, setQuestionLength] = useState<questionLengthInterface>({ numberQuestions: 0 });
	const [active, setActive] = useState<activeInterface>({ currentQuestion: 1 });
	
	/*
    initialize the number of items to be displayed and the active question number
    */

	useEffect(
		() => {
			setQuestionLength({ numberQuestions: totalNumber });
			setActive({ currentQuestion: activeNumber });
		},
		[activeNumber, totalNumber]
	);

	useEffect(
		() => {
			if (active.currentQuestion <= questionLength.numberQuestions) {
				let itemsCopy: any = [];
				for (let number = 1; number <= questionLength.numberQuestions; number++) {
					itemsCopy.push(
						<Pagination.Item key={number} active={number === active.currentQuestion}>
							{number}
						</Pagination.Item>
					);
				}
				setItems(itemsCopy);
			}
		},
		[active.currentQuestion, questionLength.numberQuestions]
	);

	return <Pagination data-testid = "pagination">{items}</Pagination>;
};

export default Counter;
