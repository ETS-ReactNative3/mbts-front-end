import React from 'react';

import './Underline.scss';


export default class UnderlineHeader extends React.Component {

    render() {
        let reversed = this.props.reversed;
        return (
            <div className={reversed ? 'underline-reversed' : 'underline'}>
                <div className={reversed ? 'underline-reversed__header': 'underline__header'}>
                    <div>
                        {this.props.text}
                    </div>
                    <div className={reversed ? 'border-reversed': 'border'}>
                </div>

                </div>
            </div>
        );
    }
}
