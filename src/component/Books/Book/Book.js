import React, { Component } from 'react'

class Book extends Component {

    state = {
        isEditable : false
    }

    onKeyHandler = (event) => {
        if(event.key === 'Enter'){
            this.setState({
            isEditable: false
            })
        }
    }

    render() {

        let output = this.state.isEditable ?
                    <input 
                        onChange={ e => this.props.changeHandler( e.target.value,this.props.book.id ) }
                        onKeyPress = { this.onKeyHandler }
                        type='text' 
                        placeholder='Enter Name' 
                        value={ this.props.book.name }
                    />
                    : 
                    <p> 
                        { this.props.book.name } 
                    </p>
        return (
            <li className='list-group-item d-flex'>
               
               {output}

                <span className='ml-auto'> { this.props.book.price } </span>

                <span

                style={{courser: 'pointer'}} 
                onClick={ () => this.setState({ isEditable: true })} className='mx-2'>

                <i class="fas fa-edit"></i>

                </span>

                <div className='mx-4'>
                    <span style={{courser: 'pointer'}} onClick={ () =>  this.props.deleteHandler( this.props.book.id ) }>
                    <i className='fas fa-trash'></i>
                    </span>
                </div>
            </li>
        )
    }
}
export default Book;
