import React, { useState, useEffect } from 'react';
import { checkPropTypes } from 'prop-types';
import './choices.scss';

export interface ChoicesProps {
    choicesProps: string [];
    handleChoice: any;
}
 
const Choices = ({choicesProps, handleChoice}: ChoicesProps) => {

    const [choices, setChoices] = useState<string[]>([]);

    // set the state each time the choices / props changes (new question generated)
    useEffect(
        () => {
           setChoices(choicesProps)
        },
        [choicesProps]
    ); 

    return ( 

        <div className="choices">
            {choices ? (
                choices.map((choice, index) => {
                    return (
                        <div key={index} className="form-group">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="choice"
                                value={index}
                                onChange= {(eve) => handleChoice(eve.target.value)}
                            />
                            <label className="labelChoice" htmlFor="choice">{choice}</label>
                        </div>
                    );
                })
            ) : null}
        </div>
     );
}
 
export default Choices;