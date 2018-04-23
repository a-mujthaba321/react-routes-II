import React, { Component } from 'react';

const withBorder = (WrappedComponent) => {
  const style = {
    border: '2px solid red',
    padding: '10px'
  };

  class _WithBorder extends React.Component {
    render() {
      return (
        <div style={style}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
  _WithBorder.displayName = 'WithBorder';
  return _WithBorder;
};

export default withBorder;
