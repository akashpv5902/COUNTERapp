import React, { Component } from 'react'

export default class CounterClass extends Component {

    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }



  render() {
    return (
      <div>
        CounterClass
        <p>You Clicked&nbsp;&nbsp;&nbsp;{this.state.counter}&nbsp;&nbsp;&nbsp;Times</p>
        <button onClick={()=>this.setState({counter:this.state.counter+1})}>Add</button>
        <button onClick={()=>this.setState({counter:this.state.counter-1})}>Sub</button>
      </div>
    )
  }
}
