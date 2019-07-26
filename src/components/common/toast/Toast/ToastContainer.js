import React, { Component } from 'react';

import Toast from './index';

import { connect } from 'react-redux';
import { removeToastAction } from '../../../../actions/ui/toast';

class ToastContainer extends Component {
  handleClose = () => {
    const { dispatch, toast } = this.props;
    dispatch(removeToastAction(toast));
  };

  render() {
    const { toast } = this.props;
    return (
      <Toast title={toast.title} body={toast.body} variant={toast.variant} onClose={this.handleClose} />
    );
  }
}

export default connect()(ToastContainer);
