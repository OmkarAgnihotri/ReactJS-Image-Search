import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

        axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query:this.state.key
            },
            headers:{
                Authorization:'Client-ID mJPOs6g1sa4yfwF311olHG4InGse3YElOAOzEbmu4Uo'
            }
        })
        .then((response) => {
            console.log(response);
        });
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