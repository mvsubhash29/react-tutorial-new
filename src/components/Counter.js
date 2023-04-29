import React, {Component} from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state= ({
      count:0
    })
  }
  Increment()
  {
    this.setState((Prevstate) => Prevstate+1)
  }
  render(){
    const {count} = this.state

    return(
      <div>
        
        <button onClick= {this.Increment}> Click {count} times</button>
      </div>
    )
  }
}

export default Counter