import React, { Component } from 'react'

class RefDemo extends Component {
  constructor(props){
    super(props)
      this.inputRef = React.createRef()
      this.cbref= null
      this.setCbRef= element => {
        this.cbRef = element
      }
  }
   componentDidMount()
   {

    if (this.cbRef)
    {
      this.cbref.focus()
    }
    //this.inputRef.current.focus()
    //console.log(this.inputRef)
   }
  clickhandler = () => {
    alert (this.inputRef.current.value)
  }
   render(){
    return(
      <div> 
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickhandler}>Click Here</button>
      </div>
    )
  }
}

export default RefDemo