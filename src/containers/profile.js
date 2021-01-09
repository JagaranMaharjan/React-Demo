import {Component} from 'react';
export default class Profile extends Component {
    //constructor of the class
    constructor(){
        console.log("Constructor was called");
        super();
        this.state = {
            'name': 'Jagaran Maharjan',
            'address': 'Manamaiju-4, Kathmandu',
            'phone': '+977-982307...'
        }
    }
    //this state wont be call because, this state has been defined in constructor with same key and different values.
    //as we know that, constructor will execute first, when class was called, so this state property will be override. 
    state = {//property [state]
        'name': 'Sabin Nakarmi',
        'address': 'Nepaltar, Kathmandu',
        'phone': '+977-986107...'
    }

    //global var
    striker = 0;

    //change developer info event
    // _ means ignore the parameter
    handleDevInfoClick=(_)=>{
        this.setState({
            name:'Aayush Pandey',
            'address': 'New Baneshwor',
            'phone':'+977-981307...'
        });
        console.log("User/Developer Info State has been changed !!!");
    }

    //after loading all component, this method will be called
    // it can be used to call third party api
    componentDidMount() {
        console.log('Component Did Mount : All component loaded successfully.');
    }

    //this method will be called if new data to bew added in third party API and to display updated data in views
    componentDidUpdate(){
        console.log('Component Did Update: Data updated successfully');
    }

    //counter event
    handleCounterClick=(_)=>{
        this.setState({
            striker: this.striker++,
        });
        console.log("Counter State has been changed !!!");
    }

    //main method// main function // return and render views in web page
    render() {
        console.log("Render was called !!!");
        return(
            <>
                <br></br>
                <center><h5> User Profile - Developer Info</h5></center>
                <center>
                    <div> Name : {this.state.name}</div>
                    <div> Address: {this.state.address}</div>
                    <div> Phone: {this.state.phone}</div>
                    <button onClick={this.handleDevInfoClick}>Change Developer Info</button>
                </center>
                <hr></hr><br></br>
                <center><h5>Counter</h5></center>
                <center>
                    <div>Counter: {this.striker} </div>
                    <button onClick={this.handleCounterClick}>Counter++</button>
                </center>
            </>
        );
    }
}