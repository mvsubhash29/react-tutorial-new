import React, {Component} from 'react'

class Message extends Component
{
  constructor(){
    super()
      this.state=
      {
        message: "State concept"
      }
    }
  changeMessage()
  {this.setState({
    message:"Successful button for state"
  })
    
  }
  render()
  {
    return (
    <div>
      <h1>{this.state.message}</h1>
      <button onClick= {this.changeMessage.bind(this)}>Click here for state</button>
    </div>)
  }
}

export default Message;