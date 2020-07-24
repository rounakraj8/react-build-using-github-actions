import React from 'react';
import SubStep from './SubStep';
import './Step.css';

class Step extends React.Component {
    render() {
        const { step } = this.props;
        return (
            <div>
                <div className="Step-h3">
                    <span>  {step.header}</span>
                    {step.desc && (<p class="Step-desc">{step.desc}</p>)}
                </div>
                <SubStep subSteps={step.subSteps}/>
            </div>
        );
    }
}

export default Step;