import React, { Component } from 'react';
import { connect } from 'react-redux';

import AroundButton from '../ObservationsAroundButton';
import { openAroundModal } from '../../../actions/ui/modal/around'

class AroundButtonContainer extends Component{
    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(openAroundModal())
    };

    render(){
        return <AroundButton onClick={this.handleClick} />
    }
}

export default connect()(AroundButtonContainer)