import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

/*
    items: array containing the pagination numbers
    questionLength: total number of questions
	active: current question
	
	Counter component that shows the total number of questions to attempt and the
	current question that user is attempting 
*/


export interface propTypes {
	styles: string;
	totalNumber: number;
	activeNumber: number;
}

const Counter = ({ styles, totalNumber, activeNumber}: propTypes) => {
	const [items, setItems] = useState([]);
	const [questionLength, setQuestionLength] = useState<number>(0);
	const [active, setActive] = useState<number>(1);
	
	/*
    initialize the number of items to be displayed and the active question number
    */
	const addItems = (totalQuestions: number, activeQuestion: number, itemsCopy: any[]) => {
			itemsCopy.push(
				<Pagination.Item key={activeQuestion} active= {true}>
					{activeQuestion}
				</Pagination.Item>
			);
		itemsCopy.push(
			<Pagination.Item key = {500}>
				of
			</Pagination.Item>
		);

		itemsCopy.push(
			<Pagination.Item key={1000}>
				{totalQuestions}
			</Pagination.Item>
		);


	 	return itemsCopy;
	}

	/*
	Set the total number of questions and the current question number 
	*/
	useEffect(
		() => {
			setQuestionLength(totalNumber);
			setActive(activeNumber);
		},
		[activeNumber, totalNumber]
	);

	/*
	If the current active question number changes, set the counter again 
	*/
	useEffect(
		() => {
			if (active <= questionLength) {
				 let itemsCopy: any = [];
				itemsCopy = addItems(questionLength, active, itemsCopy);
				setItems(itemsCopy);
				}
			},
		[active, questionLength]
	);

	return(
		
		<Pagination className={styles} data-testid="pagination">
		{items}
		</Pagination>
	)
};

export default Counter;
