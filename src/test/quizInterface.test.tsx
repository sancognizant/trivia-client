import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Quiz from '../components/quiz/quizInterface';

// helper function that renders quiz component
function renderQuizComponent() {
    return render(<Quiz />);
}

// describe("<Quiz/>", () => {

//     test("should render Component and locate pagination id", async () => {
//         const { findByTestId } = renderQuizComponent();

//         // finds the component by test id
//         const quizContainer = await findByTestId('quiz-container');

//         expect(quizContainer).toBeTruthy();
//     });

// });



