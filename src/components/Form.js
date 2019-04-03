import React, { Component } from 'react';
import Select from './Select';
// import Gender from './Gender';
export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'username',
      password: '123456',
      select: 'React'
    }

    this.options = ['react' , 'Angular' , 'Vue']; 
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })    // 
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //this.state becomes properties on submit and ca be used by app.js as fields
    
  
  }

  handleSelectClick = (event) => {
    this.setState({ select: event });
    
    // select event overwritten in the form
  }

  renderUserInput = () => {
    return (
      <div>
        <label>username
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
      </div>
    );
  }

  render() {

    return (
    
      <form>
        {this.renderUserInput()}

        <div>
          <label>Password
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <label>Technologies
          <Select selectClick={this.handleSelectClick} options={this.options}/>
            
            {/* select class k selectClick function se value utha k handleSelectClick ko deni h  */}
          </label>
        </div>
        <div>
          {/* <Gender /> */}
        

        </div>
        <div>
          <button type="Submit" onClick={this.handleSubmit}>Submit</button>
        </div>

      </form>
      
    )
  }
}
