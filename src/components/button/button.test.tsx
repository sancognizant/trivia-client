import React from 'react';
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Button, {propTypes} from './button';


// helper function that observes the props, changes to props in actual component will throw err here
function renderButtonForm(props: Partial<propTypes> = {}) {

    const defaultProps: propTypes = {
        styles: "",
        text: "",
        onClick: () => {}
    }
    return render(<Button {...defaultProps}{...props} />);
}


describe("<Button />", () => {

    test("should render button and locate button id", async () => {
        const{ findByTestId } = renderButtonForm();

        // finds the button by test id = 'Button'
        const buttonComponent = await findByTestId('button');

        expect(buttonComponent).toBeTruthy();
    });

    test("test on click method event", async (done) => {

       const handleClick = () => {
            done();
        }

        const { findByTestId } = renderButtonForm({styles: "", text:  "", onClick: handleClick});

        // finds the button by test id = 'Button'
        const buttonComponent = await findByTestId('button');

        fireEvent.click(buttonComponent);
    });


});

