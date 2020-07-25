import React from 'react';
import './SubStep.css';

class SubStep extends React.Component {
    render() {
        const { subSteps } = this.props;
        return (
            <div>
                <ul>
                    {subSteps.map((subStep, key) =>
                        <li>{subStep.desc}

                            {subStep.imagePath &&
                                (<div><img src={`../assets/images/image1.png`} alt="MissingImage" width="500px" /></div>)}
                            {subStep.link && (
                                <p className="SubStep-link"> <a href={subStep.link} target="_blank" rel="noopener noreferrer">{subStep.link}</a></p>
                            )}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default SubStep;