import React, { Component } from 'react';
import axios from 'axios';

class InputForm extends Component {

constructor(props) {
    super(props);
    this.state = {
      title: "",
      contents: "",
    };
  }


inputHandler = event =>{
	this.setState({[event.target.name]: event.target.value});
}


addPost = (event) => {
	const title = this.state.title;
	const contents = this.state.contents;

	const post ={title, contents};

       axios
      .post("http://localhost:7000/api/posts", post)
      .then(response => {
        this.props.loadPosts();
	this.setState({ title:"", contents: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

render() {
        return(
        <div className="form-view">
	<input onChange={this.inputHandler} className="input-style" type="text" name="title" placeholder="Title" value={this.state.title} /><br />

	<input onChange={this.inputHandler} className="input-style" type="text" name="contents" placeholder="Contents" value={this.state.contents} /><br /><br />

	<button onClick={()=>{this.addPost()}}>Add Post</button>	
	</div>
	);
}
}

export default InputForm;
