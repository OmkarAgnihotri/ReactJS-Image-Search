import React from 'react';
import ReactDOM from 'react-dom';

/*
 class based components used in order to use
 states to handel user inputs.
*/

class SearchBar extends React.Component{
    state = {
        key:''
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.key);
    }

    render(){
        return (
            <div>
                <form className="form" onSubmit={this.onFormSubmit} >
                    <label>Image search</label>
                    {/* <input type="text" className="form-control" onChange={ (event) => console.log(event.target.value) } /> */}
                    <input type="text"
                        value={this.state.key}
                        className="form-control"
                        onChange={ (event) => this.setState({key:event.target.value}) }
                    />
                </form>
            </div>
        );
    };
}

export default SearchBar;