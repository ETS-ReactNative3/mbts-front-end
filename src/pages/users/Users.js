import React from 'react';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

import './Users.scss';

// CI
import api from '../../api/api';


class Blog extends React.Component {

    state = {
        list: [],
        rights: false
    };

    componentDidMount() {
        api.userList().then(results => {
            this.setState({list: results.users.reverse(), rights: results.rights});
        }).catch(err => {
            alert(err.response.data.error);
            this.props.history.replace(`/`);
        });

    }

    render() {
        return (
            <main className="users-view">
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Athlete Program</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list && this.state.list.length ?
                            this.state.list.map((item, i) => {
                                return (
                                    <tr key={i} className="custom-row">
                                        <td>{ item.rights }</td>
                                        <td>{ item.username }</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={ item.rights === 'vip' || item.rights === 'mieszko' }
                                                onChange={(e) => this.switchRole(e, i)}
                                                disabled={ item.rights === 'mieszko' }
                                            />
                                        </td>
                                    </tr>
                                );
                            }) :
                            <tr>the empty list</tr>
                    }
                    </tbody>
                </Table>
            </main>
        );
    }

    switchRole(e, i) {
        let newUser = Object.assign({}, this.state.list[i]);
        let newList = this.state.list.concat([]);

        newUser.rights = e.target.checked ? 'vip' : 'user';

        api.saveUsers(newUser).then(results => {
            newList[i] = newUser;
            this.setState({list: newList});
        }).catch(err => {
            alert('Sorry for some reason I cannot update user!')
        })
    }

    onCreateNew() {
        this.props.history.push(`${ this.props.blogType }/new`);
    }

    async getData() {
        return await api.list(this.props.blogType);
    }
}

export default withRouter(Blog);
