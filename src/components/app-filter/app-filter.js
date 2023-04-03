import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



onFilterPromEmp = () => {
    console.log('Hello')
}

onFilterEmpBySalary = () => {

}



    

    render() {
        
        return (
            <div className="btn-group">
                <button
                    className="btn btn-light"
                    type="button">
                        All employees
                </button>
                <button 
                    onClick={this.onFilterPromEmp}
                    className="btn btn-outline-light"
                    type="button">
                        For promotion
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button">
                        Salary more that 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;