import React from 'react';

class GifDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.gifRef = React.createRef();
    }

    componentDidMount() {
        this.gifRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.gifRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    };

    render() {
        const { images } = this.props.gif;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <a href={images.original.url} target="_blank">
                    <img 
                        ref={this.gifRef}
                        alt={images.title} 
                        src={images.original.url} 
                    />
                </a>
            </div>
        )
    }
}


export default GifDisplay;