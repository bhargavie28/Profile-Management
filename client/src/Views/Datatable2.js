import React, {Component} from 'react';
import SelectUSState from 'react-select-us-states';
 
class Datatable2 extends Component {
 
  constructor(props) {
    super(props);
 
this.setNewValue = this.setNewValue.bind(this);
  }
 
  setNewValue(newValue) {
    console.log('this is the State code:' + newValue);
  }
 
  render() {
    return (
      <p>
        Select a state: <SelectUSState id="myId" className="myClassName" onChange={this.setNewValue}/>
      </p>
    );
  }
}
 
export default Datatable2;
 