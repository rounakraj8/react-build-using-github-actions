import React from 'react';
import Step from './Step';

class Steps extends React.Component {
    constructor() {
        super();
        this.state = {
            steps: [
                {
                    name: "Step 1",
                    header: 'We need to use GitHub actions to build the artifact as soon as we push our code to GitHub master branch.',
                    subSteps: [
                        "Create a React App",
                        "Push the code to GitHub",
                    ]
                
                },
                {
                    name: "Step 2",
                    header: 'We need to use GitHub actions to build the artifact as soon as we push our code to GitHub master branch.',
                    subSteps: [
                    ]
                }
            ]
        }
    }

    render() {

        return (
            <div>
                {this.state.steps.map((step, key) =>

                    <Step key={key} step={step} />
                )}
            </div>
        );
    }

}

export default Steps;