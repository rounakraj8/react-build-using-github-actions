import React from 'react';
import './Step.css';

class Step extends React.Component {
    render() {
        const { step } = this.props;
        return (
            <div>
                <h3>
                    <span>{step.name}  {step.header}</span>
                </h3>
                <ul>
                    {step.subSteps.map((subStep, key) =>
                        <li>subStep</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Step;