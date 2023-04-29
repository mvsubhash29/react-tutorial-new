import React, {Component} from 'react'

class Form extends Component{

  constructor(props){
     super(props)
     this.state= {
       username: '',
       comments: '',
       drop: ''
     }
  }
  handleUserNameChange = (event) => {
     this.setState ({
       username: event.target.value
     })
  }
  
  handleCommentsChange = (event) => {
    this.setState ({
      comments: event.target.value
    })
  }

  handleDropChange = (event) => {
    this.setState ({
      drop: event.target.value
    })
  }
  handleSubmit = (event) => {
    alert (`${this.state.username} ${this.state.comments} ${this.state.drop} `)
  }
  render(){
    return(
       <form onSubmit = {this.handleSubmit}> 
           <div>
             <label>UserName</label>
             <input type = "text" value= {this.state.username} onChange = {this.handleUserNameChange}/>
           </div>
           <div>
             <label>Comments</label>
             <textarea value = {this.state.comments} onChange = {this.handleCommentsChange}></textarea>
           </div>
           <div>
             <label> Dropdown list</label>
             <select value= {this.state.drop} onChange= {this.handleDropChange}>
                 <option value= 'React'>Learning React</option>
                 <option value= 'Node'>Learning Node</option>
             </select>
             <button> Submit</button>
           </div>

        </form>
     )
  }
}

export default Form