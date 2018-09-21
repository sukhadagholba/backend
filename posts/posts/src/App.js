import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostBody from './components/PostBody/PostBody';

class App extends Component {
	
	constructor(props){
	super(props);
        this.state={
        };
}  
	
	
render() {
    return (
      <div className="App">
	    <Header />
	    <PostBody />
      </div>
    );
  }
}

export default App;
