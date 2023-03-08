import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div className = "kavs">
            <div className>
                 <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addEmployee}><BsFillPlusCircleFill/>  Add </button>
                 </div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3">
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    <th className='text-center'> Employee Id</th>
                                    <th className='text-center'> First Name</th>
                                    <th className='text-center'> Last Name</th>
                                    <th className='text-center'> Email Id</th>
                                    <th className='text-center'> Salary</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.id} </td> 
                                             <td> {employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td> {employee.salary}</td>
                                            <td className='text-center'>
                                                 <button onClick={ () => this.viewEmployee(employee.id)} className="btn-hover btn-hover-x color-1"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="ml-2 btn-hover btn-hover-x color-7"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteEmployee(employee.id)} className="ml-2 btn-hover btn-hover-x color-11"><BsFillTrashFill/> </button>
                                             </td> 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
