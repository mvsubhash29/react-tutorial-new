import React, {Component} from 'react'

class LifecycleA extends Component{
  constructor(props){
    super(props)
    this.state ({
      message: "Welcome Dimple"
    })
    console.log('LifecycleA constructor')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromprops')
    return null
  }
  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }
  
  render(){
    console.log('LifecycleA render')
    return(
       <div>
         LifecycleA
       </div>
    )
    }
}

export default LifecycleA