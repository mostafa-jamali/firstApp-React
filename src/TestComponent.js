import React, {Component} from 'react'

class TestComponent extends Component {
    state={
        name:"",
        firstName:"",
        lastName:""
}
    onSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        this.setState({name: form.get("input")})
    }
    changeHandler = event => {
        const  {target:{value,name}} = event;
        this.setState({[name]:value})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="firstName" type="text" value={this.state.firstName} placeholder="first name" onChange={this.changeHandler}></input>
                    <input name="lastName" type="text" value={this.state.lastName} placeholder="lasst name" onChange={this.changeHandler}></input>
                    <button>send</button>
                    <br/>
                    {`${this.state.firstName} ${this.state.lastName}`}
                </form>
            </div>
        )
    }
}
export default TestComponent;