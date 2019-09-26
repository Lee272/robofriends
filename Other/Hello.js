import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
	render() {
		return (
			<div className='f1 tc'> 
				<h1>Hello Word</h1>
				<p>{this.props.greeting} Welcome to React</p>
			</div>
		);
	}
}




//Other Javascript Method
// const Hello = (props) => {
// 	return (
// 		<div className='f1 tc'> 
// 			<h1>Hello Word</h1>
// 			<p>{props.greeting} Welcome to React</p>
// 		</div>
// 	);
// }



export default Hello;