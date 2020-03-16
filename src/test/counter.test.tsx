import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Counter, {propTypes} from '../components/quiz/counter';


// helper function that observes the props, changes to props in actual component will throw err here
function renderCounterComponent(props: Partial<propTypes> = {}) {

    const defaultProps: propTypes = {
        totalNumber: 0,
        activeNumber: 0,
    }
    return render(<Counter {...defaultProps}{...props} />);
}


describe("<Counter />", () => {

    test("should render Component and locate pagination id", async () => {
        const { findByTestId } = renderCounterComponent();

        // finds the component by test id
        const buttonComponent = await findByTestId('pagination');

        expect(buttonComponent).toBeTruthy();
    });

});
