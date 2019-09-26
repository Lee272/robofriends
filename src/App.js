import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange(event){
		console.log(event);
	}
	render() {
		return (
			<div>
				<h1 className='tc'>RoboFriends App</h1>
				<SearchBox SearchChange={this.onSearchChange}/>
				<CardList robots={this.state.robots} />
			</div>
		);
	}
}



export default App;