import React, {Component} from'react'

class Errorboundary extends Component{
  constructor(props){
    super(props)
    this.state= ({
      hasError: false
    })
  }
 
  render(){
    return(
      <div>
         if(this.state.hasError)
         return('<h1>Something went wrong'</h1>)
         else {this.props.children}
      </div>
    )
  }
}

export default Errorboundary