import React, { Component } from 'react';
import translate from '../translations';


export class CrudComponent extends Component {
  constructor(props) {
    super(props);
    this.t = translate;
    this.state = {
      data: 'Add content here',
    };
  }


  render() {
    return (
      <div className="comment-wrapper">
        <h1>{this.t('CrudComponent.heading')}</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default CrudComponent;
