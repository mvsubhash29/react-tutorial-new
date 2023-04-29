import React, { Component } from 'react';

export class ClassComponentTutorial extends Component {

  /**
   * 
   * @returns component
   * 
   * Mounting phase
   *    componentWillMount
   *    render
   *    componentDidMount
   * 
   * 
   *    constructor
   *    static getDerivedStateFromProps(props, state)
   *    render()
   *    componentDidMount
   * 
   * Updating phase
   * 
   *    componentWillReceiveProps
   *    shouldComponentUpdate
   *    componentWillUpdate -> getSnapshotBeforeUpdate
   *    render
   *    componentDidUpdate
   * 
   * unmount phase
   *    
   *    componentWillUnMount
   * 
   */

  render() {
    return (
      <>
        <h1>ClassComponentTutorial</h1>
      </>
    )
  }
}