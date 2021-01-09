import {Component} from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});

export default class Enrollment extends Component{
   state = {
       data: []
   }

    handleChange=(event, field)=>{
        this.setState({
            [field]:event.target.value,
        });
    }

    
    handleOnSubmit = (_) => {
        console.log(this.state.group_name, this.state.level_name, this.state.semester_name);
    }

    async componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();
        this.setState({
            data: data,
        });
    }

    render(){
        //const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
        const columns = [
            {
                name: 'userId',
                selector: 'userId',
                sortable: true,
            },
            {
                name: 'title',
                selector: 'title',
                sortable: true,
                right: true,
            },
            {
                name: 'completed',
                selector: 'completed',
                sortable: true,
                right: true,
            },
            {
                name: 'id',
                selector: 'id',
                sortable: true,
                right: true,
            },
        ];
        return (
            
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputName1">Name</label>
                                <input type="name" className="form-control" placeholder="Enter group name" onChange={(e) => this.handleChange(e, "group_name")} value={this.state.group_name} />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" placeholder="Enter semester name" onChange={(e) => this.handleChange(e, "semester_name")} value={this.state.semester_name} />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" placeholder="Enter group name" onChange={(e) => this.handleChange(e, "level_name")} value={this.state.level_name} />

                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-md-9">
                    {console.log(this.state.data)}
                        <DataTable
                            title="Group Details"
                            columns={columns}
                            data={this.state.data}                           
                        />
                    </div>
                </div>
            </div>
        );
    }
}