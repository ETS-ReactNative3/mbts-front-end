import React from 'react';
import { Button, FormControl, ControlLabel } from 'react-bootstrap';
import ReactQuill from 'react-quill'
import renderHTML from 'react-render-html';
import { withRouter } from 'react-router-dom'
import { SketchPicker } from 'react-color';


import 'react-quill/dist/quill.snow.css';
import './detail-view.scss';

// CI
import api from '../../../api/api';
import Croper from '../../../components/Croper/Croper';

class DetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rights: false,
            newInstance: false,
            description: '',
            cropped: {},
            editMode: false,
            preview: "",
            name: "",
            date: 1,
            file: null,
            url: '/assets/pictures/blog.jpg',
            color: '#fff'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.errorHandler = this.errorHandler.bind(this)
    }

    componentDidMount() {
      if(window.FB){
        window.FB.XFBML.parse();
      }
        // check if id persist in URL
        if (this.props.match.params.params) {
            let id = this.props.match.params.params;

            if (id === 'new') {
                // If id === 'new' means we are going to create new instance
                this.setState({editMode: true, newInstance: true});
            } else {
                // Else means that this instance already exist in DB
                api.get(id, this.props.blogType).then(result => {
                    this.setState({
                        data: result,
                        ...result
                    });
                }).catch(err => {
                    alert('Sorry the date has not been found!')
                })
            }
        }
    }

    componentWillMount() {
        this.type = this.props.match.path;
    }

    handleChangeDescription(value) {
        this.setState({ description: value })
    }

    handleChange(event, property) {
        this.setState({ [property]: event.target.value })
    }

    handleColor(e) {
        this.setState({ color: e.hex })
    }

    handleFile(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            this.setState({
                url: [reader.result],
                file: file
        })}.bind(this);
    }

    toggleMode() {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <div className="detail-view" id="blog">
                <div className="separator" />

                <div className="header" style={{ backgroundImage: `url("${this.state.url}")` }}>

                    <div className="text" style={{ color: this.state.color }}>

                        { this.state.name || 'this is the topic of this blog!' }

                    </div>
                </div>
                <div className="main">
                    <h2>
                        { this.state.preview }
                    </h2>

                    { this.getContent() }

                    <div>
                        { new Date(this.state.date).toLocaleDateString() }
                    </div>
                </div>

                {
                    !this.state.newInstance &&
                    <div className="comment-box">

                        { this.getFB() }

                    </div>
                }
            </div>
        );
    }

    getFB() {
        let id = this.props.match.params.params;
        return (
            <div className="fb-comments"
                 data-href={`https://mieszkobulik.com/${id}`}
                 data-width="100%" data-numposts="5"/>
        );
    }

    getContent() {
        return this.state.editMode ? this.getEdit() : this.getView();
    }

    getEdit() {
        return (
            <div className="edit-mode">
                <Croper src={this.state.url} className="yo" changeCropParent={this.getcroppedData.bind(this)} />
                <img src={this.state.file} alt="daily" />
                <input type="file" onChange={(e) => this.handleFile(e)} ref="img" />

                <ControlLabel>Blog Name:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter text"
                    onChange={(e) => this.handleChange(e, 'name')}
                />

                <ControlLabel>Choose topic color:</ControlLabel>
                <SketchPicker onChange={(e) => this.handleColor(e)} color={ this.state.color } />

                <ControlLabel>Blog preview:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.preview}
                    placeholder="Enter text"
                    onChange={(e) => this.handleChange(e, 'preview')}
                />

                <ControlLabel>Blog description:</ControlLabel>
                <ReactQuill value={this.state.description}
                            onChange={this.handleChangeDescription} />

                <div className="edit-mode-btns btns-block">
                    <Button bsStyle="danger"
                            onClick={() => {!this.state.newInstance ? this.toggleMode() : this.onCancel()}}>
                        Cancel
                    </Button>
                    <Button bsStyle="success" onClick={() => this.onSave()}>
                        Save
                    </Button>
                </div>
            </div>
        );
    }

    getView() {
        return (
            <div className="view-mode">
                <div className="view-mode__content">
                    {
                        renderHTML(this.state.description)
                    }
                </div>
                {
                    this.state.rights &&
                    <div className="view-mode-btns btns-block">
                        <Button bsStyle="primary" onClick={() => this.toggleMode()}>
                            Edit
                        </Button>
                        <Button bsStyle="danger" onClick={() => {this.onDelete()}}>
                            Delete Blog
                        </Button>
                    </div>
                }
            </div>
        );
    }

    onSave() {
            let data = new FormData();

            if (this.refs.img.files && this.refs.img.files[0]) {
                //check if file size is not bigger
                if (this.state.file.size > 15000000) {
                    alert('Too big file, Dude!');
                    return null;
                }
                //append file
                data.append('file', this.state.file);

                //create and append url and image name
                data.append('url', `/assets/pictures/${(Math.random() * 1000).toString().slice(0, 3)}${this.refs.img.files[0].name}`);

                //get crop coordinates
                let { width, height, x, y} = this.state.cropped;

                //append cropped coordinates
                data.append('crop', [width, height, x, y].join());

            } else {
                //if we are creating new blog add the default url
                //if it is existed blog just keep previous image
                this.state.newInstance ? data.append('url', this.state.url) : null;
                data.append('crop', null);
            }

            data.append('description', this.state.description);
            data.append('preview', this.state.preview);
            data.append('name', this.state.name);
            data.append('color', this.state.color);

            if (this.state.newInstance) {

                data.append('date', Date.now());

                api.post(data, this.props.blogType).then(result => {
                    this.props.history.replace(`/${ this.props.blogType }/${result._id}`);
                    document.location.reload();
                }).catch(this.errorHandler);

            } else {

                data.append('_id', this.state.data._id);
                api.put(data, this.props.blogType).then(result => {
                    this.setState({
                        editMode: false,
                        data: result,
                        ...result
                    });
                }).catch(this.errorHandler)
            }
    }

    getcroppedData(data) {
        this.setState({cropped: data})
    }

    onCancel() {
        this.props.history.replace(`/${ this.props.blogType }`);
    }

    onDelete() {
        api.del(this.props.match.params.params, this.props.blogType).then(result => {
            this.props.history.replace(`/${ this.props.blogType }`);
        })
    }

    errorHandler(err, msg) {
        switch (err.status) {
            case 413:
                alert('Your image is too big!');
                break;

            default:
                alert('Sorry you request was not successful! try again later or contact administrator!');
        }
    }
}


export default withRouter(DetailView);
