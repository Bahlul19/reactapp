import React, { Component } from 'react';

const intialState = {
    name: '',
    email: '',
    password: '',
    bio:'',
    country:'',
    gender:'',
    skill:[]   
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

        <div className='form-group'>

            <select className='form-control' onChange={this.changeHandler} name='country' id='country'>
                <option>Select your country</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='India'>India</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='USA'>USA</option>

            </select>
            <br/>

        </div>

        <div className='form-group'>
            
            <div className='form-check'>
                <input 
                onChange={this.changeHandler} 
                type='radio' 
                id='gender1' 
                name='gender' 
                value='Male'/>
            <label htmlFor='gender'> Male</label>
            </div>

            <div className='form-check'>
                <input 
                onChange={this.changeHandler} 
                type='radio' 
                id='gender2' 
                name='gender' 
                value='Female'/>
                <label htmlFor='gender'> Female</label>
            </div>

            <div className='form-check'>
                <input 
                onChange={this.changeHandler} 
                type='radio' 
                id='gender3' 
                name='gender' 
                value='Other'/>
                <label htmlFor='gender'> Other</label>
            </div>

        </div>

        <div className='form-group'>
            <div className='form-check'>
                <input className='form-check-input' id='js' value='JavaScript' type='checkbox'></input>
            </div>
        </div>


        <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
       )
    }
}

export default PostForm;
