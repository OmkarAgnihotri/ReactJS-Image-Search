import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar'
import unsplash from '../../api/unsplash';

class App extends React.Component{
    onSearchSubmit = async (term) => {
        
        const response = await unsplash.get('/search/photos',{
            params:{
                query:term
            }
        });
        
        // response.data.results.forEach(photo => {
        //     console.log(photo);
        // });
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