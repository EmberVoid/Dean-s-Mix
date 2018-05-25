import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {bands} from "../bands";

class App extends Component {
    constructor() {
        super();
        this.state = {
            bands: bands,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value});
    };

    render() {
        const { bands, searchField} = this.state;
        const filteredBands = bands.filter(band => {
            return band.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 id='title' className='shadow-5 f1'>Dean's Mix</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList bands={filteredBands}/>
                </Scroll>
            </div>
        )
    }
}

export default App;