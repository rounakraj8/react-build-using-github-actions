import React from 'react';
import Step from './Step';
import './Steps.css';
import { steps } from './config/data.js';


class Steps extends React.Component {
    render() {
        return (
            <div className="Steps">
                <h1 className="Steps-h3">Steps:</h1>
                <ol>
                    {steps.map((step, key) =>
                        <li> <Step key={key} step={step} /></li>
                    )}
                </ol>
            </div>
        );
    }
}



export default Steps;