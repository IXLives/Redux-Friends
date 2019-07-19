import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import getFriends from '../actions/actions'

class FriendsList extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

  render() {
    return <p>Friends</p>;
  }
}

const mapDispatchToProps = {
    getFriends
};

export default withRouter(connect(null, mapDispatchToProps)(FriendsList))
