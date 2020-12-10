import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component{
    onSearchSubmit(term){
        console.log(term);
    }
    render() {
        return (
            <div className="container" style={{ marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;