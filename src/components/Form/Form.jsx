import React from 'react';

class Form extends React.Component {
  state = {
    content: "",
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    let body = {content: this.state.content}
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }

    const res = await fetch('/api', options);
    const data = await res.json();
    this.props.getPosts();
    this.setState({content: ''});
  }

  render() {
    return (
      <div>
        <textarea
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    )
  };
}

export default Form
