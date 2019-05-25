import ReactCrop from 'react-image-crop';
import React from 'react';

import 'react-image-crop/dist/ReactCrop.css';

export default class Croper extends React.Component {

    def = {
        aspect: this.props.mobile ? 1 : 15/8,
        height: 85.46184738955823,
        width: 71.50537634408602,
        x: 15.24398967783938,
        y: 7.6928563864834345
    };

    state = {
        crop: this.def
    };


    componentWillMount() {
        this.props.changeCropParent(this.def);
    }

    render() {
        return (
            <div className="footer">
                <ReactCrop src={this.props.src}  onChange={this.changeCrop.bind(this)} crop={this.state.crop}/>
            </div>
        );
    }

    changeCrop(crop){
        this.setState({ crop });
        this.props.changeCropParent(crop)
    }
}
