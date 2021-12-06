import React, { Component } from 'react';

const intialState = {
    name: '',
    email: '',
    password: '',
    bio:''   
}

class PostForm extends Component {

    constructor(){
        super();
        this.myForm = React.createRef();
    }

    state = intialState;

    changeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();

        console.log(this.state);

        this.myForm.current.reset();

        this.setState({
            ...intialState
        })
    }

    render() {
       return(
        <form ref={this.myForm} onSubmit={ this.submitHandler }>
        <div className='form-group'>
           
            <input 
                    className='form-control'
                    type='text' 
                    placeholder='Please enter your name' 
                    name='name' 
                    id='name' 
                    value={this.state.name} 
                    onChange={this.changeHandler}
            />
        </div><br/>
        <div className='form-group'>
            
            <input 
                    className='form-control'
                    type='email' 
                    placeholder='Please enter your email' 
                    name='email' 
                    id='email' 
                    value={this.state.email} 
                    onChange={this.changeHandler}
            />
        </div><br/>
        <div className='form-group'>
            
            <input
                    className='form-control' 
                    type='password' 
                    placeholder='Please enter your password' 
                    name='password' 
                    id='password' 
                    value={this.state.password} 
                    onChange={this.changeHandler}
            />
        </div><br/>
        <div className='form-group'>
            
            <textarea 
                    className='form-control'
                    type='text' 
                    placeholder='Please enter your bio' 
                    name='bio' 
                    id='bio' 
                    value={this.state.bio} 
                    onChange={this.changeHandler}
            />
        </div><br/>
        <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
       )
    }
}

export default PostForm;
