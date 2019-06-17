import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatisticsModal from './index';
import { isStatisticsModalOpen } from '../../selectors/statisticsModal';
import { closeStatisticsModalAction } from '../../actions/statisticsModal';

class StatisticsModalContainer extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(closeStatisticsModalAction());
  };

  render() {
    const { isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    return <StatisticsModal onClose={this.handleClose} />;
  }
}

export default connect(state => ({
  isOpen: isStatisticsModalOpen(state),
}))(StatisticsModalContainer);
