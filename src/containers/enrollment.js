import {Component} from 'react';
export default class Enrollment extends Component{
    constructor(props){
        super(props);
        this.state = {
            'name':props.name,
            'email':props.email,
            'age':props.age
        }
    }

    handleChange=(event, field)=>{
        this.setState({
            [field]:event.target.value,
        });
    }

    handleOnSubmit=(_)=>{
        console.log(this.state.name, this.state.email, this.state.age);
    }

    render(){
        return (
            <div className="container">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputName1">Name</label>
                            <input type="name" className="form-control" placeholder="Enter name" onChange={(e)=>this.handleChange(e, "name")} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.handleChange(e, "email")} value={this.state.email} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputAge1">Age</label>
                                <input type="number" className="form-control" id="exampleInputAge1" placeholder="Enter age" onChange={(e) => this.handleChange(e, "age")} value={this.state.age}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}