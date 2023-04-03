import { Component } from 'react'

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            invalid: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

//    onAddHandler = (e) => {
//     e.preventDefault();
//     const { name, salary } = this.state;
//     const { onAdd } = this.props;
//     const newItem = {
//         name,
//         salary
//     }
//     onAdd(newItem)
//    }

    onSubmit = (e) => {
        e.preventDefault();
        this.validateInputs();
        this.setState({
            name: '',
            salary: '',
        })
        if(this.state.invalid) return
        this.props.onAdd(this.state.name, this.state.salary);
    }
   
    validateInputs = () => {
        const { name, salary } = this.state;
        if (!(name.trim() >= 2) || !salary){
            console.log("invalid")
            this.setState({ invalid: true })
        } else {
            console.log("valid")
            this.setState({ invalid: false })
        }
    }
    
    render() {
        const {name, salary, invalid} = this.state;
        const {border} = this.props;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        style={{border}}
                        className={`form-control new-post-label ${invalid ? "invalid" : ""}`}
                        placeholder="Employee`s name" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        style={{border}}
                        className={`form-control new-post-label ${invalid ? "invalid" : ""}`}
                        placeholder="Salary / $" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light" onClick={this.validate}>Add</button>
                </form>
            </div>
        )
   }
}

export default EmployeesAddForm;