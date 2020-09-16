import React, {Component} from 'react';
import {Button} from "./Button"
import * as math from "mathjs"
class App extends Component {
  constructor(props){
    super(props)
    this.state = {input:""}
    this.addToInput = this.addToInput.bind(this)
  }

  addToInput(val){
      this.setState(currstate => ({
        input: currstate.input + val
      }))
  }
  render(){
  return (
    <div className="App">
      <div className="Calculator">
         <div id="display"><span>{this.state.input}</span></div>
         <div className="Row1">
           <div onClick={()=>this.setState({input:""})} className="button" 
           style={{background:"#df1713"}}
           >AC</div>
           <Button handleClick={this.addToInput}>/</Button>
           <Button handleClick={this.addToInput}>&#42;</Button>
         </div>
         <div className="Row2n3">
           <Button handleClick={this.addToInput}>7</Button>
           <Button handleClick={this.addToInput}>8</Button>
           <Button handleClick={this.addToInput}>9</Button>
           <Button handleClick={this.addToInput}>-</Button>
           <Button handleClick={this.addToInput}>4</Button>
           <Button handleClick={this.addToInput}>5</Button>
           <Button handleClick={this.addToInput}>6</Button>
           <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="Row4">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={()=>this.setState({input: math.sqrt(this.state.input).toFixed(4)})}>&radic;</Button>
        </div>
        <div className="Row5">
        <Button handleClick={this.addToInput}>0</Button>
        <Button handleClick={this.addToInput}>.</Button>
        <Button handleClick={()=>this.setState({input: math.evaluate(this.state.input).toFixed(4)})}>=</Button>
        </div>
          
      </div>

    </div>
  );
}
}
export default App;
