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
	styles: string;
	totalNumber: number;
	activeNumber: number;
}

const Counter = ({ styles, totalNumber, activeNumber }: propTypes) => {
	const [items, setItems] = useState([]);
	const [questionLength, setQuestionLength] = useState<questionLengthInterface>({ numberQuestions: 0 });
	const [active, setActive] = useState<activeInterface>({ currentQuestion: 1 });
	
	/*
    initialize the number of items to be displayed and the active question number
    */

	const addItems = (totalQuestions: number, activeQuestion: number, itemsCopy: any[]) => {
		for (let number = 1; number <= totalQuestions; number++) {
			itemsCopy.push(
				<Pagination.Item key={number} active={number === activeQuestion}>
					{number}
				</Pagination.Item>
			);
		}

		return itemsCopy;
	}

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
				itemsCopy = addItems(questionLength.numberQuestions, active.currentQuestion, itemsCopy);
				setItems(itemsCopy);
				}
			},
		[active.currentQuestion, questionLength.numberQuestions]
	);

	return <Pagination className = {styles} data-testid = "pagination">{items}</Pagination>;
};

export default Counter;
