import React, { Component } from 'react';
import './styles.css';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<div className="App" style={{height: '1200px', background: 'cornflowerblue'}}>
				<Header />
			</div>	
		);
	}
}

export default App;
