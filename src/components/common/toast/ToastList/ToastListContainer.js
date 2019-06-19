import React, { Component } from 'react';

import ToastList from '../ToastList';
import { connect } from 'react-redux';
import { getToasts } from '../../../../selectors/toast';

class ToastContainer extends Component {
  render() {
    const { toasts } = this.props;

    return <ToastList toasts={toasts} />;
  }
}

export default connect(state => ({
  toasts: getToasts(state),
}))(ToastContainer);
