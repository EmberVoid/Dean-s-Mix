import React from 'react';
import playIcon from '../playIcon.png';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        }
    }

    showBack = () => {
        this.setState({
            isFlipped: true
        });
    };

    showFront = () => {
        this.setState({
            isFlipped: false
        });
    };


    render () {
        const { logo, name, year, country } = this.props;
        const flip = this.state.isFlipped.valueOf();

        return (
            <div style={{display: "inline-block"}}>
                {flip === false
                    ?<div onClick={this.showBack}
                        className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card">
                        <img src={logo} alt='band' height={400} width={400}/>
                        <div>
                            <h2>{name}</h2>
                            <p><em>{year}</em></p>
                            <p>{country}</p>
                        </div>
                    </div>
                    : <div onClick={this.showFront}
                        className="tc dib br3 pa3 ma2 grow bw2 shadow-5 card">
                        <div>
                            <img src={playIcon} alt='playIcon' height={400} width={400}/>
                            <h2>{name}</h2>
                            <p><em>{year}</em></p>
                            <p>{country}</p>
                        </div>
                    </div>}
            </div>
        )
    }
}

export default Card;
