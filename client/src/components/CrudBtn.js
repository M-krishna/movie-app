import React, { Component } from 'react';
import '../App.css';

class CrudBtn extends Component {

    constructor(props){
        super(props);
        this.state = {
            addActive: false,
            updateActive: false,
            deleteActive: false,
        }
    }

    add = () => {
        this.props.change('add')
        this.setState({addActive: true, updateActive: false, deleteActive: false})
    }
    update = () => {
        this.props.change('update')
        this.setState({updateActive: true, deleteActive: false, addActive: false})
    }
    delete = () => {
        this.props.change('delete')
        this.setState({deleteActive: true, addActive: false, updateActive: false})
    }

    render() {
        return (
            <div className="btns">
                <button type="button" className={this.state.addActive ? "addbtn active" : "addbtn"} onClick={this.add}>ADD MOVIE</button>
                <button type="button" className={this.state.updateActive ? "updatebtn active" : "updatebtn"} onClick={this.update}>UPDATE MOVIE</button>
                <button type="button" className={this.state.deleteActive ? "deletebtn active" : "deletebtn"} onClick={this.delete}>DELETE MOVIE</button>
            </div>
        );
    }
}

export default CrudBtn;