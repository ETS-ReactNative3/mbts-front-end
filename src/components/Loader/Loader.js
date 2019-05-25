import React from 'react';
import ReactLoading from 'react-loading';

import './loader.scss'

export default class Loader extends React.Component {


    render () {
        return (
            <div className="loader">
                <div className="loader__animation">
                    <ReactLoading type={'spin'} color={'#ffffff'} height='667' width='375' />
                </div>
            </div>
        )
    }
}
