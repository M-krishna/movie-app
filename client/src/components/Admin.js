import React, { Component } from 'react';
import './admin.css';
import {Helmet} from 'react-helmet';
import CrudBtn from './CrudBtn';
import Add from './Add';
import Delete from './Delete';

class Admin extends Component {

    constructor(props){
        super(props);
        this.state = {
            showAdd: false,
            showUpdate: false,
            showDelete: false,
        }
    }

    changeComponent = (comp) => {
        switch(comp){
            case 'add':
                this.setState({showAdd: true, showUpdate: false, showDelete: false,})
                break;
            case 'update':
                this.setState({showUpdate: true, showAdd: false, showDelete: false})
                break;
            case 'delete':
                this.setState({showDelete: true, showUpdate: false, showAdd: false})
                break;
            default:
                this.setState({showAdd: false, showUpdate: false, showDelete: false})
        }
    }

    render() {
        return (
            <div className="admin">
                <Helmet>
                    <title>Welcome Admin</title>
                </Helmet>
                <div className="admin-btns">
                    <CrudBtn change={this.changeComponent} />
                </div>
                {this.state.showAdd && <Add />}
                {/* {this.state.showUpdate && <Update />} */}
                {this.state.showDelete && <Delete />}
            </div>
        );
    }
}

export default Admin;