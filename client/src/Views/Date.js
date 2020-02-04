import React,{ Component } from 'react';

import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
 
class TagInput extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {primaryskills: []}
  }
 
  handleChange(primaryskills) {
    this.setState({primaryskills})
  }
 
  render() {
    return <TagsInput value={this.state.primaryskills} onChange={this.handleChange} />;
  }
}

export default TagInput;