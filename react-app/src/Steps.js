import React from 'react';
import Step from './Step';
import { steps } from './config/data.js';


class Steps extends React.Component {
    render() {
        return (
            <div>
                {steps.map((step, key) =>
                    <Step key={key} step={step} />
                )}
            </div>
        );
    }
}



export default Steps;