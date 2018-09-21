import React, { Component } from 'react';
import axios from 'axios';
import InputForm from '../InputForm/InputForm';

class PostBody extends Component {

constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

componentDidMount() {
        this.loadPosts();
}


loadPosts = () => {
       axios
      .get("http://localhost:7000/api/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };


deleteHandler = (id) => {
        axios
        .delete(`http://localhost:7000/api/posts/${id}`)
        .then(response => {
        this.loadPosts();
      })

      .catch(err => {
        console.log(err);
      });
};


render() {
    return (
      <div className="main-container">
	 <InputForm loadPosts ={this.loadPosts}/>   
        <div className="App-container">
        {this.state.posts.map(post =>
       <div className="post-container" key={post.id}>
        <p className="post-title">{post.title}</p>
        <p className="post-content">{post.contents}</p>
	<button onClick={()=>{this.deleteHandler(post.id)}}>delete</button>	
        </div>
      )}
        </div>
        </div>
    );
  }
}

export default PostBody;
