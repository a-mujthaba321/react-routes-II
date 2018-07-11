
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';

import { AsyncCreatable, Creatable, Select } from 'react-select';
import { fetchAtolls } from '../../actions/action_atoll';

class AsyncCreate extends Component {

  constructor() {
    super();
    this.getOptions = this.getOptions.bind(this);
  }

  state = {
    selectedOption: '',
  }

  componentDidMount() {
    this.props.fetchAtolls();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);



    return _.map(nextProps.atolls, atoll => 
      {
        {value: atoll.atollName};
      });
  }

  getOptions(input, callback) {

    if(this.props.atolls) {
      return _.map(this.props.atolls, atoll => 
        {
          {value: atoll.atollName};
        });

    }


  };


  render() {

    const { selectedOption } = this.state;

    return (
       <div>
               <Creatable
                 name="form-field-name"
                 value={selectedOption}
                 onChange={this.handleChange}
                 onChange={this.handleChange}
                options={[
                   { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' },
                ]}
               />

       </div>
    );
  }
}

function mapStateToProps(state) {
  return { atolls: state.atolls };
}

export default connect(mapStateToProps, { fetchAtolls })(AsyncCreate);