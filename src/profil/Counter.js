import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
            memory:null
        }
    }
    increment=()=>{
        this.setState({ count: this.state.count+1});
    }
    componentDidMount(){
      console.log("componentDidMount()")
     this.setState({ memory: setInterval(() => {
      this.increment()
    }, 1000)  });
    }
    componentWillUnmount(){
      console.log("componentWillUnmount()")
      clearInterval(this.state.memory)
    }
    render() {
        return (
            <div>
                <button>{this.state.count}</button>
            </div>
        )
    }
}

export default Counter
