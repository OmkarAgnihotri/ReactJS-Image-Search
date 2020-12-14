import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar/SearchBar'
import ImageList from '../ImageList/ImageList'
import unsplash from '../../api/unsplash';

class App extends React.Component{
    state = {images : []};

    onSearchSubmit = async (term) => {
        
        const response = await unsplash.get('/search/photos',{
            params:{
                query:term
            }
        });
        
        this.setState({images:response.data.results});    
    }

    render() {
        return (
            <div className="container" style={{ marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="container" style={{ marginTop:"10px"}}>
                    <ImageList images={this.state.images}/>
                </div>
            </div>
            
        );
    }
}

export default App;