import React from 'react';
import './App.css';
import Form from '../../components/Form/Form'
import Post from '../../components/Post/Post'

class App extends React.Component {
  state = {
    posts: [],
  }

  getPosts = async () => {
    let res = await fetch('/api');
    let data = await res.json();
    this.setState({posts: data});
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    return (
      <main className="App">
        <Form getPosts={this.getPosts} />
        <div className="App-postList">
          {this.state.posts.length ?
            this.state.posts.map(post => (
              <Post
                key={post._id}
                post={post}
                getPosts={this.getPosts}
              />
            ))
            :
            <h1>No Posts</h1>
          }
        </div>
      </main>
    );
  }
}

export default App;
