import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.ref = React.createRef();

        this.state = {span:0}
    }

    componentDidMount(){
        this.ref.current.addEventListener('load', () => {
            const height = this.ref.current.clientHeight;
            const span = Math.ceil(height/10);
            this.setState({span:span});
        });
    }

    render(){
        const {description,urls} = this.props.image;
        return (
            <div style={{gridRowEnd : `span ${this.state.span}`}}> 
                <img ref={this.ref} alt={description} src={urls.regular} ></img>
            </div>
        )
    }
}

export default ImageCard;